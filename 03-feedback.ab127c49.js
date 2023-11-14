const e=document.querySelector(".feedback-form");var t;e.elements.message.value=null!==(t="message".getItem("message"))&&void 0!==t?t:"",e.addEventListener("input",(e=>{localStorage.setItem("message",e.target.value)})),e.addEventListener("submit",(t=>{t.preventDefault(),localStorage.removeItem("message"),e.reset()}));
//# sourceMappingURL=03-feedback.ab127c49.js.map
