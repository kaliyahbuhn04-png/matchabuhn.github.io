document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll(".heart").forEach(btn=>{
    btn.addEventListener("click",()=>{
      btn.textContent = btn.textContent === "♡" ? "♥" : "♡";
    });
  });
});