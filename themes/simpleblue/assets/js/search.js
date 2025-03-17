// Simple client-side search implementation for Hugo
document.addEventListener('DOMContentLoaded', function() {
    let searchData;
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    // Fetch the search index
    fetch('/index.json')
        .then(response => response.json())
        .then(data => {
            searchData = data;
        })
        .catch(error => {
            console.error('Error loading search index:', error);
        });
    
    // Search function
    function performSearch(query) {
        if (!searchData || query.trim() === '') {
            searchResults.innerHTML = '<p>请输入搜索关键词</p>';
            return;
        }
        
        // Convert to lowercase for case-insensitive search
        const searchTerm = query.toLowerCase();
        
        // Filter items that match the search term
        const results = searchData.filter(item => {
            return (
                item.title.toLowerCase().includes(searchTerm) ||
                item.content.toLowerCase().includes(searchTerm) ||
                (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchTerm))) ||
                (item.categories && item.categories.some(cat => cat.toLowerCase().includes(searchTerm)))
            );
        });
        
        // Display results
        if (results.length === 0) {
            searchResults.innerHTML = '<p>没有找到匹配的结果</p>';
            return;
        }
        
        let resultsHtml = '';
        results.forEach(item => {
            // Create snippet from content
            let snippet = '';
            const maxSnippetLength = 200;
            const contentLower = item.content.toLowerCase();
            const termIndex = contentLower.indexOf(searchTerm);
            
            if (termIndex !== -1) {
                // Show content around the search term
                const start = Math.max(0, termIndex - 60);
                const end = Math.min(item.content.length, termIndex + searchTerm.length + 60);
                
                // Get the snippet
                snippet = item.content.substring(start, end);
                
                // Add ellipsis if needed
                if (start > 0) {
                    snippet = '...' + snippet;
                }
                if (end < item.content.length) {
                    snippet = snippet + '...';
                }
                
                // Highlight the search term
                const highlightedSnippet = snippet.replace(
                    new RegExp(searchTerm, 'gi'),
                    match => `<span class="search-highlight">${match}</span>`
                );
                
                snippet = highlightedSnippet;
            } else {
                // If term not found in content, use beginning of content
                snippet = item.content.substring(0, maxSnippetLength) + '...';
            }
            
            // Create result item HTML
            resultsHtml += `
                <div class="search-result-item">
                    <h3 class="search-result-title">
                        <a href="${item.permalink}">${
                            item.title.replace(
                                new RegExp(searchTerm, 'gi'),
                                match => `<span class="search-highlight">${match}</span>`
                            )
                        }</a>
                    </h3>
                    <div class="search-result-meta">
                        <time>${item.date}</time>
                        ${item.categories && item.categories.length ? 
                            ' • ' + item.categories.map(cat => 
                                `<a href="/categories/${encodeURIComponent(cat.toLowerCase())}">${cat}</a>`
                            ).join(', ') : ''}
                    </div>
                    <div class="search-result-snippet">${snippet}</div>
                </div>
            `;
        });
        
        searchResults.innerHTML = resultsHtml;
    }
    
    // Add event listeners
    if (searchInput) {
        // Debounce search to improve performance
        let debounceTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => {
                performSearch(this.value);
            }, 300);
        });
        
        // Clear results when input is cleared
        searchInput.addEventListener('change', function() {
            if (this.value === '') {
                searchResults.innerHTML = '';
            }
        });
    }
});
