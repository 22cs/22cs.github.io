document.addEventListener("DOMContentLoaded",function(){let t;const n=document.getElementById("search-input"),e=document.getElementById("search-results");fetch("/index.json").then(e=>e.json()).then(e=>{t=e}).catch(e=>{console.error("Error loading search index:",e)});function s(n){if(!t||n.trim()===""){e.innerHTML="<p>请输入搜索关键词</p>";return}const s=n.toLowerCase(),o=t.filter(e=>e.title.toLowerCase().includes(s)||e.content.toLowerCase().includes(s)||e.tags&&e.tags.some(e=>e.toLowerCase().includes(s))||e.categories&&e.categories.some(e=>e.toLowerCase().includes(s)));if(o.length===0){e.innerHTML="<p>没有找到匹配的结果</p>";return}let i="";o.forEach(e=>{let t="";const o=200,a=e.content.toLowerCase(),n=a.indexOf(s);if(n!==-1){const o=Math.max(0,n-60),i=Math.min(e.content.length,n+s.length+60);t=e.content.substring(o,i),o>0&&(t="..."+t),i<e.content.length&&(t=t+"...");const a=t.replace(new RegExp(s,"gi"),e=>`<span class="search-highlight">${e}</span>`);t=a}else t=e.content.substring(0,o)+"...";i+=`
                <div class="search-result-item">
                    <h3 class="search-result-title">
                        <a href="${e.permalink}">${e.title.replace(new RegExp(s,"gi"),e=>`<span class="search-highlight">${e}</span>`)}</a>
                    </h3>
                    <div class="search-result-meta">
                        <time>${e.date}</time>
                        ${e.categories&&e.categories.length?" • "+e.categories.map(e=>`<a href="/categories/${encodeURIComponent(e.toLowerCase())}">${e}</a>`).join(", "):""}
                    </div>
                    <div class="search-result-snippet">${t}</div>
                </div>
            `}),e.innerHTML=i}if(n){let t;n.addEventListener("input",function(){clearTimeout(t),t=setTimeout(()=>{s(this.value)},300)}),n.addEventListener("change",function(){this.value===""&&(e.innerHTML="")})}})