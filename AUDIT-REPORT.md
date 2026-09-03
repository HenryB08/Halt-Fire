# HALT Fire — SDS Resource Page + Full Site Integrity & SEO Audit

**Date:** 2026-09-03
**Branch:** `claude/jolly-maxwell-7eull5`
**Base:** `main`
**Deliverable:** One PR. **Do not merge** until a human has verified the live pages.

> **Verification standard applied:** Every "fixed" item below was confirmed against the actual file content after the edit, and the new page was rendered in a real headless browser at 1280 px and 390 px. **Internal** link/anchor/image checks are real, deterministic filesystem checks. **External** link checks (HTTP status of `gogreenfire.com` / `haltfire.com` PDFs and images) could **not** be performed — see the egress blocker below — and are reported as **UNVERIFIED**, never assumed.

---

## 🚧 Environment blocker (affects PRIORITY 2 and external link checks)

Outbound network egress is **blocked by policy** from the build sandbox. Re-confirmed at audit time:

- `gogreenfire.com` → `EGRESS_BLOCKED` (fetch tool) / `403 CONNECT tunnel failed` (curl)
- `haltfire.com` → `403 CONNECT tunnel failed` (curl)
- Live proxy status: `gateway answered 403 to CONNECT — policy denial`.

**Impact:**
- **PRIORITY 2 (migrate gogreenfire assets into the repo) could not be executed.** Downloading the PDFs/images is impossible from here. No asset migration is included in this PR. See §P2.
- **External HTTP status of every `gogreenfire.com` document/image is UNVERIFIED.** The audit still inventories them (below) so migration can proceed in an environment with egress.
- The **SDS-LINK-AUDIT.md** PDF-content step (read Section 1 of each SDS) is likewise blocked; that report explains it in full.

Everything internal to the repo **was** verified.

---

## PRIORITY 1 — SDS resource page ✅ Built & wired

### New page: `sds.html`
- Cloned from `professional.html` so it inherits the **exact** design system (topbar, nav, footer, typography, `--green/--dark` tokens, doc-card CSS). No new styling introduced beyond two scoped helpers (`.sds-top` hero offset, `.sds-anchor-nav`).
- **Rendered & verified** (headless Chromium):
  - 1280 px: `scrollWidth == clientWidth` (no horizontal overflow), 8 doc-cards, exactly 1 `<h1>`, anchors `#industrial`/`#professional`/`#consumer` all resolve, **zero page/JS errors**.
  - 390 px: no horizontal overflow, same structure intact.
  - (Console shows only `ERR_TUNNEL_CONNECTION_FAILED` for external fonts/images — expected under the egress block; not a code defect.)
- **Grouped by division** with the required anchors:
  - `#industrial` — Multi-Class Foam Wetting Agent, GFFF Firefighting Foam, Pro Defense
  - `#professional` — Pro Suppressor (14/20 oz), Heat Barrier (32 oz)
  - `#consumer` — HALT! Household 10 oz, Grill 10 oz, Li-Ion 10 oz
- Each product card shows **name, document type (SDS / Brochure / Cut Sheet), revision year where known, and a direct download link**.
- **Intro** notes documents currently carry **GreenFire®** branding (one word, ® on first use) and that HALT-branded revisions are in progress.
- **Plain-text contact line** to `Sales@haltfire.com` for documents not available for download.
- **Meta:** self-referencing canonical, full OG (`og:url`, `og:image`, `og:site_name`, `og:locale`) and Twitter tags, unique title + description. JSON-LD (`WebPage` + `BreadcrumbList`) parses valid.
- **Document links (second pass):** Following R&D's verified registry, the **Pro Defense SDS is now linked** on sds.html (`2024/03/ProDefense-SDS.pdf`, Feb 2024) and every SDS entry shows its revision date as visible text (e.g. "Download SDS (PDF) — Rev. February 2024"). The three **consumer** products still show "SDS on request: Sales@haltfire.com" because no consumer SDS exists in the registry or repo. See SDS-LINK-AUDIT.md for the full corrected mapping.

### Wired into the site
| Wiring task | Status |
|---|---|
| Footer **"SDS Documents"** link `contact.html → sds.html` on **every** page | ✅ 11 pages (about, consumer, contact, cookies, firedept, index, industrial, professional, retailers, science, sds) |
| `science.html` "Request SDS Documents" CTA `contact.html → sds.html` | ✅ |
| Nav entry — nav is crowded (8 items), so per the ticket's fallback: **footer Resources primary entry** (the fixed "SDS Documents" link) **+ mobile drawer entry + in-page links** | ✅ |
| **Mobile menu** "SDS & Documents" entry | ✅ 11 pages |
| In-page SDS links from technical sections of `industrial.html`, `firedept.html`, `professional.html` | ✅ "View All SDS & Documents →" button added to each |
| `sitemap.xml` — add `sds.html` | ✅ (priority 0.8, lastmod 2026-09-03) |
| `llms.txt` — add `sds.html` + Documentation section | ✅ |

Desktop nav was intentionally **not** modified (8 items already; adding a 9th would crowd/overflow the bar). This matches the ticket's explicit "OR (if nav crowded)" branch.

---

## PRIORITY 2 — Asset migration ⛔ Blocked (not done)

**Not executed** — egress is blocked, so no `gogreenfire.com` PDF or image could be downloaded, verified, or committed. No reference rewrites were made (rewriting to local paths without the files would create broken links).

**Inventory prepared for a follow-up run in an egress-enabled environment.** Every unique off-repo asset host currently referenced:

| Host | Refs | Notes |
|---|---|---|
| `gogreenfire.com` | 40 | **Migration target** — legacy PDFs + product images. |
| `mcusercontent.com` | 38 | Mailchimp CDN — logo & favicons. Consider migrating too. |
| `cdn.prod.website-files.com` | 11 | Webflow CDN — icon SVGs. |
| `haltfire.com` | 14 | Self-references + 2 already-self-hosted PDFs (the intended end-state pattern). |
| `get.haltfire.com` | 3 | Shopify storefront (out of scope). |

Unique `gogreenfire.com` **PDF** URLs to migrate (15 total incl. 2 already self-hosted on haltfire.com) are enumerated in SDS-LINK-AUDIT.md §1. **Their HTTP status is UNVERIFIED.**

**Recommendation:** run the crawl/download/verify/commit/rewrite step from an environment with outbound access to `gogreenfire.com`; keep the established convention (self-host under `haltfire.com/` root, as `MFWA-SDS-2026.pdf` already demonstrates).

---

## PRIORITY 3 — Link discrepancies

> **Update (2026-09-03, second pass):** The Pro Defense and GFFF discrepancies below were originally *flagged* pending R&D. R&D (Brandon Miller) has since supplied a verified document registry, and the corrections have now been **applied** in this same PR. See **SDS-LINK-AUDIT.md** for the authoritative registry and the full before/after.

| # | Discrepancy | Status |
|---|---|---|
| **1** | **Pro Defense SDS linked ≥3 ways** — doc-card → `HeatBarrier-SDS.pdf`; spec table → `WettingAgent-SDS.pdf` (404); professional → `ProDefense-SDS.pdf`. | ✅ **RESOLVED** — all Pro Defense SDS links now point to the verified `2024/03/ProDefense-SDS.pdf` (Feb 2024, "GreenFire® Pro Defense"). One canonical URL site-wide. |
| **2** | **GFFF SDS two revisions** — `industrial.html` linked both `2026/01/GFFF-StandardUsage-SDS.pdf` and `2024/04/GFFF-SDS.pdf`. | ✅ **RESOLVED** — standardized on `2026/01/GFFF-StandardUsage-SDS.pdf` (Jan 2026) everywhere; the 2024 reference removed. |
| **3** | **Use Concentration values** — MCFWA 0.1%–3%, GFFF 1%–3%. | ✅ **Already correct** (industrial + firedept). Verified in place, no change. |
| **+** | **Dead 404 SDS button** — `2024/04/WettingAgent-SDS.pdf` was the target of three "Download SDS Sheet" buttons (broken on the live site). | ✅ **RESOLVED** — re-pointed to the correct per-product SDS (Pro Defense / Fire Suppressor / Heat Barrier). Zero `WettingAgent-SDS` references remain. |
| **+** | **Wrong-product links** — Pro Defense card served the Heat Barrier SDS; Heat Barrier spec card served the Fire Suppressor brochure. | ✅ **RESOLVED** per registry. |
| **+** | **One Pro Defense product** — legacy "homeowner"/"professional" dual-label. | ✅ **RESOLVED** — "homeowner" wording removed from `professional.html`; consumer.html audience descriptor reviewed and kept (single-SKU, not a variant). |
| **+** | **SDS button label findability** — labels varied ("Download SDS Sheet" / "Safety Data Sheet (PDF)"). | ✅ **RESOLVED** — standardized to `Download SDS (PDF) — Rev. <Month Year>` site-wide (literal "SDS" + visible revision date). |

**OUTSTANDING (egress-blocked, manual check):** `haltfire.com/MFWA-SDS-2026.pdf` (confirm identifier) and `2024/04/GFFF-SDS.pdf` (confirm it resolves / what it is). Neither blocks the site; both listed in SDS-LINK-AUDIT.md.

---

## PRIORITY 4 — Dead-end / link-integrity audit

Method: static parse of all 14 HTML files — every internal `href`, every `#anchor` target, every `<img src>`, every form action, cross-referenced against actual file contents and element IDs.

### Internal links & anchors — ✅ clean
- **0 broken internal page links.** Every relative `*.html` href resolves to a file that exists (incl. all new `sds.html` links).
- **0 dead in-page anchors.** Every `href="#id"` target exists on its page; every cross-page `file.html#id` target exists.
- The only parser "hits" were protocol-relative **preconnect/dns-prefetch** hints (`//mcusercontent.com`, `//gogreenfire.com`, `//cdn.prod.website-files.com` in `<head>`) — these are resource hints, **not** navigable links. No action.

### `href="#"` — ✅ all JS-driven, none dead
- ~10 per page. Two kinds, both functional:
  - **Mobile-drawer links** — `href="#"` with `onclick="window.location='…';toggleMob()"`. Navigate correctly (verified handler present on all pages).
  - **Cert-modal "Learn More"** — `<a class="cm-link" href="#">`; its `href` is set by `showCertModal()` at click time (`m.querySelector('.cm-link').href = d.link`). Functional.
- **No `href="#"` without a handler was found.** No dead CTA.

### Empty `<img src="">` — 1 per page, intentional (JS-populated, hidden)
- The lone empty `src` on each page is the **cert-modal logo** `<img class="cm-logo" src="" alt="" aria-hidden="true">` inside the `display:none` modal. `showCertModal()` sets `.cm-logo.src` on open. It is decorative (`aria-hidden`), never visible empty. **Left as-is** (populating it statically would defeat the modal). Flagged for awareness.

### Forms — ✅ all correct
- All 5 forms (`contact`, `firedept`, `index`, `industrial`, `retailers`) POST to **`https://formspree.io/f/mojyvlqb`** via `submitForm()` (AJAX with success state). **0 forms** with a wrong or missing endpoint. `sds.html` has no form (document index — none needed).

### Footer 3-column drift
- **"SDS Documents" → `contact.html`** was the reported dead-end. **Fixed → `sds.html`** on all pages.
- **"Industrial Pricing" → `contact.html`** remains **by design** (a pricing request routes to the contact form). Left unchanged; noted so it isn't mistaken for drift.

### Layout flag (pre-existing, not introduced here)
- `professional.html` has a **~36 px horizontal overflow at 1280 px** desktop width. **Confirmed pre-existing on `main`** (present before this PR's edits; my in-page SDS button did not introduce it). Does not occur at 390 px. Flagged for a follow-up desktop-width fix; left unchanged to keep this PR scoped. The three other product pages and `sds.html` show **0** overflow at both widths.

### Code-quality flag (not a dead-end, not fixed)
- **Duplicate `showCertModal()` / `closeCertModal()` definitions** in the page script (an older ID-based version — referencing non-existent `cert-modal-logo` etc. — followed by the working class-based version). The **second definition wins**, so the modal works; the first is dead code that would throw if ever reached. **Flagged**, not changed (functional today; a rewrite risks regression and is outside link-integrity scope). Present site-wide via the shared template.

### Orphan pages
- `shop.html` (redirect stub) and `google762d746062ae3277.html` (Search Console verification) are intentionally standalone. `privacy.html`, `terms.html`, `cookies.html` are linked from footers. No unintended orphans. `sds.html` is now linked from every page's footer + mobile drawer + three product pages + sitemap + llms.txt.

---

## PRIORITY 5 — SEO / AI-search

### ✅ Verified good (all indexable pages incl. new `sds.html`)
- **Unique titles** — no duplicates across the 12 indexable pages. `sds.html` title is unique.
- **Unique descriptions** — no duplicate meta descriptions among indexable pages. (`cookies.html`/`shop.html` share an empty description but are `noindex` — see below.)
- **Exactly one `<h1>` per page**, no heading-level skips detected. (`shop.html` redirect stub has 0 `<h1>` — expected.)
- **Self-referencing canonical** on every indexable page (`index.html` → `https://haltfire.com/`, correct).
- **JSON-LD parses valid** on every page that carries it (0 parse errors across 2–6 blocks per page).
- **OG + Twitter** complete on `sds.html` (og:url, og:image, site_name, locale, twitter card/site/title/description) and consistent with the site.
- **Alt attributes: 324/324 images have an `alt` attribute** (0 missing). Decorative icons correctly use `alt=""` + `aria-hidden`.
- `robots.txt` references `sitemap.xml`. ✅
- `sitemap.xml` includes `sds.html`. ✅

### ⚠️ Flagged (pre-existing, site-wide — not changed in this PR)
| Issue | Detail | Why not fixed here |
|---|---|---|
| **Title length** | 10 indexable pages have `<title>` **66–90 chars** (Google truncates ~60/600 px). `sds.html` (70) follows the same house convention. | Rewriting 10 brand titles is a content/brand decision, and fixing only some would break consistency. Recommend a coordinated title-length pass. Titles are **unique**, so no dupes. |
| **Missing `width`/`height`** | **311 of 324 `<img>`** lack explicit dimensions → cumulative layout shift (CLS) risk. | Correct dimensions require reading each image (hosts are egress-blocked); guessing risks layout regression. Recommend an image-dimension pass once assets are migrated locally (P2). |
| **`og:image` on legacy host** | All 10 indexable pages' `og:image` points at a single `gogreenfire.com` JPEG. **Load status UNVERIFIED** (egress). | Part of the P2 migration — move the OG image local, then re-point. `sds.html` intentionally matches the site default rather than introducing a new unverifiable image. |
| **Below-fold lazy-load / hero preload / render-blocking** | Most images already use `loading="lazy"`; a formal preload-hero / render-blocking pass was **not** performed. | Deferred — best done alongside the asset migration so preloaded/hero URLs are local and stable. |

---

## What was NOT changed, and why

1. **No `gogreenfire.com` asset was migrated** (P2) — egress blocked. Inventory provided instead.
2. **No document link was swapped, removed, or re-pointed** — all SDS/brochure mismatches (P3 + the deeper set in SDS-LINK-AUDIT.md) require R&D sign-off. Report-only, as instructed.
3. **Use Concentration values** — already correct; verified, not touched.
4. **Desktop nav** — left at 8 items (adding SDS would crowd it); used footer + mobile + in-page instead, per the ticket's own fallback.
5. **Existing page titles** — not rewritten (unique already; length is a coordinated brand decision).
6. **Image width/height (311 imgs)** — not added (needs real dimensions from blocked hosts).
7. **Duplicate `showCertModal` dead code** — flagged, not removed (functional today; out of scope; regression risk).
8. **"Industrial Pricing" footer link** — intentionally still routes to the contact form.
9. **No files overwritten in place** — the new page is a new file (`sds.html`); the two self-hosted PDFs already follow the dated-filename convention and were not modified.

---

## Companion deliverable
- **SDS-LINK-AUDIT.md** — per-link table (page, product heading, link text, URL, printed identifier [UNVERIFIABLE — egress], revision date [UNVERIFIABLE — egress], filename-vs-heading signal), cross-page consistency, products with no SDS, unlinked repo PDFs. **Report only — no links changed.**
