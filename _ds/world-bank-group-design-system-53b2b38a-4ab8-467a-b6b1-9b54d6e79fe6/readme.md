# World Bank Group Design System (Loop)

Design system for the **World Bank Group** public web presence, reconstructed from **Loop v1.0.2** — the WBG front-end pattern library ("the-loop.css") that powers worldbank.org-style pages: homepage, topic/country pages, news & feature stories, publications, search, and data tables.

The World Bank Group (IBRD, IDA, IFC, MIGA, ICSID) is a development institution whose mission is ending extreme poverty and boosting shared prosperity on a livable planet. Its web surfaces are editorial and institutional: photography of people and places, dense news feeds, reports, data.

## Sources
All provided as uploads (no Figma or repo links were given):
- `uploads/loop.css` / `loop.min.css` (+ maps) — the full Loop stylesheet (5,940 lines). Copied to `reference/loop.css`. **Source of truth** for every value here.
- `uploads/loop.js` (+ map) — Loop behaviours (accordion, button, card equal-height, dropdown, navigation). jQuery/Browserify bundle; not copied.
- `uploads/304244_0_0.*`, `304244_1_0.*` — Andes Bold / Andes Regular webfonts → `fonts/`.
- `uploads/loop_icon.*` — Loop icon font (146 glyphs) → `fonts/`.
- `uploads/Icons.svg` — icon artboard → `assets/icons/Icons.svg`.
- `uploads/White Sticker Sheet v.01.png` — component sticker sheet (text layers did not render; used for layout/colour and cropped photography) → `reference/sticker-sheet.png`.
- `uploads/4.png` — crimson inset-spacing annotation square → `reference/spacing-inset-annotation.png` (a spec redline, not a brand asset).

**No logo was supplied.** Wherever a mark would go, the name "World Bank Group" is set in Andes Bold. Do not draw or approximate the official logo — ask for the file.

## Index
- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `icons.css`, `base.css`
- `fonts/` — Andes, AndesBold, loop_icon
- `assets/images/` — photography cropped from the sticker sheet (faces, farmers, hq, bicycle, classroom, gep-cover)
- `assets/icons/Icons.svg` — icon artboard
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Iconography, Brand)
- `components/` — React primitives (below), each with `.jsx`, `.d.ts`, `.prompt.md` and a directory card
- `ui_kits/worldbank-site/` — click-through website recreation (Home, Topic, Story, Search)
- `reference/` — original CSS + sticker sheet
- `SKILL.md` — agent-skill entry point

## Components
- **core/** — Button, CtaButton, Badge, Hammer, Icon
- **forms/** — TextInput, Checkbox, Radio, Dropdown
- **navigation/** — GlobalNav (with megamenu), Breadcrumb, Tabs, LeftNav, Pagination
- **cards/** — ContentCard, StatCard, ImageOverlayCard, FocusCard
- **banners/** — Banner (landing, landingRight, homepage, topic, campaign)
- **content/** — InlineApiItem, LinkList, Pullquote, Synopsis, Tweetable, Expert
- **data/** — DataTable

Mapping to Loop classes: `lp__btn_*` → Button; `lp__cta_btn_*` → CtaButton; `.badge` → Badge; `lp__hammer` → Hammer; `lp__primary_input/search`, `lp__secondary_*`, `lp__primary_inverse_search` → TextInput; `lp__primary_checkbox/radio` → Checkbox/Radio; `lp__*_dropdown` → Dropdown; `lp__global_navbar` + `lp__megamenu` → GlobalNav; `lp__breadcrumb_list`; `tab-nav`; `lp__left_nav`; `lp___pagination`; `lp__card_wrapper`, `lp__card_stat_*`, `lp__card_img_overlay`, `lp__card_focus`; `lp__banner_*` v1–v5; `lp__inline_api_*`, `lp__link_list`, `lp__pullquote_body`, `lp__synopsis`, `.tweetable`, `lp__experts_*`; `lp__table`.

**Intentional additions:** `Icon` — a thin wrapper around the loop_icon font so consumers never hand-write glyph classes.
**Not built:** Accordion (JS exists in loop.js but no CSS shipped); `lp__multimedia_card` (use ContentCard with an embed); mobile nav toggle / mobile left-nav dropdown (desktop views only).

---

## CONTENT FUNDAMENTALS
- **Voice:** institutional, factual, measured. The organisation speaks as **"we"** ("We provide financing, policy advice, and technical assistance…"); readers are rarely addressed as "you". No hype, no exclamation marks.
- **Evidence-first:** lead with numbers and outcomes — "$117.5 billion committed", "36.2 million people with improved water sources", "Seven in ten 10-year-olds…cannot read". Stats get their own card.
- **Headlines:** News/press titles use **Title Case** ("Global Economy Set to Stabilize for First Time in Three Years"); section headings and card titles use sentence or title case consistently per page.
- **Uppercase is structural, not tonal:** hammers ("PRESS RELEASE | JUNE 11, 2024"), buttons ("DOWNLOAD REPORT"), global nav ("WHAT WE DO") and landing-banner titles are uppercase via CSS. CTA buttons are *capitalized* ("Read More ›").
- **Meta lines** follow type · date · place, pipe-separated: "Feature Story | June 5, 2024".
- **Vocabulary:** development, poverty, shared prosperity, livable planet, IBRD / IDA, fiscal year (FY24), results, projects & operations, knowledge. Country and region names spelled in full ("East Asia and Pacific").
- **No emoji.** Unicode is limited to typographic quotes and "/" breadcrumb separators; arrows come from the icon font.
- **Vibe:** serious, humane, global — photography carries emotion, copy carries facts.

## VISUAL FOUNDATIONS
- **Colour:** one dominant brand blue **#0071bc** (links, primary buttons, nav, icons) with hover **#004c92** and navy **#002245** for active nav and secondary buttons. Sky **#009fda** for hero/solid fields. Charcoal **#333** text on white; **#787878** for meta; **#f6f6f6** for alternate sections. Accents are sparing: orange **#ec553a** (secondary CTA, mobile menu bars), teal **#058a8f** (card top rule), teal **#02a1b6** (synopsis rule), green **#4cbb88**. Semantic triads (fg/border/bg) exist for error, warning, success, info.
- **Type:** **Andes** (geometric humanist display) for all headings, banners, stats, megamenu blurbs; **Open Sans** for body, UI, buttons, labels. Headings are *regular* weight (400) — only h6/card titles are 600 and stats/nav are bold. Generous line-heights (body 18/29, lead 20/32).
- **Shape:** **square everything.** `border-radius: 0` on buttons, inputs, cards, menus, badges. Only radios, portrait avatars (pullquote) and the round arrow link are circular.
- **Borders:** 1px hairlines in #e5e5e5 separate list rows, left-nav items, hammer segments; tables use a 2px #787878 top rule and 1px bottom rule.
- **Shadows:** subtle and flat — cards `0 2px 2px 1px #e5e5e5`; dropdowns `0 6px 12px rgba(0,0,0,.175)`; megamenu `0 4px 4px rgba(0,0,0,.4)`. Inputs use *inner* shadows (inset 2–3px pale blue) to look pressed-in.
- **Cards:** white, square, 1px teal top rule, soft gray shadow, 24px padding (16 on mobile), image flush on top. Inverse cards are solid brand colour with white text and no rule.
- **Backgrounds:** full-bleed documentary photography in banners (300 → 380 → 450–600px tall, object-fit cover), solid colour fields (sky blue, charcoal #333, gray-97). No patterns, textures, illustrations or decorative gradients.
- **Protection:** photo text always sits on a scrim — bottom gradient to 70% black, 70% black caption box (homepage), 80% charcoal CTA chips, or a 15px blur of the photo itself (country/topic banner).
- **Imagery:** candid portraits of people in their environment, warm natural light, rich but not stylised colour; no b&w, no grain.
- **Hover:** colour darkens (blue-45 → blue-30; orange-57 → orange-46; gray-50 → gray-21). Ghost buttons gain a 20% white fill. Nav links gain a 3px navy underline. Tables/links may underline. Image cards reveal text by sliding the overlay up; focus cards fade in an 80% blue layer.
- **Press/focus:** no shrink; focus uses the browser ring (`outline: 2px auto`) or a thicker 2px input border; form control focus glow `0 0 8px rgba(102,175,233,.6)`.
- **Motion:** short and plain — `opacity .15s linear` fades, `.3s ease` banner/overlay reveals, `.35s ease` collapse. No bounces or springs.
- **Transparency/blur:** only in image scrims and the topic banner blur.
- **Layout:** Bootstrap-style 12-col grid, 15px gutters, containers 550/750/970/1170, banners capped at 1440. Breakpoints 576/768/992/1200. Header is static (not sticky); a white 60px bar with a 1px bottom rule.
- **Spacing:** 4 · 8 · 16 · 24 · 32 · 64 (plus 12 in small buttons). Headings carry 16px bottom margin; sections stack at 32px; list items at 16px. Controls are 45px tall.

## ICONOGRAPHY
- Loop ships its own icon font, **`loop_icon`** (IcoMoon-generated, 146 glyphs, `fonts/loop_icon.*`). Use `<i class="loop loop-{name}">` (classes in `tokens/icons.css`) or the `<Icon name>` component.
- Families: **UI** (angle-*, chevron-*, bars, search, close, check, calendar, download, print, share, quote-left/right, play, camera), **social** (facebook, twitter, linkedin, instagram, youtube, whatsapp, weibo, vk, qq, renren…), **sector pictograms** (agriculture, clean-water, climate, education, energy, health, gender, transport, trade… 76 total — used at 50px in stat cards and topic pages), **file types** (file-pdf, file-excel, file-word… beside download links).
- Style: solid monochrome glyphs, coloured **blue-45** by default, white on dark. Small UI arrows are tiny (5–10px) and follow text (CTA chevron, pagination, table sort).
- `assets/icons/Icons.svg` is the source artboard for the same set.
- **No emoji, no PNG icons.** Unicode is not used for icons (the "/" breadcrumb separator is text).

## Font notes
Andes is supplied only as Regular (`304244_1_0`) and Bold (`304244_0_0`); `tokens/fonts.css` maps them to `Andes` 400/700 and keeps the legacy `AndesBold` family. Open Sans loads from Google Fonts, as in the original.
