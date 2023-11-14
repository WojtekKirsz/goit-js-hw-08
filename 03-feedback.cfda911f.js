!function(){var e,t=document.querySelector(".feedback-form"),n="value";t.elements.message.value=null!==(e=n.getItem(n))&&void 0!==e?e:"",t.addEventListener("input",(function(e){localStorage.setItem(n,e.target.value)})),t.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem(n),t.reset()}))}();
//# sourceMappingURL=03-feedback.cfda911f.js.map
