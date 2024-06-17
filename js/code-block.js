KEEP.initCodeBlock=()=>{!0===KEEP.theme_config?.code_block?.tools?.enable&&(KEEP.utils.initCodeBlockTools=()=>{var e=(KEEP.theme_config?.code_block||{})["style"],t=(KEEP.theme_config?.code_block?.tools||{})["style"];let a="mac"===(e||t||"default"),s=a?"fas fa-chevron-left":"fas fa-chevron-right",{copy:c,copied:r,fold:d,folded:p}=KEEP.language_code_block,f=`<span class="tool fold tooltip" data-tooltip-content="${d}" data-tooltip-offset-y="-2px"><i class="fas fa-chevron-down"></i></span>`;document.querySelectorAll("figure.highlight").forEach(n=>{let e=n.classList.length?n.classList[1].toUpperCase():"";"PLAINTEXT"===e&&(e="");var t=document.createElement("div"),o=(t.classList.add("highlight-container"),a&&t.classList.add("mac"),n.wrap(t),e?'<span class="code-lang">'+e+"</span>":"");t.insertAdjacentHTML("afterbegin",`<div class="code-tools-box">
        ${a?f+o:"<span>"+f+o+"</span>"}
        <span class="tool copy tooltip" data-tooltip-content="${c}" data-tooltip-offset-y="-2px"><i class="fas fa-copy"></i></span>
      </div>`);let i=n.parentNode.querySelector(".code-tools-box");t=i.querySelector(".copy"),o=i.querySelector(".fold");t.addEventListener("click",e=>{var e=e.currentTarget,t=[...n.querySelectorAll(".code .line")].map(e=>e.innerText).join("\n"),o=document.createElement("textarea"),l=(o.style.top=window.scrollY+"px",o.style.position="absolute",o.style.opacity="0",o.readOnly=!0,o.value=t,document.body.append(o),document.getSelection()),a=0<l.rangeCount&&l.getRangeAt(0),t=(o.select(),o.setSelectionRange(0,t.length),o.readOnly=!1,document.execCommand("copy")),s=e.querySelector("i"),c=i.querySelector(".copy .tooltip-content");t?(s.className="fas fa-check",c&&(c.innerHTML=r)):s.className="fas fa-times",o.blur(),e.blur(),a&&(l.removeAllRanges(),l.addRange(a)),document.body.removeChild(o)}),t.addEventListener("mouseleave",t=>{setTimeout(()=>{t.target.querySelector("i").className="fas fa-copy";var e=i.querySelector(".copy .tooltip-content");e&&(e.innerHTML=c)},500)});let l=!1;o.addEventListener("click",e=>{var e=e.currentTarget.querySelector("i"),t=i.querySelector(".fold .tooltip-content");(l=!l)?(e.className=s,n.classList.add("folded"),i.classList.add("folded"),t&&(t.innerHTML=p)):(e.className="fas fa-chevron-down",n.classList.remove("folded"),i.classList.remove("folded"),t&&(t.innerHTML=d))})})},KEEP.utils.initCodeBlockTools()),KEEP.utils.shrinkCodeBlock=()=>{document.querySelectorAll("figure.highlight").forEach(e=>{{var o=e;let t=o.getBoundingClientRect().height;if(50<t-200){o.style.position="relative",o.style.overflow="hidden",o.style.height="200px";let e=document.createElement("div");e.setAttribute("class","shrink-line flex-center"),e.style.height="30px",e.style.top="170px",e.addEventListener("click",()=>{o.style.removeProperty("overflow"),o.style.overflowY="hidden",o.style.overflowX="auto",o.style.height=t+"px",e.style.display="none"}),o.appendChild(e)}}})},KEEP.utils.shrinkCodeBlock()};