function loadGame() {
  tmp.prevSave = localStorage.getItem("testSave");
  load(tmp.prevSave);

  document.getElementById("auto_qu_input").addEventListener("input", (e) => {
    player.qu.auto.input = e.target.value;
  });
  document.onmousemove = (e) => {
    tmp.cx = e.clientX;
    tmp.cy = e.clientY;
  };
  document.addEventListener("keydown", (e) => {
    keyEvent(e);
  });

  setupHTML();
  setupTooltips();
  treeCanvas();

  tmp.start = true;
  checkPostLoad();

  setInterval(loop, 1000 / FPS);
  setInterval(updateStarsScreenHTML, 1000 / FPS);
  setInterval(save, 30000);
  setInterval(drawTreeHTML, 10);
  setInterval(checkNaN, 1000);
  setInterval(updateOneSec, 1000);
}
