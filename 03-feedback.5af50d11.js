!function(){var e,t=document.querySelector(".feedback-form"),n="message";t.elements.message.value=null!==(e=n.getItem(n))&&void 0!==e?e:"",t.addEventListener("input",(function(e){localStorage.setItem(n,e.target.value)})),t.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem(n),t.reset()}))}();
//# sourceMappingURL=03-feedback.5af50d11.js.map
