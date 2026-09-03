# SDS / Document Link Audit — HALT Fire (Corrected)

**Date:** 2026-09-03
**Supersedes:** the PR #85 version of this file (which flagged the mismatches; this version records the corrections applied against the R&D-verified registry).
**Nature of changes:** Document **URLs** and **link labels** only. No product, certification, performance, or hazard-claim text was altered (except the single Pro Defense "homeowner" wording in Task 3).

---

## Verified Document Registry (authoritative — supplied by R&D, Brandon Miller)

These files were opened and their Section 1 Product Identifier read by R&D. Treated as authoritative; **not** re-derived from filenames.

| Product | Canonical SDS URL | Product Identifier printed inside | Revision |
|---|---|---|---|
| Multi-Class Foam Wetting Agent | `https://haltfire.com/MFWA-SDS-2026.pdf` | unverified — see OUTSTANDING | 2026 |
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
- **Products with no SDS linked anywhere:** the three consumer sprays — **HALT! Household 10 oz, Grill 10 oz, Li-Ion 10 oz** — still show "SDS on request: Sales@haltfire.com" on sds.html. **No consumer SDS exists in the registry or repo.** Left untouched (per the hard constraint: do not invent a link). Flagged for R&D/marketing to supply.

---

## OUTSTANDING — manual check required (Task 5, egress-blocked)

The sandbox cannot reach these; a human must open them and confirm:

1. **`https://haltfire.com/MFWA-SDS-2026.pdf`** — confirm the Section 1 Product Identifier reads as the Multi-Class Foam Wetting Agent (or legacy "GreenFire® Wetting Agent") and record the exact revision date. *(Currently labeled "Rev. 2026" from the registry; the identifier is the one field R&D marked unverified.)*
2. **`https://gogreenfire.com/wp-content/uploads/2024/04/GFFF-SDS.pdf`** — confirm whether it resolves at all and what product it identifies as. *(This older GFFF SDS has been removed from the site in favor of the Jan 2026 revision; verification is only to close the loop on the legacy file — no site link depends on it any longer.)*

Neither was marked verified. No link was pointed at an unverified/dead file.
