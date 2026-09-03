# SDS / Document Link Audit — HALT Fire

**Date:** 2026-09-03
**Scope:** Every SDS, brochure, and cut-sheet (PDF) link on the site, verified against the product it is presented under.
**Standing instruction honored:** This is a **report only**. No document link was swapped, removed, re-pointed, or "fixed." Every discrepancy below is flagged for **R&D sign-off**.

---

## ⚠️ Method limitation — PDF content could not be read

The requested method was: download each linked PDF, read **Section 1 (Identification)**, extract the printed **Product Identifier**, and compare it to the page heading.

**This step is physically impossible from the build sandbox.** Outbound network egress is blocked by policy for both document hosts:

- `gogreenfire.com` → `EGRESS_BLOCKED` (WebFetch) / `403 CONNECT tunnel failed` (curl)
- `haltfire.com` → `403 CONNECT tunnel failed` (curl)

Re-confirmed at audit time against the live proxy (`gateway answered 403 to CONNECT — policy denial`). Both the CLI (`curl`) and the fetch tool (`WebFetch`) fail identically.

**Consequence:** The **"Product Identifier inside PDF"** and **"Printed revision date"** columns cannot be filled — they are marked `UNVERIFIABLE (egress blocked)` for every row. No verdict in this report asserts a MATCH or MISMATCH on PDF *content*, because that content was never read. Fabricating those values was not an option.

**What this audit *can* and *does* verify deterministically** (from the static HTML, no network needed):
1. Full inventory of every document link (page, section, product heading, link text, target URL).
2. **Filename-vs-heading signal** — whether the target filename is consistent with the product it sits under (filenames are known to be unreliable, so this is a *signal*, not a verdict).
3. **Cross-page / cross-section consistency** — whether the same product links to the same document everywhere it appears.
4. Products with **no SDS linked anywhere**.
5. Repo-hosted PDFs **not linked from any page**.

The "Filename Signal" column is the actionable output: rows marked **MISMATCH-SUSPECT** are the ones R&D should open and read first. All rows still require a human to open the PDF and confirm Section 1 before any link is changed.

---

## 1. Full document-link inventory

Verdict legend: **CONTENT = UNVERIFIABLE** on every row (egress blocked — see above). **Filename Signal** = OK (filename consistent with heading) / **MISMATCH-SUSPECT** (filename names a different product than the heading).

### industrial.html

| # | Product heading | Section | Link text | Target file | Printed identifier | Printed rev. date | Filename signal |
|---|---|---|---|---|---|---|---|
| 1 | Multi-Class Foam Wetting Agent | Technical Resources (doc-card) | Product Brochure | `2022/08/WettingAgent-Brochure-1-07.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 2 | Multi-Class Foam Wetting Agent | Technical Resources (doc-card) | One-Page Cut Sheet | `2022/08/WettingAgent-Brochure-Onepage-1-07-1.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 3 | Multi-Class Foam Wetting Agent | Technical Resources (doc-card) | Safety Data Sheet, 2026 | `haltfire.com/MFWA-SDS-2026.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK (self-hosted) |
| 4 | Pro Defense | Technical Resources (doc-card) | Product Brochure | `2022/08/ProDefense-Brochure-FINAL.July-2022.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 5 | **Pro Defense** | Technical Resources (doc-card) | **Safety Data Sheet** | **`2024/03/HeatBarrier-SDS.pdf`** | UNVERIFIABLE | UNVERIFIABLE | **MISMATCH-SUSPECT** — filename names *Heat Barrier* (a 32 oz consumer spray), not Pro Defense |
| 6 | Pro Defense | Technical Resources (doc-card) | Utility Contractor Info Sheet | `2021/04/UTILITY-CONTRACTOR-INFORMATION.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 7 | GFFF Firefighting Foam | Technical Resources (doc-card) | Product Brochure | `2022/08/GFFF-Brochure-1-07.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 8 | GFFF Firefighting Foam | Technical Resources (doc-card) | Safety Data Sheet, 2026 | `2026/01/GFFF-StandardUsage-SDS.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 9 | Multi-Class Foam Wetting Agent | Tech Specs table | Download …Brochure | `2022/08/WettingAgent-Brochure-1-07.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 10 | Multi-Class Foam Wetting Agent | Tech Specs table | Download SDS Sheet | `haltfire.com/MFWA-SDS-2026.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 11 | Pro Defense | Tech Specs table | Download Pro Defense Brochure | `2022/08/ProDefense-Brochure-FINAL.July-2022.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 12 | **Pro Defense** | Tech Specs table | **Download SDS Sheet** | **`2024/04/WettingAgent-SDS.pdf`** | UNVERIFIABLE | UNVERIFIABLE | **MISMATCH-SUSPECT** — filename names *Wetting Agent* (MCFWA), not Pro Defense. Also ≠ the Pro Defense SDS in row 5. |
| 13 | GFFF Firefighting Foam | Tech Specs table | Download GFFF Brochure | `2022/08/GFFF-Brochure-1-07.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 14 | **GFFF Firefighting Foam** | Tech Specs table | **Download SDS Sheet** | **`2024/04/GFFF-SDS.pdf`** | UNVERIFIABLE | UNVERIFIABLE | Filename OK, but **REVISION CONFLICT** — 2024/04 here vs 2026/01 in row 8 on the same page. |

### firedept.html

| # | Product heading | Section | Link text | Target file | Printed identifier | Printed rev. date | Filename signal |
|---|---|---|---|---|---|---|---|
| 15 | Multi-Class Foam Wetting Agent | Specs & Downloads | Download …Brochure | `2022/08/WettingAgent-Brochure-1-07.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 16 | Multi-Class Foam Wetting Agent | Specs & Downloads | Safety Data Sheet 2026 | `haltfire.com/MFWA-SDS-2026.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 17 | GFFF Firefighting Foam | Specs & Downloads | Download GFFF Brochure | `2022/08/GFFF-Brochure-1-07.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 18 | GFFF Firefighting Foam | Specs & Downloads | Safety Data Sheet 2026 | `2026/01/GFFF-StandardUsage-SDS.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |

### professional.html

| # | Product heading | Section | Link text | Target file | Printed identifier | Printed rev. date | Filename signal |
|---|---|---|---|---|---|---|---|
| 19 | Pro Suppressor | Upper "Product Specs & Downloads" spec card | Download Product Brochure | `2023/04/GF_FireSuppressor_bro_final.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 20 | **Pro Suppressor** | Upper spec card | **Download SDS Sheet** | **`2024/04/WettingAgent-SDS.pdf`** | UNVERIFIABLE | UNVERIFIABLE | **MISMATCH-SUSPECT** — filename names *Wetting Agent* (MCFWA), not the Pro Suppressor aerosol. Also ≠ row 24 (`FireSuppressor-SDS.pdf`) for the same product on this same page. |
| 21 | **Pro 32oz Heat Barrier** | Upper spec card | **Download Product Brochure** | **`2023/04/GF_FireSuppressor_bro_final.pdf`** | UNVERIFIABLE | UNVERIFIABLE | **MISMATCH-SUSPECT** — this is the *Fire Suppressor* brochure, under a Heat Barrier heading. Also ≠ row 25 (`GF_HeatBarrier_bro_final.pdf`). |
| 22 | **Pro 32oz Heat Barrier** | Upper spec card | **Download SDS Sheet** | **`2024/04/WettingAgent-SDS.pdf`** | UNVERIFIABLE | UNVERIFIABLE | **MISMATCH-SUSPECT** — filename names *Wetting Agent* (MCFWA), not Heat Barrier. Also ≠ row 26 (`HeatBarrier-SDS.pdf`). |
| 23 | HALT Pro Fire Suppressor | Lower "Pro Docs" doc-card | Product Brochure | `2023/04/GF_FireSuppressor_bro_final.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 24 | HALT Pro Fire Suppressor | Lower doc-card | Safety Data Sheet | `2024/04/FireSuppressor-SDS.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 25 | HALT Pro Heat Barrier | Lower doc-card | Product Brochure | `2023/04/GF_HeatBarrier_bro_final.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 26 | HALT Pro Heat Barrier | Lower doc-card | Safety Data Sheet | `2024/03/HeatBarrier-SDS.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 27 | Pro Defense (trailing "Need Pro Defense documentation?" block) | Lower doc-card footer | Pro Defense Brochure | `2022/08/ProDefense-Brochure-FINAL.July-2022.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK (block is Pro Defense, not Heat Barrier — heading proximity only) |
| 28 | **Pro Defense** (trailing block) | Lower doc-card footer | **Pro Defense SDS** | **`2024/03/ProDefense-SDS.pdf`** | UNVERIFIABLE | UNVERIFIABLE | Filename OK — **but this is a THIRD, different Pro Defense SDS URL** vs rows 5 and 12. |

### sds.html (new page — built this PR)

| # | Product heading | Section | Link text | Target file | Printed identifier | Printed rev. date | Filename signal |
|---|---|---|---|---|---|---|---|
| 29 | Multi-Class Foam Wetting Agent | #industrial | Safety Data Sheet, 2026 | `haltfire.com/MFWA-SDS-2026.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 30 | Multi-Class Foam Wetting Agent | #industrial | Product Brochure | `2022/08/WettingAgent-Brochure-1-07.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 31 | Multi-Class Foam Wetting Agent | #industrial | One-Page Cut Sheet | `2022/08/WettingAgent-Brochure-Onepage-1-07-1.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 32 | Multi-Class Foam Wetting Agent | #industrial | SJFD Training Reference, 2026 | `haltfire.com/SJFD-MCWA-Training-2026.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 33 | GFFF Firefighting Foam | #industrial | Safety Data Sheet, 2026 | `2026/01/GFFF-StandardUsage-SDS.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK (2026 revision chosen — see note) |
| 34 | GFFF Firefighting Foam | #industrial | Product Brochure | `2022/08/GFFF-Brochure-1-07.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 35 | Pro Defense | #industrial | Product Brochure | `2022/08/ProDefense-Brochure-FINAL.July-2022.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 36 | Pro Defense | #industrial | Utility / Contractor Info Sheet | `2021/04/UTILITY-CONTRACTOR-INFORMATION.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 37 | Pro Suppressor (14oz / 20oz) | #professional | Product Brochure | `2023/04/GF_FireSuppressor_bro_final.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 38 | Pro Suppressor (14oz / 20oz) | #professional | Safety Data Sheet | `2024/04/FireSuppressor-SDS.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK (name-matching SDS chosen, not `WettingAgent-SDS.pdf`) |
| 39 | Heat Barrier (32oz pump spray) | #professional | Product Brochure | `2023/04/GF_HeatBarrier_bro_final.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |
| 40 | Heat Barrier (32oz pump spray) | #professional | Safety Data Sheet | `2024/03/HeatBarrier-SDS.pdf` | UNVERIFIABLE | UNVERIFIABLE | OK |

> **sds.html deliberately links NO Pro Defense SDS and NO consumer SDS** — because the correct Pro Defense SDS is unresolved (three conflicting URLs, see below) and no consumer SDS exists in the repo or is linked anywhere. Those cards show a plain-text "SDS on request: Sales@haltfire.com" instead of guessing. This avoids propagating a suspect link onto the new canonical documents page.

---

## 2. Cross-page / cross-section consistency (deterministic — no PDF read needed)

| Product | SDS link(s) found | Consistent? | Detail |
|---|---|---|---|
| **MCFWA (Multi-Class Foam Wetting Agent)** | `MFWA-SDS-2026.pdf` (industrial ×2, firedept, sds) | ✅ **Consistent** | Same self-hosted 2026 SDS everywhere it is labeled as MCFWA. |
| **GFFF** | `GFFF-StandardUsage-SDS.pdf` (2026/01) on industrial doc-card, firedept, sds **vs** `GFFF-SDS.pdf` (2024/04) on industrial specs table | ⚠️ **INCONSISTENT** | industrial.html links **two different GFFF SDS revisions** on the same page (rows 8 vs 14). firedept + sds use only 2026. **Which revision is current?** → R&D. |
| **Pro Defense** | `HeatBarrier-SDS.pdf` (industrial doc-card, row 5) **/** `WettingAgent-SDS.pdf` (industrial specs, row 12) **/** `ProDefense-SDS.pdf` (professional, row 28) | 🔴 **THREE-WAY CONFLICT** | "Pro Defense SDS" resolves to **three different files**, none confirmed. Only `ProDefense-SDS.pdf` matches by name. → R&D must confirm the correct file, then all three call-sites should point to it. |
| **Pro Suppressor** | `WettingAgent-SDS.pdf` (professional upper spec card, row 20) **vs** `FireSuppressor-SDS.pdf` (professional lower doc-card, row 24) | ⚠️ **INCONSISTENT** | Same product, same page, **two different SDS files**. `FireSuppressor-SDS.pdf` matches by name; `WettingAgent-SDS.pdf` is the MCFWA filename. → R&D. |
| **Heat Barrier** | `HeatBarrier-SDS.pdf` (professional lower doc-card, row 26) **vs** `WettingAgent-SDS.pdf` (professional upper spec card, row 22) | ⚠️ **INCONSISTENT** | Same product, same page, two different SDS files; the upper card *also* uses the wrong brochure (`GF_FireSuppressor_bro_final.pdf`, row 21). → R&D. |

> **Root pattern:** `professional.html` has an **upper "Product Specs & Downloads" spec-card block** whose SDS/brochure links (rows 19–22) point at MCFWA/Suppressor files regardless of the product heading, and a **lower "Pro Docs Downloads" doc-card block** (rows 23–26) whose links are name-consistent. The two blocks disagree for both Pro Suppressor and Heat Barrier.

---

## 3. Products with NO SDS linked anywhere on the site

| Product | Division | SDS status |
|---|---|---|
| HALT! Household (10 oz) | Consumer | **No SDS linked anywhere.** No consumer SDS PDF exists in the repo. sds.html shows "SDS on request." |
| HALT! Grill (10 oz) | Consumer | **No SDS linked anywhere.** Same as above. |
| HALT! Li-Ion (10 oz) | Consumer | **No SDS linked anywhere.** Same as above. |
| Pro Defense | Industrial | Has SDS *links*, but all three are suspect/conflicting (§2). Effectively **no confirmed SDS**. |

> The consumer products page (`consumer.html`) carries product marketing but no SDS/brochure download links at all. If consumer SDS documents exist, they are neither in the repo nor referenced — R&D/marketing to supply.

## 4. Repo-hosted PDFs not linked from any page

| Repo file | Linked? |
|---|---|
| `MFWA-SDS-2026.pdf` | ✅ Linked (industrial, firedept, sds) |
| `SJFD-MCWA-Training-2026.pdf` | ✅ Linked (sds.html) |

**No orphaned/unlinked PDFs in the repo.** (These are the only two self-hosted PDFs; every other document link points to `gogreenfire.com`.)

---

## 5. Summary of items requiring R&D sign-off

1. **Pro Defense SDS** — resolve the three-way conflict (`HeatBarrier-SDS` / `WettingAgent-SDS` / `ProDefense-SDS`) and confirm the single correct file. (rows 5, 12, 28)
2. **GFFF SDS revision** — confirm current revision: `GFFF-StandardUsage-SDS.pdf` (2026/01) or `GFFF-SDS.pdf` (2024/04). (rows 8, 14, 18, 33)
3. **Pro Suppressor SDS** — confirm `FireSuppressor-SDS.pdf` is correct and retire `WettingAgent-SDS.pdf` from that product. (rows 20, 24)
4. **Heat Barrier brochure + SDS (upper spec card)** — the upper professional.html card uses the Fire Suppressor brochure and the Wetting Agent SDS. (rows 21, 22)
5. **Confirm every remaining link by opening the PDF** — because PDF content could not be read here, even the "OK" rows are unconfirmed against Section 1. A human with network access must open each PDF and check the printed Product Identifier before any link is trusted or changed.
6. **Consumer SDS documents** — supply if they exist.

**No links were changed. All findings above are advisory and await R&D decision.**
