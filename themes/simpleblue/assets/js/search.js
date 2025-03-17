document.addEventListener('DOMContentLoaded', function() {
    let searchData;           // Stores the search index
    let searchCache = {};     // Caches search results
    let currentVersion = null; // Tracks the current index version
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    // Load the search index
    function loadSearchIndex() {
        return fetch('/index.json')
            .then(response => response.json())
            .then(data => {
                searchData = data.data; // Adjust based on your JSON structure (e.g., data.data or just data)
                currentVersion = data.version; // Expecting a version field in /index.json
                console.log('Search index loaded:', searchData.length + ' articles, Version:', currentVersion);
            })
            .catch(error => {
                console.error('Failed to load search index:', error);
                searchResults.innerHTML = '<div class="search-message">Failed to load search index. Please refresh the page.</div>';
            });
    }

    // Initial index load
    loadSearchIndex();

    /**
     * Fuzzy search function - Optimized with caching
     */
    function fuzzySearch(items, query) {
        const cacheKey = query.toLowerCase();
        if (searchCache[cacheKey]) {
            return searchCache[cacheKey];
        }

        query = query.toLowerCase();
        const queryWords = query.split(/\s+/).filter(w => w.length >= 2);

        const results = items.map(item => {
            let score = 0;
            const titleLower = item.title.toLowerCase();
            const contentLower = item.content.toLowerCase();

            // Exact title match
            if (titleLower === query) score += 100;
            else if (titleLower.includes(query)) score += 50;

            // Content match
            if (contentLower.includes(query)) score += 30;

            // Tags and categories
            if (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query))) score += 20;
            if (item.categories && item.categories.some(cat => cat.toLowerCase().includes(query))) score += 20;

            // Multi-word matching
            if (queryWords.length > 1) {
                const matchCount = queryWords.filter(word =>
                    titleLower.includes(word) || contentLower.includes(word)
                ).length;
                score += (matchCount / queryWords.length) * 25;
            }

            // Fuzzy matching with Levenshtein distance
            for (const word of queryWords.length > 1 ? queryWords : [query]) {
                if (word.length < 2) continue;

                for (let i = 0; i <= titleLower.length - word.length; i++) {
                    const slicedTitle = titleLower.slice(i, i + word.length);
                    const distance = levenshteinDistance(slicedTitle, word);
                    if (distance <= 2) {
                        score += (1 - distance / Math.max(slicedTitle.length, word.length)) * 10;
                        break;
                    }
                }

                if (contentLower.includes(word)) score += 5;
            }

            return { item, score };
        })
        .filter(result => result.score > 0)
        .sort((a, b) => b.score - a.score);

        searchCache[cacheKey] = results;
        return results;
    }

    /**
     * Levenshtein distance for fuzzy matching
     */
    function levenshteinDistance(a, b) {
        if (a.length === 0) return b.length;
        if (b.length === 0) return a.length;

        let prevRow = Array(b.length + 1).fill(0);
        let currRow = Array(b.length + 1).fill(0);

        for (let i = 0; i <= b.length; i++) prevRow[i] = i;

        for (let i = 0; i < a.length; i++) {
            currRow[0] = i + 1;
            for (let j = 0; j < b.length; j++) {
                const cost = a[i] === b[j] ? 0 : 1;
                currRow[j + 1] = Math.min(
                    currRow[j] + 1,
                    prevRow[j + 1] + 1,
                    prevRow[j] + cost
                );
            }
            [prevRow, currRow] = [currRow, prevRow];
        }

        return prevRow[b.length];
    }

    /**
     * Perform search with real-time index check
     */
    function performSearch(query) {
        if (!searchData) {
            searchResults.innerHTML = '<div class="search-message">Search index is loading, please wait...</div>';
            return;
        }

        if (query.trim() === '') {
            searchResults.innerHTML = '<div class="search-message">Please enter search keywords</div>';
            return;
        }

        // Check if the index version has changed
        fetch('/index.json')
            .then(response => response.json())
            .then(data => {
                if (data.version !== currentVersion) {
                    // Index updated, reload it
                    loadSearchIndex().then(() => {
                        searchCache = {}; // Clear cache
                        doSearch(query);  // Perform search with updated data
                    });
                } else {
                    doSearch(query); // Use existing data
                }
            })
            .catch(error => {
                console.error('Failed to check index version:', error);
                doSearch(query); // Fallback to current data
            });
    }

    /**
     * Execute the search and display results
     */
    function doSearch(query) {
        const startTime = performance.now();
        const results = fuzzySearch(searchData, query);
        const endTime = performance.now();

        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-message">No matching results found</div>';
            return;
        }

        const searchTime = ((endTime - startTime) / 1000).toFixed(3);
        let resultsHtml = `<div class="search-summary">Found ${results.length} results (${searchTime} seconds)</div>`;

        results.forEach(({ item, score }) => {
            let snippet = '';
            const queryLower = query.toLowerCase();
            const contentLower = item.content.toLowerCase();
            const termIndex = contentLower.indexOf(queryLower);

            if (termIndex !== -1) {
                const start = Math.max(0, termIndex - 60);
                const end = Math.min(item.content.length, termIndex + query.length + 100);
                snippet = item.content.substring(start, end);
                if (start > 0) snippet = '...' + snippet;
                if (end < item.content.length) snippet += '...';
            } else {
                snippet = item.content.substring(0, 200) + '...';
            }

            resultsHtml += `
                <div class="search-result-item">
                    <h3 class="search-result-title">
                        <a href="${item.permalink}">${highlightText(item.title, query)}</a>
                    </h3>
                    <div class="search-result-meta">
                        <time>${item.date}</time>
                        ${item.categories && item.categories.length ?
                            ' • ' + item.categories.map(cat =>
                                `<a href="/categories/${encodeURIComponent(cat.toLowerCase())}">${cat}</a>`
                            ).join(', ') : ''}
                        ${item.tags && item.tags.length ?
                            ' • ' + item.tags.map(tag =>
                                `<a href="/tags/${encodeURIComponent(tag.toLowerCase())}">#${tag}</a>`
                            ).join(' ') : ''}
                    </div>
                    <div class="search-result-snippet">${highlightText(snippet, query)}</div>
                </div>
            `;
        });

        searchResults.innerHTML = resultsHtml;
    }

    /**
     * Highlight matching text
     */
    function highlightText(text, query) {
        const queryWords = query.split(/\s+/).filter(w => w.length > 1);
        let highlightedText = text;

        if (queryWords.length > 1) {
            queryWords.forEach(word => {
                const regex = new RegExp(escapeRegExp(word), 'gi');
                highlightedText = highlightedText.replace(regex, match =>
                    `<span class="search-highlight">${match}</span>`
                );
            });
            return highlightedText;
        } else {
            const regex = new RegExp(escapeRegExp(query), 'gi');
            return highlightedText.replace(regex, match =>
                `<span class="search-highlight">${match}</span>`
            );
        }
    }

    /**
     * Escape special regex characters
     */
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // Search event handlers
    if (searchInput) {
        let debounceTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => {
                performSearch(this.value);
            }, 300);
        });

        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
                e.preventDefault();
            }
        });

        searchInput.addEventListener('change', function() {
            if (this.value === '') {
                searchResults.innerHTML = '<div class="search-message">Please enter search keywords</div>';
            }
        });
    }
});
