import sharp from "sharp";
import { kolam } from "../src/art.js";

// The dinner link has its own cool, dark sharing card; the website stays light.
const ornament = kolam.replace(
  "<svg ",
  '<svg x="680" y="75" width="480" height="480" ',
);
const background = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="night" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#14243e"/><stop offset="1" stop-color="#183f4a"/>
    </linearGradient>
    <radialGradient id="peacock"><stop stop-color="#326e7b" stop-opacity=".7"/><stop offset="1" stop-color="#193b4d" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#night)"/>
  <ellipse cx="912" cy="335" rx="295" ry="300" fill="url(#peacock)"/>
  <rect x="22" y="22" width="1156" height="586" fill="none" stroke="#b9a275" stroke-opacity=".8"/>
  <rect x="30" y="30" width="1140" height="570" fill="none" stroke="#84acb3" stroke-opacity=".23"/>
  <g color="#8abcc6" opacity=".28">${ornament}</g>
  <g font-family="Georgia,serif" fill="#edf1e9">
    <text x="76" y="97" font-size="23" fill="#9cc1ca">You’re invited to celebrate</text>
    <text x="72" y="168" font-size="60">Poorna &amp; Kaushi</text>
    <text x="76" y="241" font-size="46">Uruthi Varthai</text>
    <text x="76" y="294" font-size="39" fill="#c7b487">&amp; Dinner</text>
    <path d="M78 326H560" stroke="#b9a275" stroke-opacity=".55"/>
    <text x="76" y="383" font-size="34">20 November 2026</text>
    <text x="76" y="428" font-size="25" fill="#b8d0d3">Friday · 7–9 AM IST</text>
    <text x="76" y="489" font-size="22">Uruthi Varthai in Coimbatore</text>
    <text x="76" y="530" font-size="22">Followed by dinner in Pollachi</text>
    <text x="76" y="566" font-size="20" fill="#a3c4cb">550 Kottur Road, S L Patti</text>
  </g>
</svg>`);
const bride = await sharp("public/images/poorna.webp")
  .resize({ height: 430 })
  .png()
  .toBuffer();
const groom = await sharp("public/images/kaushi.webp")
  .resize({ height: 480 })
  .png()
  .toBuffer();
await sharp(background)
  .composite([
    { input: bride, left: 630, top: 155 },
    { input: groom, left: 839, top: 105 },
  ])
  .png()
  .toFile("public/images/invitation-dinner-social.png");
console.log("Dark indigo and peacock-teal dinner sharing preview generated.");
