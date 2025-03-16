document.addEventListener("DOMContentLoaded",function(){addCopyButtons(),handleExternalLinks(),enableImageZoom(),addHeadingAnchors()});function addCopyButtons(){const e=document.querySelectorAll("pre > code");if(e.length===0)return;e.forEach(function(e){const n=e.parentNode,t=document.createElement("button");t.className="copy-button",t.textContent="Copy",n.insertBefore(t,e),t.addEventListener("click",function(){const n=e.textContent;navigator.clipboard.writeText(n).then(function(){t.textContent="Copied!",setTimeout(function(){t.textContent="Copy"},2e3)}).catch(function(e){console.error("Failed to copy code: ",e),t.textContent="Error",setTimeout(function(){t.textContent="Copy"},2e3)})})});const t=document.createElement("style");t.textContent=`
        pre {
            position: relative;
        }
        .copy-button {
            position: absolute;
            top: 5px;
            right: 5px;
            background-color: rgba(255, 255, 255, 0.8);
            border: 1px solid #ccc;
            border-radius: 4px;
            padding: 4px 8px;
            font-size: 12px;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.2s;
        }
        pre:hover .copy-button {
            opacity: 1;
        }
    `,document.head.appendChild(t)}function handleExternalLinks(){const e=document.querySelectorAll("a");e.forEach(function(e){e.hostname!==window.location.hostname&&e.hostname!==""&&(e.target="_blank",e.rel="noopener noreferrer")})}function enableImageZoom(){const s=document.querySelectorAll(".post-content img");if(s.length===0)return;const e=document.createElement("div");e.className="image-zoom-container",e.style.display="none";const t=document.createElement("div");t.className="image-zoom-overlay";const n=document.createElement("img");n.className="image-zoom-img",e.appendChild(t),e.appendChild(n),document.body.appendChild(e);const o=document.createElement("style");o.textContent=`
        .post-content img {
            cursor: zoom-in;
            transition: transform 0.2s;
        }
        .post-content img:hover {
            transform: scale(1.02);
        }
        .image-zoom-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .image-zoom-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            cursor: zoom-out;
        }
        .image-zoom-img {
            max-width: 90%;
            max-height: 90%;
            z-index: 1001;
            object-fit: contain;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }
    `,document.head.appendChild(o),s.forEach(function(t){t.addEventListener("click",function(){n.src=t.src,e.style.display="flex",document.body.style.overflow="hidden"})}),t.addEventListener("click",function(){e.style.display="none",document.body.style.overflow=""})}function addHeadingAnchors(){const e=document.querySelectorAll(".post-content h2, .post-content h3, .post-content h4");if(e.length===0)return;const t=document.createElement("style");t.textContent=`
        .heading-anchor {
            opacity: 0;
            margin-left: 8px;
            font-size: 0.8em;
            transition: opacity 0.2s;
            text-decoration: none;
            border-bottom: none !important;
        }
        h2:hover .heading-anchor,
        h3:hover .heading-anchor,
        h4:hover .heading-anchor {
            opacity: 1;
        }
    `,document.head.appendChild(t),e.forEach(function(e,t){e.id||(e.id="heading-"+t);const n=document.createElement("a");n.className="heading-anchor",n.href="#"+e.id,n.innerHTML="#",n.title="Direct link to this heading",e.appendChild(n)})}