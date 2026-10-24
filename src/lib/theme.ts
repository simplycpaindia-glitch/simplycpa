/** Light / dark theme: the reader's choice ("light" | "dark") or "system" (follow the device). */
export type ThemeChoice = "system" | "light" | "dark";
export const THEME_KEY = "simplycpa:theme";

/**
 * Runs in <head> before first paint so the page never flashes the wrong colours.
 * Sets <html data-theme="light|dark"> from the saved choice, else the device setting,
 * and keeps following the device while the choice is "system". Must stay dependency-free.
 */
export const themeInitScript = `(function(){try{var k=${JSON.stringify(THEME_KEY)};var m=window.matchMedia("(prefers-color-scheme: dark)");function apply(){var c=null;try{c=localStorage.getItem(k)}catch(e){}var d=c==="dark"||(c!=="light"&&m.matches);document.documentElement.dataset.theme=d?"dark":"light"}apply();m.addEventListener("change",apply);window.__applyTheme=apply}catch(e){}})();`;
