document.querySelector(".logo").addEventListener("click",function(){new Promise(function(e){e("Promise was resolved!")}).then(function(e){var t=document.createElement("div");t.className="message",t.textContent=e,document.body.appendChild(t)})}),new Promise(function(e,t){setTimeout(function(){t(Error("Promise was rejected!"))},3e3)}).catch(function(e){var t=document.createElement("div");t.className="message error-message",t.textContent=e.message,document.body.appendChild(t)});
//# sourceMappingURL=index.f85d9e1a.js.map