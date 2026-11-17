import { mkdir, writeFile } from "node:fs/promises";

await mkdir("public/fonts", { recursive: true });
for (const [family, name] of [
  ["Noto+Serif+Tamil:wght@400;500", "noto-serif-tamil"],
  ["Noto+Sans+Tamil:wght@400;500", "noto-sans-tamil"],
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
  if (!response.ok)
    throw new Error(`Font CSS request failed: ${response.status}`);
  const css = await response.text();
  const tamilBlock = css.split("/* tamil */").at(-1).split("/*")[0];
  const url = tamilBlock.match(/url\(([^)]+)\)/)?.[1];
  if (!url || !url.endsWith(".woff2"))
    throw new Error(`Tamil font not found: ${name}`);
  const font = await fetch(url);
  if (!font.ok) throw new Error(`Font request failed: ${font.status}`);
  await writeFile(
    `public/fonts/${name}.woff2`,
    Buffer.from(await font.arrayBuffer()),
  );
  const license = await fetch(
    `https://raw.githubusercontent.com/google/fonts/main/ofl/${name.replaceAll("-", "")}/OFL.txt`,
  );
  if (!license.ok)
    throw new Error(`Font license request failed: ${license.status}`);
  await writeFile(`public/fonts/${name}-OFL.txt`, await license.text());
}
console.log("Tamil typefaces and licenses saved locally.");
