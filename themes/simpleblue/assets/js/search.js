/**
 * 强大的模糊搜索实现
 * 优化性能和用户体验
 */
document.addEventListener('DOMContentLoaded', function() {
    let searchData;
    let searchCache = {};
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    // 加载搜索索引
    fetch('/index.json')
        .then(response => response.json())
        .then(data => {
            searchData = data;
            console.log('搜索索引加载完成', searchData.length + '篇文章');
        })
        .catch(error => {
            console.error('加载搜索索引失败:', error);
            searchResults.innerHTML = '<div class="search-message">加载搜索索引失败，请刷新页面重试</div>';
        });

    /**
     * 模糊搜索函数 - 优化版本
     * 支持关键词分离和编辑距离算法
     */
    function fuzzySearch(items, query) {
        // 检查缓存中是否已有该查询的结果
        const cacheKey = query.toLowerCase();
        if (searchCache[cacheKey]) {
            return searchCache[cacheKey];
        }

        query = query.toLowerCase();
        const queryWords = query.split(/\s+/).filter(w => w.length >= 2);

        const results = items.map(item => {
            // 计算相关性分数
            let score = 0;

            // 标题匹配得高分
            const titleLower = item.title.toLowerCase();
            if (titleLower === query) score += 100;
            else if (titleLower.includes(query)) score += 50;

            // 内容匹配
            const contentLower = item.content.toLowerCase();
            if (contentLower.includes(query)) score += 30;

            // 标签和分类匹配
            if (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query))) {
                score += 20;
            }
            if (item.categories && item.categories.some(cat => cat.toLowerCase().includes(query))) {
                score += 20;
            }

            // 对分词进行匹配
            if (queryWords.length > 1) {
                const matchCount = queryWords.filter(word =>
                    titleLower.includes(word) || contentLower.includes(word)
                ).length;
                score += (matchCount / queryWords.length) * 25;
            }

            // 对每个单词进行模糊匹配
            for (const word of queryWords.length > 1 ? queryWords : [query]) {
                if (word.length < 2) continue;

                // 检查标题中的近似匹配
                for (let i = 0; i <= titleLower.length - word.length; i++) {
                    const slicedTitle = titleLower.slice(i, i + word.length);
                    const distance = levenshteinDistance(slicedTitle, word);
                    if (distance <= 2) {  // 允许最多2个字符的差异
                        score += (1 - distance / Math.max(slicedTitle.length, word.length)) * 10;
                        break;
                    }
                }

                // 在内容中进行关键词匹配
                if (contentLower.includes(word)) {
                    score += 5;
                }
            }

            return {
                item,
                score
            };
        })
        .filter(result => result.score > 0)
        .sort((a, b) => b.score - a.score);

        // 存入缓存
        searchCache[cacheKey] = results;

        return results;
    }

    /**
     * 编辑距离计算（用于模糊匹配）
     * 优化的Levenshtein算法
     */
    function levenshteinDistance(a, b) {
        if (a.length === 0) return b.length;
        if (b.length === 0) return a.length;

        // 为了提高性能，使用一维数组代替二维矩阵
        let prevRow = Array(b.length + 1).fill(0);
        let currRow = Array(b.length + 1).fill(0);

        // 初始化第一行
        for (let i = 0; i <= b.length; i++) {
            prevRow[i] = i;
        }

        // 填充矩阵
        for (let i = 0; i < a.length; i++) {
            currRow[0] = i + 1;

            for (let j = 0; j < b.length; j++) {
                const cost = a[i] === b[j] ? 0 : 1;
                currRow[j + 1] = Math.min(
                    currRow[j] + 1,                // 删除
                    prevRow[j + 1] + 1,            // 插入
                    prevRow[j] + cost               // 替换
                );
            }

            // 交换行
            [prevRow, currRow] = [currRow, prevRow];
        }

        // 由于交换了行，结果在prevRow中
        return prevRow[b.length];
    }

    /**
     * 执行搜索并显示结果
     */
    function performSearch(query) {
        if (!searchData) {
            searchResults.innerHTML = '<div class="search-message">搜索索引正在加载中，请稍后再试</div>';
            return;
        }

        if (query.trim() === '') {
            searchResults.innerHTML = '<div class="search-message">请输入搜索关键词</div>';
            return;
        }

        const startTime = performance.now();
        const results = fuzzySearch(searchData, query);
        const endTime = performance.now();

        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-message">没有找到匹配的结果</div>';
            return;
        }

        const searchTime = ((endTime - startTime) / 1000).toFixed(3);
        let resultsHtml = `<div class="search-summary">找到 ${results.length} 个结果 (${searchTime} 秒)</div>`;

        results.forEach(({ item, score }) => {
            // 创建内容片段
            let snippet = '';
            const queryLower = query.toLowerCase();
            const contentLower = item.content.toLowerCase();
            const termIndex = contentLower.indexOf(queryLower);

            if (termIndex !== -1) {
                // 显示包含搜索词的上下文
                const start = Math.max(0, termIndex - 60);
                const end = Math.min(item.content.length, termIndex + query.length + 100);

                snippet = item.content.substring(start, end);

                // 添加省略号
                if (start > 0) {
                    snippet = '...' + snippet;
                }
                if (end < item.content.length) {
                    snippet = snippet + '...';
                }
            } else {
                // 如果没有找到精确匹配，则显示内容开头
                snippet = item.content.substring(0, 200) + '...';
            }

            // 创建结果项HTML
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
     * 高亮显示匹配的文本
     */
    function highlightText(text, query) {
        const queryWords = query.split(/\s+/).filter(w => w.length > 1);

        if (queryWords.length > 1) {
            // 多个关键词分别高亮
            let highlightedText = text;
            queryWords.forEach(word => {
                const regex = new RegExp(escapeRegExp(word), 'gi');
                highlightedText = highlightedText.replace(regex, match =>
                    `<span class="search-highlight">${match}</span>`
                );
            });
            return highlightedText;
        } else {
            // 单个关键词高亮
            const regex = new RegExp(escapeRegExp(query), 'gi');
            return text.replace(regex, match =>
                `<span class="search-highlight">${match}</span>`
            );
        }
    }

    /**
     * 转义正则表达式特殊字符
     */
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // 搜索事件处理
    if (searchInput) {
        // 去抖动处理
        let debounceTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => {
                performSearch(this.value);
            }, 300);
        });

        // 回车键确认搜索
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
                e.preventDefault();
            }
        });

        // 清空输入时清空结果
        searchInput.addEventListener('change', function() {
            if (this.value === '') {
                searchResults.innerHTML = '<div class="search-message">请输入搜索关键词</div>';
            }
        });
    }
});
