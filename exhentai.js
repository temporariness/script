
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
