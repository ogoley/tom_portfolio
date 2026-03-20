export function ThemeScript() {
  const script = `
    (function() {
      var storageKey = "tom-theme";
      var root = document.documentElement;
      var stored = localStorage.getItem(storageKey);
      var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var theme = stored || (systemDark ? "dark" : "light");
      root.classList.toggle("dark", theme === "dark");
      root.style.colorScheme = theme;
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
