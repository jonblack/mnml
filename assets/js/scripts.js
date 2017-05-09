hljs.initHighlightingOnLoad();

document.addEventListener("DOMContentLoaded", function() {
  Array.prototype.forEach.call(
    document.getElementsByClassName("math"),
    function(el) {
      try {
        katex.render(el.innerHTML, el, { displayMode: true });
      } catch (e) { console.log(e); }
    }
  );
});
