import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";

await mkdir("public/fonts", { recursive: true });
await mkdir("public/images", { recursive: true });
for (const [source, name] of [
  ["Kaushi-c.png", "kaushi"],
  ["Poorna-garland.png", "poorna"],
]) {
  await sharp(source)
    .resize(860)
    .webp({ quality: 86, alphaQuality: 90 })
    .toFile(`public/images/${name}.webp`);
}
for (const [family, name] of [
  ["Cormorant+Garamond:wght@300;400;500;600", "cormorant-garamond"],
  ["Karla:wght@400;500;600", "karla"],
]) {
  const response = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}&display=swap`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
      },
    },
  );
  if (!response.ok) throw new Error(`Font request failed: ${response.status}`);
  const css = await response.text();
  const latin = css.split("/* latin */").at(-1);
  const fontUrl = latin.match(/url\(([^)]+)\)/)?.[1];
  if (!fontUrl) throw new Error(`Font URL not found for ${name}`);
  const font = await fetch(fontUrl);
  if (!font.ok) throw new Error(`Font download failed: ${font.status}`);
  await writeFile(
    `public/fonts/${name}.woff2`,
    Buffer.from(await font.arrayBuffer()),
  );
  const license = await fetch(
    `https://raw.githubusercontent.com/google/fonts/main/ofl/${name.replaceAll("-", "")}/OFL.txt`,
  );
  if (!license.ok)
    throw new Error(`Font license download failed: ${license.status}`);
  await writeFile(`public/fonts/${name}-OFL.txt`, await license.text());
}

await import("./prepare-social-preview.mjs");
console.log("Portraits, local fonts, and dinner sharing preview ready.");
