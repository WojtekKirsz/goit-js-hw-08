const e=document.querySelector(".feedback-form");var t;e.elements.message.value=null!==(t="value".getItem("value"))&&void 0!==t?t:"",e.addEventListener("input",(e=>{localStorage.setItem("value",e.target.value)})),e.addEventListener("submit",(t=>{t.preventDefault(),localStorage.removeItem("value"),e.reset()}));
//# sourceMappingURL=03-feedback.3e174d1e.js.map
