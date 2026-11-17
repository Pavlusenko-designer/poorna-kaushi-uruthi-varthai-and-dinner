// Small, reusable botanical drawings keep the decorative artwork crisp and light.
export const flower = `<svg viewBox="0 0 80 80" fill="none" aria-hidden="true"><g fill="currentColor" opacity=".85"><ellipse cx="40" cy="24" rx="9" ry="17"/><ellipse cx="40" cy="56" rx="9" ry="17"/><ellipse cx="24" cy="40" rx="17" ry="9"/><ellipse cx="56" cy="40" rx="17" ry="9"/><ellipse cx="28" cy="28" rx="8" ry="15" transform="rotate(-45 28 28)"/><ellipse cx="52" cy="52" rx="8" ry="15" transform="rotate(-45 52 52)"/><ellipse cx="52" cy="28" rx="8" ry="15" transform="rotate(45 52 28)"/><ellipse cx="28" cy="52" rx="8" ry="15" transform="rotate(45 28 52)"/></g><circle cx="40" cy="40" r="7" fill="#b48636"/></svg>`;

export const kolam = `<svg viewBox="0 0 240 240" fill="none" aria-hidden="true"><g stroke="currentColor" stroke-width="1.2"><path d="M120 12C159 48 192 81 228 120C192 159 159 192 120 228C81 192 48 159 12 120C48 81 81 48 120 12Z"/><path d="M120 34C160 34 206 80 206 120S160 206 120 206S34 160 34 120S80 34 120 34Z"/><rect x="56" y="56" width="128" height="128" rx="38"/><rect x="56" y="56" width="128" height="128" rx="38" transform="rotate(45 120 120)"/><path d="M120 38C190 92 190 148 120 202C50 148 50 92 120 38ZM38 120C92 50 148 50 202 120C148 190 92 190 38 120Z"/><circle cx="120" cy="120" r="30"/><circle cx="120" cy="120" r="8"/></g><g fill="currentColor"><circle cx="120" cy="12" r="3"/><circle cx="228" cy="120" r="3"/><circle cx="120" cy="228" r="3"/><circle cx="12" cy="120" r="3"/><circle cx="76" cy="76" r="2"/><circle cx="164" cy="76" r="2"/><circle cx="76" cy="164" r="2"/><circle cx="164" cy="164" r="2"/></g></svg>`;

export const banana = `<svg viewBox="0 0 270 550" fill="none" aria-hidden="true"><defs><linearGradient id="leaf" x1="30" y1="0" x2="200" y2="380" gradientUnits="userSpaceOnUse"><stop stop-color="#b0bd7e"/><stop offset=".5" stop-color="#7d9561"/><stop offset="1" stop-color="#4f7757"/></linearGradient></defs><g opacity=".8"><path d="M132 547Q154 300 112 82" stroke="#9c9f65" stroke-width="5"/><path d="M120 231Q-8 167 41 9Q158 61 120 231Z" fill="url(#leaf)"/><path d="M131 319Q118 137 259 99Q288 259 131 319Z" fill="url(#leaf)"/><path d="M135 422Q4 378 10 216Q144 235 135 422Z" fill="url(#leaf)"/><path d="M137 462Q140 292 256 278Q276 412 137 462Z" fill="url(#leaf)"/><g stroke="#e3e1ad" stroke-width="1.4" opacity=".6"><path d="M120 231L41 9M131 319L259 99M135 422L10 216M137 462L256 278"/><path d="M109 202L57 178M96 167L39 140M85 137L30 110M69 96L29 79M59 61L32 45M143 299L191 288M161 268L222 260M182 231L242 228M202 198L253 191M222 164L262 157M124 399L59 369M103 364L33 329M81 325L20 295M64 297L13 264M153 441L205 426M173 409L231 395M197 374L249 362M219 340L255 331"/></g></g></svg>`;

export const toran = `<svg viewBox="0 0 1200 130" preserveAspectRatio="xMidYMin slice" aria-hidden="true"><defs><linearGradient id="mango" x2="1" y2="1"><stop stop-color="#94a572"/><stop offset="1" stop-color="#536e43"/></linearGradient><g id="mango-leaf"><path d="M0 0C-24 25-17 58 0 83C18 53 22 23 0 0Z" fill="url(#mango)"/><path d="M0 6V72" stroke="#d8d7a0" stroke-width="1" opacity=".7"/></g><g id="jasmine"><path d="M0 0V39" stroke="#b39c63"/><g fill="#f3e6c5" stroke="#dbca9c" stroke-width=".5"><ellipse cy="12" rx="10" ry="7"/><ellipse cy="22" rx="12" ry="7"/><ellipse cy="32" rx="10" ry="7"/></g><circle cy="41" r="9" fill="#d8a344"/><circle cy="51" r="8" fill="#d8a344"/><circle cy="61" r="6" fill="#bb7334"/></g></defs><path d="M-20 3Q600 70 1220 3" fill="none" stroke="#b69c60" stroke-width="2"/>${Array.from(
  { length: 25 },
  (_, i) => {
    const x = i * 50;
    const y = 3 + 27 * (1 - ((x - 600) / 600) ** 2);
    return `<use href="#${i % 2 ? "jasmine" : "mango-leaf"}" x="${x}" y="${y}" transform="rotate(${i % 2 ? 0 : i % 4 ? -12 : 12} ${x} ${y})"/>`;
  },
).join("")}</svg>`;

export const lamp = `<svg viewBox="0 0 100 160" fill="none" aria-hidden="true"><path d="M50 9C24 35 36 48 50 47C65 47 72 31 50 9Z" fill="#d7ac55"/><path d="M50 23C42 35 43 41 50 41C58 41 59 34 50 23Z" fill="#f7e9b4"/><path d="M19 53Q50 85 81 53Z" fill="#b58f45"/><path d="M50 66V134M44 77H56M44 124H56" stroke="#b58f45" stroke-width="5"/><path d="M50 128L28 148H72L50 128Z" fill="#b58f45"/><path d="M21 150H79" stroke="#b58f45" stroke-width="4"/></svg>`;

export const icons = {
  arrow:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17L17 7M7 7h10v10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  calendar:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="5" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 3v4m8-4v4M4 11h16m-11 5h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1114 0Z" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.5"/></svg>',
  share:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 15V3m-4 4 4-4 4 4M6 11H4v10h16V11h-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};
