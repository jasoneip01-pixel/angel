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
  const output = document.querySelector("[data-message-output]");
  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const lines = [
        "天使在线 · 华学苑咨询",
        "",
        "家长称呼：" + (formData.get("parentName") || ""),
        "孩子年级 / 年龄：" + (formData.get("childGrade") || ""),
        "手机号：" + (formData.get("phone") || ""),
        "微信号：" + (formData.get("wechat") || ""),
        "想了解：" + (formData.get("intent") || ""),
        "当前问题：" + (formData.get("concern") || ""),
        "来源：" + (formData.get("source") || source),
      ];
      const message = lines.join("\n");

      localStorage.setItem("angel-consultation-draft", message);
      if (output) {
        output.value = message;
        output.classList.add("show");
      }
      try {
        await navigator.clipboard.writeText(message);
      } catch (error) {
        if (output) output.focus();
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
