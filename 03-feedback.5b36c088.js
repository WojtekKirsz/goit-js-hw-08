!function(){var e,t=document.querySelector(".feedback-form"),a="message";t.elements.message.value=null!==(e=localStorage.getItem(a))&&void 0!==e?e:"",t.addEventListener("input",(function(e){localStorage.setItem(a,e.target.value)})),t.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem(a),t.reset()}))}();
//# sourceMappingURL=03-feedback.5b36c088.js.map
