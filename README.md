# Green Coffee Signal

**Weekly market intelligence for green coffee buyers and roasters.**

A signal model that answers one question: *should I buy now, or is it safe to wait?*

---

## What it does

Tracks 16 arabica-producing origins across three tiers. For each origin, a three-layer scoring model produces a weekly rating:

- **Strong Buy / Buy** — supply risk building, act soon
- **Watch** — structural conditions present, no trigger yet
- **Neutral** — no meaningful signal
- **Wait / Strong Wait** — oversupply or demand softness, better prices likely ahead

Ratings are driven by three signal layers:

| Layer | Type | Examples |
|---|---|---|
| L1 — Structural Priors | Slow-moving | Biennial cycle, ENSO phase, stock-to-use ratio |
| L2 — Leading Indicators | Medium speed | Crop forecast revisions, weather alerts, export certificates |
| L3 — Confirmation Signals | Fast-moving | C Market momentum, COT positioning, freight rates |

---

## Origins tracked

**Tier 1** — Brazil, Colombia, Ethiopia  
**Tier 2** — Honduras, Guatemala, Peru, Vietnam  
**Tier 3** — Kenya, Panama, Yemen, Indonesia, Mexico, Nicaragua, Costa Rica, El Salvador, Uganda, Tanzania

---

## Getting started

https://green-coffee-buyer-signal.vercel.app


---

## Build for production

```bash
npm run build
```

Output goes to `/dist` — deploy to Vercel, Netlify, or any static host.

---

## Stack

- React 18
- Vite
- No external dependencies — all data is currently static

---

## Roadmap

- [ ] Phase 2: Data source automation (NOAA, USDA PSD, CFTC COT, Yahoo Finance)
- [ ] Phase 3: Admin UI for manual signal updates and file uploads
- [ ] Phase 4: Auth + billing (Clerk + Stripe)
- [ ] Phase 5: Alert system (email/Slack notifications on rating changes)

---

## Specification

Full scoring algorithm, data source mapping, and origin matrix documented in:  
[Green Coffee Market Signal Model — Google Doc](https://docs.google.com/document/d/1fUAFwLB-1uLJNGfedpCLLpumkZ0Ot7_1jdzhbxghAiU)

---

*Data is currently manually curated. All signal states reflect the week of 26 May 2026.*
