"use strict";

let disableNitter = document.querySelector("#disable-nitter");
let disableInvidious = document.querySelector("#disable-invidious");
let disableBibliogram = document.querySelector("#disable-bibliogram");
let disableOsm = document.querySelector("#disable-osm");
let disableReddit = document.querySelector("#disable-reddit");
let disableSearchEngine = document.querySelector("#disable-searchEngine");
let disableSimplyTranslate = document.querySelector("#disable-simplyTranslate");
let disableWikiless = document.querySelector("#disable-wikiless");
let version = document.querySelector("#version");

window.browser = window.browser || window.chrome;

browser.storage.sync.get(
  [
    "disableNitter",
    "disableInvidious",
    "disableBibliogram",
    "disableOsm",
    "disableReddit",
    "disableSearchEngine",
    "disableSimplyTranslate",
    "disableWikiless",
    "theme",
  ],
  (result) => {
    if (result.theme) document.body.classList.add(result.theme);
    disableNitter.checked = !result.disableNitter;
    disableInvidious.checked = !result.disableInvidious;
    disableBibliogram.checked = !result.disableBibliogram;
    disableOsm.checked = !result.disableOsm;
    disableReddit.checked = !result.disableReddit;
    disableSearchEngine.checked = !result.disableSearchEngine;
    disableSimplyTranslate.checked = !result.disableSimplyTranslate;
    disableWikiless.checked = !result.disableWikiless;
  }
);

version.textContent = browser.runtime.getManifest().version;

disableNitter.addEventListener("change", (event) => {
  browser.storage.sync.set({ disableNitter: !event.target.checked });
});

disableInvidious.addEventListener("change", (event) => {
  browser.storage.sync.set({ disableInvidious: !event.target.checked });
});

disableBibliogram.addEventListener("change", (event) => {
  browser.storage.sync.set({ disableBibliogram: !event.target.checked });
});

disableOsm.addEventListener("change", (event) => {
  browser.storage.sync.set({ disableOsm: !event.target.checked });
});

disableReddit.addEventListener("change", (event) => {
  browser.storage.sync.set({ disableReddit: !event.target.checked });
});

disableSearchEngine.addEventListener("change", (event) => {
  browser.storage.sync.set({ disableSearchEngine: !event.target.checked });
});

disableSimplyTranslate.addEventListener("change", (event) => {
  browser.storage.sync.set({ disableSimplyTranslate: !event.target.checked });
});

disableWikiless.addEventListener("change", (event) => {
  browser.storage.sync.set({ disableWikiless: !event.target.checked });
});

document.querySelector("#more-options").addEventListener("click", () => {
  browser.runtime.openOptionsPage();
});
