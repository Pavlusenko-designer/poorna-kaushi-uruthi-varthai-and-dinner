import "./style.css";
import "./opening.css";
import "./venue.css";
import "./responsive.css";
import "./language.css";
import { translations, getInitialLanguage } from "./translations.js";
import {
  invitation as data,
  mapsUrl,
  embedUrl,
  dinnerMapsUrl,
  dinnerEmbedUrl,
} from "./content.js";
import { flower, kolam, banana, toran, lamp, icons } from "./art.js";

document.querySelector("#app").innerHTML = `
  <div class="reading-progress" aria-hidden="true"><span></span></div>
  <div class="language-switcher" role="group" aria-label="Language / மொழி">
    <button type="button" data-language="en" lang="en" aria-pressed="true">English</button>
    <button type="button" data-language="ta" lang="ta" aria-pressed="false">தமிழ்</button>
  </div>
  <main>
    <section class="opening" id="home" aria-labelledby="hero-title">
      <div class="opening-stage">
        <div class="toran">${toran}</div>
        <div class="opening-copy">
          <p class="ceremony-label" data-i18n="promise">A promise, a beginning.</p>
          <h1 id="hero-title" data-i18n="names">${data.bride.name} <span class="ampersand">&</span> ${data.groom.name}</h1>
          <p class="hero-ceremony" data-i18n="ceremony">${data.ceremony}</p>
        </div>
        <div class="opening-narrative" aria-hidden="true">
          <h2 data-i18n="story">Before the forever,<br />there was a little once upon a time.</h2>
          <p data-i18n="storyNote">Two little worlds. So much life ahead.</p>
        </div>
        <div class="opening-art" data-i18n-aria="artwork" aria-label="Watercolor childhood portraits of Poorna on the left and Kaushi on the right">
          <div class="watercolor-arch"><div class="arch-inner"></div><div class="arch-sun"></div></div>
          <div class="opening-kolam">${kolam}</div>
          <div class="banana banana-left">${banana}</div><div class="banana banana-right">${banana}</div>
          <div class="portrait portrait-bride"><img src="/images/poorna.webp" width="860" height="1290" data-i18n-alt="brideAlt" alt="Little Poorna in an ivory and vermilion silk saree with jasmine in her hair" fetchpriority="high" /></div>
          <div class="portrait portrait-groom"><img src="/images/kaushi.webp" width="860" height="1290" data-i18n-alt="groomAlt" alt="Little Kaushi in a traditional ivory veshti and jasmine garland" fetchpriority="high" /></div>
          <div class="ground-wash"></div>
          <div class="garden-flower garden-flower-one">${flower}</div><div class="garden-flower garden-flower-two">${flower}</div>
        </div>
        <div class="opening-bottom"><p class="hero-date"><span>20.11.2026</span><span data-i18n="heroTime">Friday · 7–9 AM IST</span></p></div>
      </div>
    </section>

    <section class="invitation-section" id="invitation" aria-labelledby="invitation-title">
      <div class="invitation-flower flower-left">${flower}</div><div class="invitation-flower flower-right">${flower}</div>
      <div class="invitation-paper">
        <div class="invitation-top">${lamp}<p data-i18n="familyBlessings">With love, and the blessings of our families</p>${lamp}</div>
        <h2 id="invitation-title" data-i18n="ceremony">${data.ceremony}</h2>
        <p class="invite-sentence" data-i18n="invite">${data.invitationText}</p>
        <div class="formal-names"><p data-i18n="bride">${data.bride.fullName.split(" ")[0]}<br />${data.bride.fullName.split(" ").slice(1).join(" ")}</p><span>&</span><p data-i18n="groom">${data.groom.fullName.split(" ").slice(0, -1).join(" ")}<br />${data.groom.fullName.split(" ").at(-1)}</p></div>
        <div class="date-panel"><div class="date-heading"><span data-i18n="friday">Friday</span><span data-i18n="month">November 2026</span></div><div class="big-date" data-i18n="day">20<span>th</span></div><p class="ceremony-time" data-i18n="time">7:00–9:00 <span>AM IST</span></p></div>

      </div>
    </section>

    <section class="venue-section" id="venue" aria-labelledby="venue-title">
      <div class="venue-copy">
        <span class="venue-sprig">${flower}</span>
        <h2 id="venue-title" data-i18n="venue">${data.venue}</h2>
        <address data-i18n="address">Avinashi Road, opposite KMCH Hospital,<br />Coimbatore.</address>
        <details class="venue-map" id="venue-map">
          <summary class="button button-outline">${icons.pin}<span>Open map</span></summary>
          <div class="map-frame"><iframe data-i18n-title="mapTitle" title="Map showing Annapoorna on Avinashi Road, opposite KMCH Hospital, Coimbatore" data-src="${embedUrl}" width="600" height="300" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe><a class="map-directions" href="${mapsUrl}" target="_blank" rel="noopener noreferrer"><span data-i18n="directions">Get directions in Google Maps</span>${icons.arrow}</a></div>
        </details>
        <p class="venue-closing" data-i18n="breakfast">${data.closingText}</p>
        <div class="dinner-invitation" id="dinner" aria-labelledby="dinner-title">
          <span class="dinner-flower" aria-hidden="true">${flower}</span>
          <h3 id="dinner-title" data-i18n="dinnerTitle">Followed by dinner</h3>
          <address data-i18n="dinnerAddress">550 Kottur Road,<br />S L Patti, Pollachi.</address>
          <details class="venue-map" id="dinner-map">
            <summary class="button button-outline">${icons.pin}<span>Open map</span></summary>
            <div class="map-frame"><iframe data-i18n-title="dinnerMapTitle" title="Map for dinner at 550 Kottur Road, S L Patti, Pollachi" data-src="${dinnerEmbedUrl}" width="600" height="300" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe><a class="map-directions" href="${dinnerMapsUrl}" target="_blank" rel="noopener noreferrer"><span data-i18n="directions">Get directions in Google Maps</span>${icons.arrow}</a></div>
          </details>
        </div>
        <p class="closing-names" data-i18n="closing">With love from our both families</p>
      </div>
    </section>
  </main>
  <nav class="mobile-dock" data-i18n-aria="quickLinks" aria-label="Event quick links"><a href="#invitation">${icons.calendar}<span><strong data-i18n="dockDate">20 November</strong><small data-i18n="dockTime">7–9 AM IST</small></span></a><a href="#venue">${icons.pin}<span data-i18n="dockVenue">${data.venue.replace(" Arunya Hall", "<br />Arunya Hall")}</span></a></nav>
`;

const jsonLd = document.createElement("script");
jsonLd.type = "application/ld+json";
jsonLd.textContent = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Uruthi Varthai · Poorna & Kaushi",
  startDate: data.startsAt,
  endDate: data.endsAt,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  description: `${data.invitationText} ${data.closingText}`,
  location: {
    "@type": "Place",
    name: data.venue,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avinashi Road, opposite KMCH Hospital",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  },
});
document.head.append(jsonLd);

const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
const opening = document.querySelector(".opening");
const stage = document.querySelector(".opening-stage");
const openingCopy = document.querySelector(".opening-copy");
const narrative = document.querySelector(".opening-narrative");
const bride = document.querySelector(".portrait-bride");
const groom = document.querySelector(".portrait-groom");
const openingKolam = document.querySelector(".opening-kolam");
const progressBar = document.querySelector(".reading-progress span");
let scheduled = false;
let storyTop = 0;
let storyDistance = 1;
let pageDistance = 1;
const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

function measure() {
  // Reserve space for wrapped text and its entrance movement in either language.
  stage.style.setProperty(
    "--story-safe-top",
    `${narrative.offsetTop + narrative.offsetHeight + 32}px`,
  );
  storyTop = opening.offsetTop;
  storyDistance = Math.max(1, opening.offsetHeight - stage.offsetHeight);
  pageDistance = Math.max(
    1,
    document.documentElement.scrollHeight - innerHeight,
  );
  updateScroll();
}
function updateScroll() {
  scheduled = false;
  progressBar.style.transform = `scaleX(${clamp(scrollY / pageDistance)})`;
  if (reducedMotion.matches) {
    openingCopy.style.opacity = "1";
    openingCopy.style.transform = "none";
    narrative.setAttribute("aria-hidden", "false");
    bride.style.opacity = "1";
    groom.style.opacity = "1";
    bride.style.transform = "none";
    groom.style.transform = "none";
    return;
  }
  const p = clamp((scrollY - storyTop) / storyDistance);
  const entrance = clamp((p - 0.035) / 0.41);
  const easedEntrance = 1 - (1 - entrance) ** 3;
  const distance = Math.min(innerWidth * 0.6, 620) * (1 - easedEntrance);
  bride.style.opacity = clamp(entrance * 3);
  groom.style.opacity = clamp(entrance * 3);
  bride.style.transform = `translate3d(${-distance}px, ${(1 - easedEntrance) * 42}px, 0) rotate(${-7 * (1 - easedEntrance)}deg)`;
  groom.style.transform = `translate3d(${distance}px, ${(1 - easedEntrance) * 42}px, 0) rotate(${7 * (1 - easedEntrance)}deg)`;
  const textOut = clamp((p - 0.22) / 0.18);
  const textIn = clamp((p - 0.38) / 0.18);
  openingCopy.style.opacity = 1 - textOut;
  openingCopy.style.transform = `translate3d(0,${-textOut * 18}px,0)`;
  narrative.style.opacity = textIn;
  narrative.style.transform = `translate3d(0,${(1 - textIn) * 18}px,0)`;
  narrative.setAttribute("aria-hidden", String(textIn < 0.5));
  openingKolam.style.transform = `translate(-50%, -50%) rotate(${p * 30}deg)`;
}
addEventListener(
  "scroll",
  () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateScroll);
    }
  },
  { passive: true },
);
addEventListener("resize", measure, { passive: true });
addEventListener("load", measure, { once: true });
document.fonts.ready.then(measure);
// Font scaling and mobile browser chrome can change layout without a window resize.
const openingResizeObserver = new ResizeObserver(measure);
openingResizeObserver.observe(narrative);
openingResizeObserver.observe(stage);
reducedMotion.addEventListener("change", () => {
  measure();
});
measure();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
document
  .querySelectorAll(".invitation-paper, .venue-copy")
  .forEach((element) => revealObserver.observe(element));

// Request the map only after the guest chooses to open it.
const venueMaps = [...document.querySelectorAll(".venue-map")];
let language = getInitialLanguage();
venueMaps.forEach((venueMap) =>
  venueMap.addEventListener("toggle", () => {
    venueMap.querySelector("summary span").textContent = venueMap.open
      ? translations[language].closeMap
      : translations[language].openMap;
    const frame = venueMap.querySelector("iframe");
    if (venueMap.open && frame.getAttribute("src") !== frame.dataset.src)
      frame.src = frame.dataset.src;
    measure();
  }),
);

function applyLanguage(next, persist = false) {
  if (!Object.hasOwn(translations, next)) return;
  language = next;
  const text = translations[language];
  document.documentElement.lang = language;
  // The strings are project-owned translation copy, including intentional line breaks.
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.innerHTML = text[element.dataset.i18n];
  });
  for (const [attribute, key] of [
    ["alt", "i18nAlt"],
    ["aria-label", "i18nAria"],
    ["title", "i18nTitle"],
  ]) {
    const selector = `data-${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`;
    document
      .querySelectorAll(`[${selector}]`)
      .forEach((element) =>
        element.setAttribute(attribute, text[element.dataset[key]]),
      );
  }
  document.querySelector(".skip-link").textContent = text.skip;
  document.title = text.title;
  document.querySelector('meta[name="description"]').content = text.description;
  document.querySelector('meta[property="og:title"]').content = text.title;
  document.querySelector('meta[property="og:description"]').content =
    text.description;

  document
    .querySelectorAll("[data-language]")
    .forEach((button) =>
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.language === language),
      ),
    );
  venueMaps.forEach((venueMap) => {
    venueMap.querySelector("summary span").textContent = venueMap.open
      ? text.closeMap
      : text.openMap;
    const frame = venueMap.querySelector("iframe");
    const map = new URL(frame.dataset.src);
    map.searchParams.set("hl", language);
    frame.dataset.src = map.href;
    if (venueMap.open) frame.src = map.href;
  });
  const event = JSON.parse(jsonLd.textContent);
  event.name = text.eventTitle;
  event.description = `${text.invite} ${text.breakfast} ${text.dinnerTitle}: ${data.dinner.address}.`;
  jsonLd.textContent = JSON.stringify(event);
  if (persist) {
    try {
      localStorage.setItem("invitation-language", language);
    } catch {
      /* Language switching still works without storage. */
    }
    const url = new URL(location.href);
    if (language === "ta") url.searchParams.set("lang", "ta");
    else url.searchParams.delete("lang");
    history.replaceState(null, "", url);
  }
  requestAnimationFrame(() => {
    measure();
    document.fonts.ready.then(measure);
  });
}
document
  .querySelectorAll("[data-language]")
  .forEach((button) =>
    button.addEventListener("click", () =>
      applyLanguage(button.dataset.language, true),
    ),
  );
applyLanguage(language);
