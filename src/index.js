import foo from './foo';
import { a } from './bar';
import imgSrc from "./masque-of-red-death.jpg";
import "./index.css";

console.log(imgSrc)
// embeds the image into your base64 url - adds the image to your js bundle size!
// with a limit, if it's above the limit then this is instead a filename
const img = document.createElement("img");
img.src = imgSrc;
document.body.appendChild(img)
