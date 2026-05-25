(function () {
  const menuButton = document.querySelector("[data-menu-button]");
  const mobilePanel = document.querySelector("[data-mobile-panel]");

  if (menuButton && mobilePanel) {
    menuButton.addEventListener("click", () => {
      const open = mobilePanel.classList.toggle("open");
      document.body.classList.toggle("menu-open", open);
      menuButton.setAttribute("aria-expanded", String(open));
    });

    mobilePanel.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        mobilePanel.classList.remove("open");
        document.body.classList.remove("menu-open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.querySelectorAll("[data-copy]").forEach((button) => {
    const originalText = button.textContent;
    button.addEventListener("click", async () => {
      const value = button.getAttribute("data-copy") || "";
      try {
        await navigator.clipboard.writeText(value);
        button.textContent = "已复制";
      } catch (error) {
        button.textContent = value;
      }
      window.setTimeout(() => {
        button.textContent = originalText;
      }, 1600);
    });
  });

  const params = new URLSearchParams(window.location.search);
  const intent = params.get("intent");
  const source = params.get("source") || document.referrer || "direct";

  const intentSelect = document.querySelector("[data-intent-select]");
  if (intentSelect && intent) {
    const option = Array.from(intentSelect.options).find(
      (item) => item.value === intent
    );
    if (option) intentSelect.value = intent;
  }

  const sourceField = document.querySelector("input[name='source']");
  if (sourceField) sourceField.value = source;

  const form = document.querySelector("[data-consult-form]");
  const success = document.querySelector("[data-success-message]");
  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      formData.set("form-name", form.getAttribute("name") || "consultation");
      const encoded = new URLSearchParams(formData).toString();
      const local = /^(localhost|127\.0\.0\.1|0\.0\.0\.0)$/i.test(
        window.location.hostname
      );

      if (!local && window.location.protocol !== "file:") {
        try {
          await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encoded,
          });
        } catch (error) {
          // Keep the page usable even when the static host is not Netlify.
        }
      } else {
        localStorage.setItem("angel-consultation-draft", encoded);
      }

      form.reset();
      if (intentSelect && intent) intentSelect.value = intent;
      if (sourceField) sourceField.value = source;
      if (success) {
        success.classList.add("show");
        success.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    });
  }
})();

// M3: sticky-cta scroll behavior (hide on scroll down, show on scroll up)
(function(){
  var cta=document.querySelector('.sticky-cta');
  if(!cta)return;
  var lastY=0,ticking=false,hidden=false;
  function onScroll(){
    var y=window.pageYOffset||document.documentElement.scrollTop;
    if(Math.abs(y-lastY)<8)return;
    if(y>lastY&&!hidden&&y>400){cta.style.transform='translateY(100%)';hidden=true}
    if(y<lastY&&hidden){cta.style.transform='translateY(0)';hidden=false}
    lastY=y;
    ticking=false;
  }
  window.addEventListener('scroll',function(){
    if(!ticking){requestAnimationFrame(onScroll);ticking=true}
  },{passive:true});
  cta.style.transition='transform .22s ease';
})();
