# SDS / Document Link Audit — HALT Fire (Corrected)

**Date:** 2026-09-03
**Supersedes:** the PR #85 version of this file (which flagged the mismatches; this version records the corrections applied against the R&D-verified registry).
**Nature of changes:** Document **URLs** and **link labels** only. No product, certification, performance, or hazard-claim text was altered (except the single Pro Defense "homeowner" wording in Task 3).

---

## Verified Document Registry (authoritative — supplied by R&D, Brandon Miller)

These files were opened and their Section 1 Product Identifier read by R&D. Treated as authoritative; **not** re-derived from filenames.

| Product | Canonical SDS URL | Product Identifier printed inside | Revision |
|---|---|---|---|
| Multi-Class Foam Wetting Agent | `https://haltfire.com/MFWA-SDS-2026.pdf` | **GreenFire® Multiclass Foam Wetting Agent – Standard Usage** (manually verified — see status section) | January 2026 |
| GFFF Firefighting Foam | `…/2026/01/GFFF-StandardUsage-SDS.pdf` | GreenFire® Firefighting Foam (GFFF) – Standard Usage | January 2026 |
| Pro Defense | `…/2024/03/ProDefense-SDS.pdf` | GreenFire® Pro Defense | February 2024 |
| Pro Fire Suppressor | `…/2024/04/FireSuppressor-SDS.pdf` | GreenFire® Fire Suppressor | February 2024 |
| Heat Barrier | `…/2024/03/HeatBarrier-SDS.pdf` | GreenFire® Heat Barrier | February 2024 |

- **Superseded (removed everywhere):** `…/2022/08/ProDefense-SDS-FINAL-Aug-2022.pdf` (Aug 2022 Pro Defense, replaced by Feb 2024). *Was not referenced in the codebase; confirmed absent.*
- **Dead / HTTP 404 (removed everywhere):** `…/2024/04/WettingAgent-SDS.pdf`.
- **R&D confirmations applied:** there is **one** Pro Defense product (the "homeowner"/"professional" split was a legacy dual-label, not two SKUs); the **February 2024** Pro Defense SDS is current.

---

## HTTP status verification — could NOT be performed from this sandbox

Outbound egress remains **blocked by policy** (re-tested at the time of these edits): `haltfire.com` and `gogreenfire.com` both return `HTTP 000 / 403 CONNECT tunnel failed`. Therefore the **live HTTP status of every URL below is UNVERIFIED from here.** Status in the inventory reflects the **R&D-verified registry** (which states the 404 and the canonical 200s), not an independent request from this environment. A human on an unrestricted network should spot-check the canonical URLs.

---

## Tasks 1–4 — Before / After (every link changed)

| # | Task | File | Section (product) | Before | After |
|---|---|---|---|---|---|
| 1 | Dead 404 | `industrial.html` | Pro Defense — spec table SDS | `2024/04/WettingAgent-SDS.pdf` (404) | `2024/03/ProDefense-SDS.pdf` |
| 1 | Dead 404 | `professional.html` | Pro Suppressor — spec card SDS | `2024/04/WettingAgent-SDS.pdf` (404) | `2024/04/FireSuppressor-SDS.pdf` |
| 1 | Dead 404 | `professional.html` | Pro 32oz Heat Barrier — spec card SDS | `2024/04/WettingAgent-SDS.pdf` (404) | `2024/03/HeatBarrier-SDS.pdf` |
| 2 | Wrong product | `industrial.html` | Pro Defense — Technical Resources card SDS | `2024/03/HeatBarrier-SDS.pdf` (Heat Barrier doc) | `2024/03/ProDefense-SDS.pdf` |
| 2 | Wrong product | `professional.html` | Pro 32oz Heat Barrier — spec card brochure | `2023/04/GF_FireSuppressor_bro_final.pdf` (Fire Suppressor brochure) | `2023/04/GF_HeatBarrier_bro_final.pdf` |
| 4 | Revision conflict | `industrial.html` | GFFF — spec table SDS | `2024/04/GFFF-SDS.pdf` (older, unverified) | `2026/01/GFFF-StandardUsage-SDS.pdf` (Jan 2026) |
| 3 | One-product wording | `professional.html` | Pro Defense docs prompt | "Need Pro Defense **homeowner** documentation or bulk compliance packages?" | "Need Pro Defense documentation or bulk compliance packages?" |
| 6 | Registry match | `sds.html` | Pro Defense card | "SDS on request: Sales@haltfire.com" (no link) | `2024/03/ProDefense-SDS.pdf` — "Download SDS (PDF) — Rev. February 2024" |

**Post-edit verification (repo-wide greps):**
- `WettingAgent-SDS` → **0 matches** (all three dead buttons cleared).
- `ProDefense-SDS-FINAL-Aug-2022` → **0 matches** (superseded file absent).
- `2024/04/GFFF-SDS.pdf` → **0 matches** (older GFFF revision cleared).
- Pro Defense SDS across the whole site → **exactly one URL**, `2024/03/ProDefense-SDS.pdf` (4 link sites: industrial ×2, professional ×1, sds ×1).

## Task 3 — "homeowner / professional" sweep

Repo grep for `homeowner`, `Homeowner`, `Pro Defense for Homeowners`, `Pro Defense for Professionals`:

| Hit | Decision |
|---|---|
| `professional.html` — "Need Pro Defense **homeowner** documentation or bulk compliance packages?" | **Fixed** — "homeowner" removed (implied a separate doc set/variant paired against "bulk compliance"). |
| `consumer.html` — section eyebrow "Structure & Wildfire Defense **for Homeowners**" | **Reviewed, kept.** This is an audience descriptor for the single product; the section body explicitly states *"Pro Defense is a bulk product, not a consumer spray can"* and never labels a "Pro Defense for Homeowners" SKU. It does not imply two variants. Changing it would alter marketing copy outside Task 3's scope. |

No occurrences of "Pro Defense for Homeowners" or "Pro Defense for Professionals" exist in the codebase.

## Task 7 — Link-text standardization

All SDS buttons now contain the literal string **"SDS"** and carry the revision date as visible text (findability + revision confirmation for safety officers). 13 SDS buttons standardized:

- `Download SDS (PDF) — Rev. 2026` (MCFWA) ×3
- `Download SDS (PDF) — Rev. January 2026` (GFFF) ×3
- `Download SDS (PDF) — Rev. February 2024` (Pro Defense / Pro Suppressor / Heat Barrier) ×6
- `Pro Defense SDS (PDF) — Rev. February 2024` (professional standalone Pro Defense block) ×1

---

## Task 7 — Full document-link inventory (post-correction)

> HTTP status column omitted per the egress blocker above — status is per the verified registry: `2024/04/WettingAgent-SDS.pdf` = 404 (now removed); all listed canonical files = 200 per R&D. Independent re-check pending a human on an open network.

| Page | Section / product heading | Link text | Target file |
|---|---|---|---|
| industrial.html | Multi-Class Foam Wetting Agent | Product Brochure (PDF) | `2022/08/WettingAgent-Brochure-1-07.pdf` |
| industrial.html | Multi-Class Foam Wetting Agent | One-Page Cut Sheet (PDF) | `2022/08/WettingAgent-Brochure-Onepage-1-07-1.pdf` |
| industrial.html | Multi-Class Foam Wetting Agent | Download SDS (PDF) — Rev. 2026 | `haltfire.com/MFWA-SDS-2026.pdf` |
| industrial.html | Pro Defense | Product Brochure (PDF) | `2022/08/ProDefense-Brochure-FINAL.July-2022.pdf` |
| industrial.html | Pro Defense | **Download SDS (PDF) — Rev. February 2024** | `2024/03/ProDefense-SDS.pdf` |
| industrial.html | Pro Defense | Utility Contractor Info Sheet (PDF) | `2021/04/UTILITY-CONTRACTOR-INFORMATION.pdf` |
| industrial.html | GFFF Firefighting Foam | Product Brochure (PDF) | `2022/08/GFFF-Brochure-1-07.pdf` |
| industrial.html | GFFF Firefighting Foam | **Download SDS (PDF) — Rev. January 2026** | `2026/01/GFFF-StandardUsage-SDS.pdf` |
| industrial.html | Multi-Class Foam Wetting Agent (spec table) | Download …Brochure | `2022/08/WettingAgent-Brochure-1-07.pdf` |
| industrial.html | Multi-Class Foam Wetting Agent (spec table) | Download SDS (PDF) — Rev. 2026 | `haltfire.com/MFWA-SDS-2026.pdf` |
| industrial.html | Pro Defense (spec table) | Download Pro Defense Brochure | `2022/08/ProDefense-Brochure-FINAL.July-2022.pdf` |
| industrial.html | Pro Defense (spec table) | **Download SDS (PDF) — Rev. February 2024** | `2024/03/ProDefense-SDS.pdf` |
| industrial.html | GFFF Firefighting Foam (spec table) | Download GFFF Brochure | `2022/08/GFFF-Brochure-1-07.pdf` |
| industrial.html | GFFF Firefighting Foam (spec table) | **Download SDS (PDF) — Rev. January 2026** | `2026/01/GFFF-StandardUsage-SDS.pdf` |
| firedept.html | Multi-Class Foam Wetting Agent | Download …Brochure | `2022/08/WettingAgent-Brochure-1-07.pdf` |
| firedept.html | Multi-Class Foam Wetting Agent | Download SDS (PDF) — Rev. 2026 | `haltfire.com/MFWA-SDS-2026.pdf` |
| firedept.html | GFFF Firefighting Foam | Download GFFF Brochure | `2022/08/GFFF-Brochure-1-07.pdf` |
| firedept.html | GFFF Firefighting Foam | Download SDS (PDF) — Rev. January 2026 | `2026/01/GFFF-StandardUsage-SDS.pdf` |
| professional.html | Pro Suppressor (spec card) | Download Product Brochure | `2023/04/GF_FireSuppressor_bro_final.pdf` |
| professional.html | Pro Suppressor (spec card) | **Download SDS (PDF) — Rev. February 2024** | `2024/04/FireSuppressor-SDS.pdf` |
| professional.html | Pro 32oz Heat Barrier (spec card) | **Download Product Brochure** | `2023/04/GF_HeatBarrier_bro_final.pdf` |
| professional.html | Pro 32oz Heat Barrier (spec card) | **Download SDS (PDF) — Rev. February 2024** | `2024/03/HeatBarrier-SDS.pdf` |
| professional.html | HALT Pro Fire Suppressor (doc-card) | Product Brochure (PDF) | `2023/04/GF_FireSuppressor_bro_final.pdf` |
| professional.html | HALT Pro Fire Suppressor (doc-card) | Download SDS (PDF) — Rev. February 2024 | `2024/04/FireSuppressor-SDS.pdf` |
| professional.html | HALT Pro Heat Barrier (doc-card) | Product Brochure (PDF) | `2023/04/GF_HeatBarrier_bro_final.pdf` |
| professional.html | HALT Pro Heat Barrier (doc-card) | Download SDS (PDF) — Rev. February 2024 | `2024/03/HeatBarrier-SDS.pdf` |
| professional.html | Pro Defense (standalone block) | Pro Defense Brochure (PDF) | `2022/08/ProDefense-Brochure-FINAL.July-2022.pdf` |
| professional.html | Pro Defense (standalone block) | Pro Defense SDS (PDF) — Rev. February 2024 | `2024/03/ProDefense-SDS.pdf` |
| sds.html | Multi-Class Foam Wetting Agent | Download SDS (PDF) — Rev. 2026 | `haltfire.com/MFWA-SDS-2026.pdf` |
| sds.html | Multi-Class Foam Wetting Agent | Product Brochure (PDF) | `2022/08/WettingAgent-Brochure-1-07.pdf` |
| sds.html | Multi-Class Foam Wetting Agent | One-Page Cut Sheet (PDF) | `2022/08/WettingAgent-Brochure-Onepage-1-07-1.pdf` |
| sds.html | Multi-Class Foam Wetting Agent | SJFD Training Reference, 2026 (PDF) | `haltfire.com/SJFD-MCWA-Training-2026.pdf` |
| sds.html | GFFF Firefighting Foam | Download SDS (PDF) — Rev. January 2026 | `2026/01/GFFF-StandardUsage-SDS.pdf` |
| sds.html | GFFF Firefighting Foam | Product Brochure (PDF) | `2022/08/GFFF-Brochure-1-07.pdf` |
| sds.html | Pro Defense | Product Brochure (PDF) | `2022/08/ProDefense-Brochure-FINAL.July-2022.pdf` |
| sds.html | Pro Defense | Utility / Contractor Info Sheet (PDF) | `2021/04/UTILITY-CONTRACTOR-INFORMATION.pdf` |
| sds.html | Pro Defense | **Download SDS (PDF) — Rev. February 2024** (new) | `2024/03/ProDefense-SDS.pdf` |
| sds.html | Pro Suppressor (14oz / 20oz) | Product Brochure (PDF) | `2023/04/GF_FireSuppressor_bro_final.pdf` |
| sds.html | Pro Suppressor (14oz / 20oz) | Download SDS (PDF) — Rev. February 2024 | `2024/04/FireSuppressor-SDS.pdf` |
| sds.html | Heat Barrier (32oz pump spray) | Product Brochure (PDF) | `2023/04/GF_HeatBarrier_bro_final.pdf` |
| sds.html | Heat Barrier (32oz pump spray) | Download SDS (PDF) — Rev. February 2024 | `2024/03/HeatBarrier-SDS.pdf` |

---

## Cross-page / cross-section consistency — now ✅

| Product | SDS URL (all occurrences) | Pages | Verdict |
|---|---|---|---|
| Multi-Class Foam Wetting Agent | `haltfire.com/MFWA-SDS-2026.pdf` | industrial (card + spec), firedept, sds | ✅ single URL |
| GFFF Firefighting Foam | `2026/01/GFFF-StandardUsage-SDS.pdf` | industrial (card + spec), firedept, sds | ✅ single URL (2024 revision removed) |
| Pro Defense | `2024/03/ProDefense-SDS.pdf` | industrial (card + spec), professional, sds | ✅ single URL (HeatBarrier-SDS & WettingAgent-SDS references cleared) |
| Pro Fire Suppressor | `2024/04/FireSuppressor-SDS.pdf` | professional (spec + doc-card), sds | ✅ single URL (WettingAgent-SDS cleared) |
| Heat Barrier | `2024/03/HeatBarrier-SDS.pdf` | professional (spec + doc-card), sds | ✅ single URL; spec-card brochure corrected to Heat Barrier brochure |

Both product pages that carry an upper spec-card block **and** a lower doc-card block (professional.html) now agree within the page for both Pro Suppressor and Heat Barrier.

## Orphans & coverage

- **Repo-hosted PDFs, both linked:** `MFWA-SDS-2026.pdf` (industrial/firedept/sds), `SJFD-MCWA-Training-2026.pdf` (sds). No orphaned repo PDFs.
- **Products with no SDS linked anywhere:** the three consumer sprays — see the dedicated **PRODUCTS WITH NO SDS ON FILE** section below.

---

## Verification status of registry documents (updated — final pass 2026-09-03)

Both former OUTSTANDING items are now closed. **Zero OUTSTANDING verification items remain.**

| Document | Status | Detail |
|---|---|---|
| `https://haltfire.com/MFWA-SDS-2026.pdf` | ✅ **VERIFIED (manual)** | Opened and read by a human (not fetchable from this sandbox — egress blocked). Product Identifier: **GreenFire® Multiclass Foam Wetting Agent – Standard Usage**. Manufacturer: **Halt Industrial, Inc., 513 Main Street, Windermere, FL 34786**. Revision: **January 2026**. Branding: **HALT-branded** (HALT logo, haltfire.com footer) — this document has already been rebranded, unlike the GreenFire-branded documents. Hazard Statements: **None**. |
| `https://gogreenfire.com/wp-content/uploads/2024/04/GFFF-SDS.pdf` | ⛔ **SUPERSEDED — NO LONGER REFERENCED** | Every reference was removed in the prior pass (replaced by the Jan 2026 GFFF SDS). Repo-wide grep confirms **0 references in any HTML page** (only mentions remaining are inside this report and the git history). No site link depends on it; no further verification needed. |

> **Note on MFWA-SDS-2026.pdf revision label:** the SDS prints its revision as **January 2026**. The on-page button label currently reads "Download SDS (PDF) — Rev. 2026". The label is a *year* and is not wrong, but a follow-up could tighten it to "Rev. January 2026" to match the document exactly. Not changed in this pass (label-only, no functional impact; noted for completeness).

---

## PRODUCTS WITH NO SDS ON FILE  *(report only — route to R&D)*

The following products have **no Safety Data Sheet anywhere** — not in the repo, not on `haltfire.com`, and not on `gogreenfire.com`. They are sold through **retail and Amazon**.

| Product | Division | SDS status |
|---|---|---|
| **HALT! Household (10 oz)** | Consumer | **No SDS on file.** None exists in the repo or on either domain. |
| **HALT! Grill (10 oz)** | Consumer | **No SDS on file.** None exists in the repo or on either domain. |
| **HALT! Li-Ion (10 oz)** | Consumer | **No SDS on file.** None exists in the repo or on either domain. |

On `sds.html` these three show a plain-text **"SDS on request: Sales@haltfire.com"** — **no placeholder link, no substituted document**. Creating or substituting an SDS for these is out of scope and must not be done automatically; this is for a human to route to R&D so the correct consumer SDS documents can be produced and supplied.

---

## NAMING / SPEC DISCREPANCIES  *(report only — do NOT change; require R&D sign-off)*

Nothing below was edited. Product names, spec values, and claim text were left exactly as-is.

**1. "Multiclass" (one word, in the SDS) vs "Multi-Class" (hyphenated, on the site).**
The verified SDS inside `MFWA-SDS-2026.pdf` prints the product name as **"GreenFire® Multiclass Foam Wetting Agent – Standard Usage"** — *Multiclass*, one word. The website uses **"Multi-Class Foam Wetting Agent"** (hyphenated) throughout (industrial.html, firedept.html, sds.html, index.html, llms.txt, etc.). The document and the site disagree on the product's own name. R&D to decide the canonical spelling.

**2. pH value — the SDS single value vs the on-site ranges, which also disagree with each other.**
The verified SDS lists pH as a **single value of 6.8**. The site states a *range* for the same product (Multi-Class Foam Wetting Agent), and the two product pages do **not** agree:

| Page | Product | pH stated on page |
|---|---|---|
| `firedept.html` (line 1175) | Multi-Class Foam Wetting Agent | **6.8 – 7.4** |
| `industrial.html` (line 1304) | Multi-Class Foam Wetting Agent | **6.8 – 7.6** |
| `MFWA-SDS-2026.pdf` (SDS) | Multiclass Foam Wetting Agent | **6.8** (single value) |

So there are **three different pH representations** for this one product. *(For reference, GFFF's pH is a consistent 6.8 – 7.6 on both industrial.html:1355 and firedept.html:1199 — not part of this discrepancy.)* R&D to reconcile the MCFWA pH across the SDS and both pages. **No spec value was changed.**

---

## FINAL STATUS (final pass)

| Item | Status | Notes |
|---|---|---|
| All SDS links resolve to the correct product | ✅ **COMPLETE** | Per the R&D-verified registry; each of the 5 products maps to exactly one SDS URL site-wide. |
| All SDS links return HTTP 200 | ⛔ **BLOCKED** | Cannot be verified — sandbox egress to `haltfire.com`/`gogreenfire.com` is blocked (403 / HTTP 000), re-tested this pass. No HTTP 200 was observed for any external URL; none is claimed. Requires a human on an open network (Task 4). |
| All documents self-hosted, zero gogreenfire.com dependencies | ⛔ **BLOCKED** | Migration (Task 2) requires downloading the files, which egress blocks. **41 gogreenfire.com assets remain hot-linked** (11 PDFs + 30 images — full list below). Not attempted; nothing rewritten to a local path that could not be downloaded. |
| Zero OUTSTANDING verification items | ✅ **COMPLETE** | MFWA-SDS-2026.pdf verified (manual); 2024/04/GFFF-SDS.pdf reclassified SUPERSEDED — no longer referenced. |
| Consumer SDS gap documented | ✅ **COMPLETE** | See *PRODUCTS WITH NO SDS ON FILE* above. |
| Naming discrepancies documented | ✅ **FLAGGED FOR R&D** | "Multiclass" vs "Multi-Class"; MCFWA pH (SDS 6.8 vs firedept 6.8–7.4 vs industrial 6.8–7.6). |

---

## TASK 2 (BLOCKED) — gogreenfire.com asset migration inventory

**Not performed — sandbox egress is blocked.** The files cannot be downloaded, so none could be verified (HTTP 200 + magic-byte check) or committed to `/docs//img`, and no reference was rewritten (rewriting to a local path for a file that could not be downloaded would create a broken link). This is the largest outstanding risk: one file on this third-party host (`WettingAgent-SDS.pdf`) was already deleted out from under the site, causing three dead buttons; any of the below can vanish the same way.

Complete inventory to migrate once run from an environment with outbound access to `gogreenfire.com` (preserve original filenames; PDFs → `/docs/`, images → `/img/`):

**PDFs (11):**
- `2021/04/UTILITY-CONTRACTOR-INFORMATION.pdf`
- `2022/08/GFFF-Brochure-1-07.pdf`
- `2022/08/ProDefense-Brochure-FINAL.July-2022.pdf`
- `2022/08/WettingAgent-Brochure-1-07.pdf`
- `2022/08/WettingAgent-Brochure-Onepage-1-07-1.pdf`
- `2023/04/GF_FireSuppressor_bro_final.pdf`
- `2023/04/GF_HeatBarrier_bro_final.pdf`
- `2024/03/HeatBarrier-SDS.pdf`
- `2024/03/ProDefense-SDS.pdf`
- `2024/04/FireSuppressor-SDS.pdf`
- `2026/01/GFFF-StandardUsage-SDS.pdf`

**Images (30):** product/hazard-icon and certification-logo assets plus hero/section photography — `non-toxic.png`, `non-carcinogenic.png`, `eco.png`, `easy-clean.png`, `non-corrosive.png`, `surface-angle.png`, `not-evaporate.png`, `food-safe.png`, `forest-1500x843.jpg`, `FD-ENGINE-920x400-1-1500x843.jpg`, `helmuts-1500x843.png`, `9623-…-1500x843.jpg`, `Picture6-1500x843.png`, `UTILITY-2-1500x843.jpeg`, `firefighter-fire-firefighting-A5P7EBD-1500x843.jpg`, `AdobeStock_223068772-1500x843.jpeg`, `AdobeStock_392851313-…-1300x867.jpeg`, `Crib-Fire-Test-1500x844.jpg`, `earrth-dewdrop-…-1500x1250.jpeg`, `Fire-Fighting-Foam-Toxicity-1500x1250.png`, `GReenFire-Fire-Supression-truck-1.jpeg`, `GreenFire-Fire-Prevention-Slider-1.jpeg`, `GreenFire-Fire-Prevention-Slider-utility-1.jpeg`, `GreenFire-Fire-Supression-Slider1-1.jpeg`, `omri-listed-logo.jpg`, `greenscreen-certified-logo_400_400_s-…950.png`, `DM-REV-1-NSF-LOGO-P1-…397.png`, `USA.png`, `GreenFire_UL_Classified.jpeg`, `NFPA-Badge.png`.

**Zero non-asset gogreenfire.com links** exist in the repo — i.e. there is no legitimate "link to the old site" to preserve; every gogreenfire.com reference is an asset that should be migrated.

*(Also worth migrating in the same pass, though outside the strict gogreenfire scope: 38 `mcusercontent.com` and 11 `cdn.prod.website-files.com` asset references — logos, favicons, and icons on third-party CDNs.)*
