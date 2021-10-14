// ==UserScript==
// @name         exhentai
// @description  exhentai
// @match        *://exhentai.org/*
// @match        *://*.exhentai.org/*
// @run-at       document-end
// ==/UserScript==

;(function () {
  var s = document.createElement("script");
  s.setAttribute("id", "exReader");
  s.setAttribute(
    "src",
    "https://manakanemu.github.io/ExHentaiReader/Reader.js?" +
      parseInt(Date.parse(new Date()) / 100)
  );
  document.body.appendChild(s);
})();
