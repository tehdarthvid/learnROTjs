//import { Display } from "../node_modules/rot-js/dist/rot.js";
import { Display } from "../node_modules/rot-js/lib/index.js";

var o = {
  width: 80,
  height: 25,
  fontSize: 18
  //forceSquareRatio: true
};
var d = new Display(o);
document.body.appendChild(d.getContainer());

for (var i = 0; i < o.width; i++) {
  for (var j = 0; j < o.height; j++) {
    if (!i || !j || i + 1 == o.width || j + 1 == o.height) {
      d.draw(i, j, "#", "gray");
    } else {
      d.draw(i, j, ".", "#666");
    }
  }
}
d.draw(o.width >> 1, o.height >> 1, "@", "goldenrod");
