import { useState } from "react";

const origins = [
  // ─── TIER 1 ───────────────────────────────────────────────────────────────
  {
    id: "brazil",
    name: "Brazil",
    flag: "🇧🇷",
    tier: "Tier 1 · ~40% Global Arabica",
    rating: "BUY",
    confidence: "HIGH",
    direction: "deteriorating",
    score: 6,
    urgency: "Act within weeks — window is closing",
    lastUpdated: "26 May 2026",
    nextUpdate: "2 Jun 2026",
    topSignals: [
      "La Niña elevated — frost risk in Minas Gerais",
      "Conab Q1 revision: −4% vs prior estimate",
      "Biennial off-year cycle confirmed",
    ],
    layers: {
      "Structural Priors": {
        status: "bullish",
        signals: [
          { name: "Biennial Cycle", status: "bullish", detail: "Off-year — lower yield expected", source: "Conab historical" },
          { name: "ENSO Phase", status: "bullish", detail: "La Niña active — frost & drought risk elevated", source: "NOAA" },
          { name: "Stock-to-Use Ratio", status: "neutral", detail: "Within 5-year average range", source: "USDA WASDE" },
          { name: "Origin Supply Share", status: "bullish", detail: "Tier 1 — dominant C price driver", source: "ICO / USDA" },
        ],
      },
      "Leading Indicators": {
        status: "bullish",
        signals: [
          { name: "Conab Crop Forecast", status: "bullish", detail: "Downward revision: −4% vs prior estimate", source: "Conab, Jan 2026" },
          { name: "Weather Alerts", status: "bullish", detail: "Drought in Minas Gerais, frost risk flagged Jun–Aug", source: "INMET" },
          { name: "ICO Export Certificates", status: "neutral", detail: "Volumes within normal seasonal range", source: "ICO" },
          { name: "BRL / USD", status: "neutral", detail: "Stable — no significant producer selling pressure", source: "Yahoo Finance" },
          { name: "Vietnam Robusta", status: "neutral", detail: "Average crop — no substitution effect", source: "USDA / VICOFA" },
        ],
      },
      "Confirmation Signals": {
        status: "bullish",
        signals: [
          { name: "C Market Momentum", status: "bullish", detail: "Price up 8% over 30 days, upward EMA trend", source: "ICE / KC=F" },
          { name: "COT Managed Money", status: "neutral", detail: "Net long increasing but mid-range historically", source: "CFTC" },
          { name: "COT vs 5-Year Range", status: "bullish", detail: "Near 3-year low — room for speculator buying", source: "CFTC historical" },
          { name: "Freight & Fuel", status: "neutral", detail: "Brent stable, no additional landed cost pressure", source: "EIA / Freightos" },
          { name: "Trade Sentiment", status: "bullish", detail: "Growing supply concern coverage in trade press", source: "Manual" },
        ],
      },
    },
    demandNote: "Neutral demand environment — no modifier applied",
  },
  {
    id: "colombia",
    name: "Colombia",
    flag: "🇨🇴",
    tier: "Tier 1 · ~10% Global Arabica",
    rating: "NEUTRAL",
    confidence: "MEDIUM",
    direction: "stable",
    score: 0,
    urgency: "No signal — continue monitoring",
    lastUpdated: "26 May 2026",
    nextUpdate: "2 Jun 2026",
    topSignals: [
      "On-year biennial cycle — higher yield expected",
      "La Niña rainfall risk partially offsetting",
      "Export volumes rising steadily",
    ],
    layers: {
      "Structural Priors": {
        status: "bearish",
        signals: [
          { name: "Biennial Cycle", status: "bearish", detail: "On-year — higher yield cycle active", source: "FNC / USDA" },
          { name: "ENSO Phase", status: "bullish", detail: "La Niña — excess rainfall risk in Huila, Nariño", source: "NOAA / IDEAM" },
          { name: "Stock-to-Use Ratio", status: "neutral", detail: "Within 5-year average", source: "USDA WASDE" },
          { name: "Origin Supply Share", status: "neutral", detail: "Tier 1 but not C price dominant", source: "ICO / USDA" },
        ],
      },
      "Leading Indicators": {
        status: "bearish",
        signals: [
          { name: "FNC Crop Forecast", status: "neutral", detail: "No revision — stable estimate vs prior", source: "FNC" },
          { name: "Weather Alerts", status: "neutral", detail: "Normal seasonal conditions across key regions", source: "IDEAM" },
          { name: "ICO Export Certificates", status: "bearish", detail: "Volumes rising — supply moving freely", source: "ICO" },
          { name: "COP / USD", status: "neutral", detail: "Stable — no significant trend", source: "Yahoo Finance" },
          { name: "Vietnam Robusta", status: "neutral", detail: "No substitution pressure", source: "USDA" },
        ],
      },
      "Confirmation Signals": {
        status: "neutral",
        signals: [
          { name: "C Market Momentum", status: "neutral", detail: "Flat — no directional price move", source: "ICE / KC=F" },
          { name: "COT Managed Money", status: "neutral", detail: "Stable positioning week-over-week", source: "CFTC" },
          { name: "COT vs 5-Year Range", status: "neutral", detail: "Mid-range — no strong signal", source: "CFTC historical" },
          { name: "Freight & Fuel", status: "neutral", detail: "Stable", source: "EIA / Freightos" },
          { name: "Trade Sentiment", status: "neutral", detail: "No notable coverage", source: "Manual" },
        ],
      },
    },
    demandNote: "Neutral demand environment — no modifier applied",
  },
  {
    id: "ethiopia",
    name: "Ethiopia",
    flag: "🇪🇹",
    tier: "Tier 1 · High Specialty Weight",
    rating: "WATCH",
    confidence: "LOW",
    direction: "stable",
    score: 2,
    urgency: "Monitor — structural risk building, no trigger yet",
    lastUpdated: "26 May 2026",
    nextUpdate: "2 Jun 2026",
    topSignals: [
      "El Niño risk — drought risk in southern washing zones",
      "Specialty premium partially decoupled from C",
      "No crop revision yet — watch for USDA update",
    ],
    layers: {
      "Structural Priors": {
        status: "bullish",
        signals: [
          { name: "Biennial Cycle", status: "neutral", detail: "Weak cycle — high varietal mix dampens pattern", source: "USDA" },
          { name: "ENSO Phase", status: "bullish", detail: "El Niño risk — drought in Yirgacheffe, Sidamo southern zones", source: "NOAA" },
          { name: "Stock-to-Use Ratio", status: "neutral", detail: "Within normal range", source: "USDA WASDE" },
          { name: "Origin Supply Share", status: "neutral", detail: "Specialty influence only — limited direct C impact", source: "ICO" },
        ],
      },
      "Leading Indicators": {
        status: "neutral",
        signals: [
          { name: "USDA Crop Forecast", status: "neutral", detail: "No revision — next WASDE due Jun 10", source: "USDA" },
          { name: "Weather Alerts", status: "bullish", detail: "Below-average rainfall flagged in southern regions", source: "EthioMet" },
          { name: "ICO Export Certificates", status: "neutral", detail: "Normal seasonal volumes", source: "ICO" },
          { name: "ETB / USD", status: "neutral", detail: "Stable — no significant movement", source: "Yahoo Finance" },
          { name: "Vietnam Robusta", status: "neutral", detail: "No impact", source: "USDA" },
        ],
      },
      "Confirmation Signals": {
        status: "neutral",
        signals: [
          { name: "C Market Momentum", status: "neutral", detail: "Stable — no directional move", source: "ICE / KC=F" },
          { name: "COT Managed Money", status: "neutral", detail: "No significant change", source: "CFTC" },
          { name: "COT vs 5-Year Range", status: "neutral", detail: "Mid-range", source: "CFTC historical" },
          { name: "Freight & Fuel", status: "neutral", detail: "Stable", source: "EIA / Freightos" },
          { name: "Trade Sentiment", status: "neutral", detail: "No notable coverage", source: "Manual" },
        ],
      },
    },
    demandNote: "Neutral demand environment — no modifier applied",
  },

  // ─── TIER 2 ───────────────────────────────────────────────────────────────
  {
    id: "honduras",
    name: "Honduras",
    flag: "🇭🇳",
    tier: "Tier 2 · ~3% Global Volume",
    rating: "WAIT",
    confidence: "MEDIUM",
    direction: "improving",
    score: -5,
    urgency: "Better prices likely ahead — hold off on cover",
    lastUpdated: "26 May 2026",
    nextUpdate: "2 Jun 2026",
    topSignals: [
      "On-year biennial — bumper crop forecast",
      "USDA upward revision: +6% vs prior estimate",
      "Favourable rainfall across all growing regions",
    ],
    layers: {
      "Structural Priors": {
        status: "bearish",
        signals: [
          { name: "Biennial Cycle", status: "bearish", detail: "On-year — strong yield cycle active", source: "IHCAFE / USDA" },
          { name: "ENSO Phase", status: "neutral", detail: "Limited direct ENSO exposure", source: "NOAA" },
          { name: "Stock-to-Use Ratio", status: "bearish", detail: "Above 5-year average — oversupply building", source: "USDA WASDE" },
          { name: "Origin Supply Share", status: "neutral", detail: "Tier 2 — moderate C price influence", source: "ICO" },
        ],
      },
      "Leading Indicators": {
        status: "bearish",
        signals: [
          { name: "IHCAFE Crop Forecast", status: "bearish", detail: "Upward revision: +6% — bumper crop expected", source: "IHCAFE" },
          { name: "Weather Alerts", status: "bearish", detail: "Favourable rainfall, no frost risk across Copán, Santa Bárbara", source: "SMN Honduras" },
          { name: "ICO Export Certificates", status: "neutral", detail: "Normal seasonal range", source: "ICO" },
          { name: "HNL / USD", status: "neutral", detail: "Stable", source: "Yahoo Finance" },
          { name: "Vietnam Robusta", status: "neutral", detail: "No impact", source: "USDA" },
        ],
      },
      "Confirmation Signals": {
        status: "bearish",
        signals: [
          { name: "C Market Momentum", status: "neutral", detail: "No directional move specific to Honduras", source: "ICE / KC=F" },
          { name: "COT Managed Money", status: "bearish", detail: "Speculators reducing net long exposure", source: "CFTC" },
          { name: "COT vs 5-Year Range", status: "neutral", detail: "Mid-range", source: "CFTC historical" },
          { name: "Freight & Fuel", status: "neutral", detail: "Stable", source: "EIA / Freightos" },
          { name: "Trade Sentiment", status: "neutral", detail: "No notable coverage", source: "Manual" },
        ],
      },
    },
    demandNote: "Slight demand softening in key markets — modifier: −1",
  },
  {
    id: "guatemala",
    name: "Guatemala",
    flag: "🇬🇹",
    tier: "Tier 2 · ~3% Global Volume",
    rating: "NEUTRAL",
    confidence: "LOW",
    direction: "stable",
    score: 1,
    urgency: "No immediate signal — monitor weather window",
    lastUpdated: "26 May 2026",
    nextUpdate: "2 Jun 2026",
    topSignals: [
      "Flowering season Jun–Sep — critical monitoring window",
      "Stable microclimates in Huehuetenango, Antigua",
      "No crop revision from Anacafé",
    ],
    layers: {
      "Structural Priors": {
        status: "neutral",
        signals: [
          { name: "Biennial Cycle", status: "neutral", detail: "Moderate cycle — some on-year tendency", source: "Anacafé / USDA" },
          { name: "ENSO Phase", status: "neutral", detail: "Limited direct ENSO exposure — stable microclimates", source: "NOAA / INSIVUMEH" },
          { name: "Stock-to-Use Ratio", status: "neutral", detail: "Within 5-year average", source: "USDA WASDE" },
          { name: "Origin Supply Share", status: "neutral", detail: "Tier 2 — cup quality premium partially decouples from C", source: "ICO" },
        ],
      },
      "Leading Indicators": {
        status: "neutral",
        signals: [
          { name: "Anacafé Crop Forecast", status: "neutral", detail: "No revision issued — stable estimate", source: "Anacafé" },
          { name: "Weather Alerts", status: "bullish", detail: "Entering critical flowering window Jun–Sep — monitoring active", source: "INSIVUMEH" },
          { name: "ICO Export Certificates", status: "neutral", detail: "Normal seasonal volumes", source: "ICO" },
          { name: "GTQ / USD", status: "neutral", detail: "Stable", source: "Yahoo Finance" },
          { name: "Vietnam Robusta", status: "neutral", detail: "No impact", source: "USDA" },
        ],
      },
      "Confirmation Signals": {
        status: "neutral",
        signals: [
          { name: "C Market Momentum", status: "neutral", detail: "No directional move", source: "ICE / KC=F" },
          { name: "COT Managed Money", status: "neutral", detail: "Stable", source: "CFTC" },
          { name: "COT vs 5-Year Range", status: "neutral", detail: "Mid-range", source: "CFTC historical" },
          { name: "Freight & Fuel", status: "neutral", detail: "Stable", source: "EIA / Freightos" },
          { name: "Trade Sentiment", status: "neutral", detail: "No notable coverage", source: "Manual" },
        ],
      },
    },
    demandNote: "Neutral demand environment — no modifier applied",
  },
  {
    id: "peru",
    name: "Peru",
    flag: "🇵🇪",
    tier: "Tier 2 · ~2% Global Volume",
    rating: "WATCH",
    confidence: "LOW",
    direction: "stable",
    score: 2,
    urgency: "Monitor — Humboldt shift risk building",
    lastUpdated: "26 May 2026",
    nextUpdate: "2 Jun 2026",
    topSignals: [
      "Humboldt current shift — rainfall disruption risk in Junín",
      "Organic/specialty volume adds premium sensitivity",
      "No crop revision from JNC yet",
    ],
    layers: {
      "Structural Priors": {
        status: "neutral",
        signals: [
          { name: "Biennial Cycle", status: "neutral", detail: "Low cycle severity — varietal mix dampens", source: "JNC / USDA" },
          { name: "ENSO Phase", status: "bullish", detail: "Humboldt current shifts create localised disruption risk", source: "NOAA / SENAMHI" },
          { name: "Stock-to-Use Ratio", status: "neutral", detail: "Within 5-year average", source: "USDA WASDE" },
          { name: "Origin Supply Share", status: "neutral", detail: "Tier 2 — organic/specialty premium partially decouples", source: "ICO" },
        ],
      },
      "Leading Indicators": {
        status: "neutral",
        signals: [
          { name: "JNC Crop Forecast", status: "neutral", detail: "No revision — stable estimate", source: "JNC" },
          { name: "Weather Alerts", status: "bullish", detail: "Irregular rainfall patterns in Chanchamayo (Junín)", source: "SENAMHI" },
          { name: "ICO Export Certificates", status: "neutral", detail: "Normal seasonal range", source: "ICO" },
          { name: "PEN / USD", status: "neutral", detail: "Stable", source: "Yahoo Finance" },
          { name: "Vietnam Robusta", status: "neutral", detail: "No impact", source: "USDA" },
        ],
      },
      "Confirmation Signals": {
        status: "neutral",
        signals: [
          { name: "C Market Momentum", status: "neutral", detail: "No directional move", source: "ICE / KC=F" },
          { name: "COT Managed Money", status: "neutral", detail: "Stable", source: "CFTC" },
          { name: "COT vs 5-Year Range", status: "neutral", detail: "Mid-range", source: "CFTC historical" },
          { name: "Freight & Fuel", status: "neutral", detail: "Stable", source: "EIA / Freightos" },
          { name: "Trade Sentiment", status: "neutral", detail: "No notable coverage", source: "Manual" },
        ],
      },
    },
    demandNote: "Neutral demand environment — no modifier applied",
  },
  {
    id: "vietnam",
    name: "Vietnam",
    flag: "🇻🇳",
    tier: "Tier 2 · Robusta Benchmark",
    rating: "NEUTRAL",
    confidence: "LOW",
    direction: "stable",
    score: 0,
    urgency: "Robusta stable — no arabica substitution pressure",
    lastUpdated: "26 May 2026",
    nextUpdate: "2 Jun 2026",
    topSignals: [
      "Average robusta crop — no substitution effect on arabica",
      "El Niño risk in Central Highlands water tables",
      "LIFFE robusta price flat — no indirect C pressure",
    ],
    layers: {
      "Structural Priors": {
        status: "neutral",
        signals: [
          { name: "Biennial Cycle", status: "neutral", detail: "Not applicable to robusta production pattern", source: "USDA / VICOFA" },
          { name: "ENSO Phase", status: "bullish", detail: "El Niño risk — water table depletion in Dak Lak, Lam Dong", source: "NOAA" },
          { name: "Stock-to-Use Ratio", status: "neutral", detail: "Robusta-specific — within average range", source: "USDA WASDE" },
          { name: "Origin Supply Share", status: "neutral", detail: "Robusta benchmark — arabica impact via substitution only", source: "ICO" },
        ],
      },
      "Leading Indicators": {
        status: "neutral",
        signals: [
          { name: "VICOFA Crop Forecast", status: "neutral", detail: "Average crop — no revision", source: "VICOFA" },
          { name: "Weather Alerts", status: "neutral", detail: "Irrigation window Feb–Apr passed without incident", source: "Vietnam Met Service" },
          { name: "ICO Export Certificates", status: "neutral", detail: "Normal robusta export volumes", source: "ICO" },
          { name: "VND / USD", status: "neutral", detail: "Stable", source: "Yahoo Finance" },
          { name: "Arabica Substitution", status: "neutral", detail: "No commercial grade substitution pressure detected", source: "USDA / ICO" },
        ],
      },
      "Confirmation Signals": {
        status: "neutral",
        signals: [
          { name: "LIFFE Robusta Momentum", status: "neutral", detail: "Flat — no directional move", source: "ICE LIFFE" },
          { name: "COT Managed Money", status: "neutral", detail: "Stable robusta positioning", source: "CFTC" },
          { name: "COT vs 5-Year Range", status: "neutral", detail: "Mid-range", source: "CFTC historical" },
          { name: "Freight & Fuel", status: "neutral", detail: "Stable", source: "EIA / Freightos" },
          { name: "Trade Sentiment", status: "neutral", detail: "No notable coverage", source: "Manual" },
        ],
      },
    },
    demandNote: "Neutral demand environment — no modifier applied",
  },

  // ─── TIER 3 ───────────────────────────────────────────────────────────────
  {
    id: "kenya",
    name: "Kenya",
    flag: "🇰🇪",
    tier: "Tier 3 · Specialty Only",
    rating: "WATCH",
    confidence: "LOW",
    direction: "stable",
    score: 1,
    urgency: "Monitor auction premiums — C link is weak",
    lastUpdated: "26 May 2026",
    nextUpdate: "2 Jun 2026",
    topSignals: [
      "Nairobi auction premiums elevated vs prior season",
      "Primary bloom Mar–May — conditions monitored",
      "Limited direct C Market linkage — auction-driven",
    ],
    layers: {
      "Structural Priors": {
        status: "neutral",
        signals: [
          { name: "Biennial Cycle", status: "neutral", detail: "Low severity — varietal and auction structure dampens", source: "Coffee Board of Kenya" },
          { name: "ENSO Phase", status: "neutral", detail: "Mostly isolated regional rainfall — low ENSO sensitivity", source: "NOAA / Kenya Met" },
          { name: "Stock-to-Use Ratio", status: "neutral", detail: "Within normal range", source: "USDA WASDE" },
          { name: "Origin Supply Share", status: "neutral", detail: "Tier 3 — governed almost entirely by auction premiums", source: "ICO" },
        ],
      },
      "Leading Indicators": {
        status: "neutral",
        signals: [
          { name: "Coffee Board Forecast", status: "neutral", detail: "No revision — stable season estimate", source: "Coffee Board of Kenya" },
          { name: "Weather Alerts", status: "neutral", detail: "Normal conditions across Nyeri, Kirinyaga, Mt. Kenya", source: "Kenya Met Dept" },
          { name: "ICO Export Certificates", status: "neutral", detail: "Normal seasonal volumes", source: "ICO" },
          { name: "KES / USD", status: "neutral", detail: "Stable", source: "Yahoo Finance" },
          { name: "Nairobi Auction Premium", status: "bullish", detail: "AA grade premiums elevated vs prior 3 seasons", source: "Nairobi Coffee Exchange" },
        ],
      },
      "Confirmation Signals": {
        status: "neutral",
        signals: [
          { name: "C Market Momentum", status: "neutral", detail: "Minimal direct link — premium-driven pricing", source: "ICE / KC=F" },
          { name: "COT Managed Money", status: "neutral", detail: "No Kenya-specific speculator signal", source: "CFTC" },
          { name: "COT vs 5-Year Range", status: "neutral", detail: "Mid-range", source: "CFTC historical" },
          { name: "Freight & Fuel", status: "neutral", detail: "Mombasa port — stable", source: "EIA / Freightos" },
          { name: "Trade Sentiment", status: "neutral", detail: "Specialty press positive on Kenya AA quality this season", source: "Manual" },
        ],
      },
    },
    demandNote: "Neutral demand environment — no modifier applied",
  },
  {
    id: "panama",
    name: "Panama",
    flag: "🇵🇦",
    tier: "Tier 3 · Ultra-Specialty",
    rating: "NEUTRAL",
    confidence: "LOW",
    direction: "stable",
    score: 0,
    urgency: "Geisha auction season approaching — monitor premiums",
    lastUpdated: "26 May 2026",
    nextUpdate: "2 Jun 2026",
    topSignals: [
      "Best of Panama auction season upcoming",
      "Geisha pricing fully decoupled from C Market",
      "Low volume — no meaningful C price impact",
    ],
    layers: {
      "Structural Priors": {
        status: "neutral",
        signals: [
          { name: "Biennial Cycle", status: "neutral", detail: "Not meaningfully applicable — micro-lot production", source: "SCA / SCAP" },
          { name: "ENSO Phase", status: "neutral", detail: "Chiriquí highlands — limited ENSO sensitivity", source: "NOAA" },
          { name: "Stock-to-Use Ratio", status: "neutral", detail: "Negligible volume — no C market relevance", source: "USDA WASDE" },
          { name: "Origin Supply Share", status: "neutral", detail: "Ultra-specialty — fully premium-decoupled", source: "ICO" },
        ],
      },
      "Leading Indicators": {
        status: "neutral",
        signals: [
          { name: "SCAP Forecast", status: "neutral", detail: "Normal season — no disruption flagged", source: "SCAP" },
          { name: "Weather Alerts", status: "neutral", detail: "Stable conditions in Boquete, Volcán", source: "ETESA Panama" },
          { name: "ICO Export Certificates", status: "neutral", detail: "Negligible volume", source: "ICO" },
          { name: "PAB / USD", status: "neutral", detail: "Pegged to USD — no FX risk", source: "N/A" },
          { name: "Auction Premium Trend", status: "neutral", detail: "Best of Panama results due — watch for Geisha pricing", source: "SCAP" },
        ],
      },
      "Confirmation Signals": {
        status: "neutral",
        signals: [
          { name: "C Market Momentum", status: "neutral", detail: "No linkage — fully decoupled", source: "ICE / KC=F" },
          { name: "COT Managed Money", status: "neutral", detail: "Not applicable at this volume", source: "CFTC" },
          { name: "COT vs 5-Year Range", status: "neutral", detail: "Not applicable", source: "CFTC historical" },
          { name: "Freight & Fuel", status: "neutral", detail: "Stable", source: "EIA / Freightos" },
          { name: "Trade Sentiment", status: "neutral", detail: "Specialty press tracking Best of Panama closely", source: "Manual" },
        ],
      },
    },
    demandNote: "High-end demand robust — no negative modifier",
  },
  {
    id: "yemen",
    name: "Yemen",
    flag: "🇾🇪",
    tier: "Tier 3 · Specialty / High Risk",
    rating: "WATCH",
    confidence: "LOW",
    direction: "deteriorating",
    score: 3,
    urgency: "Geopolitical & logistics risk elevated — monitor availability",
    lastUpdated: "26 May 2026",
    nextUpdate: "2 Jun 2026",
    topSignals: [
      "Ongoing conflict — export logistics severely disrupted",
      "Availability risk dominates over crop signal",
      "Mocha / Yemeni lots commanding extreme premiums",
    ],
    layers: {
      "Structural Priors": {
        status: "bullish",
        signals: [
          { name: "Biennial Cycle", status: "neutral", detail: "Low applicability — conflict dominates all signals", source: "USDA" },
          { name: "ENSO Phase", status: "neutral", detail: "Arid highland climate — limited ENSO sensitivity", source: "NOAA" },
          { name: "Stock-to-Use Ratio", status: "bullish", detail: "Extremely tight — conflict restricts export flow", source: "USDA WASDE" },
          { name: "Origin Supply Share", status: "bullish", detail: "Tier 3 but inelastic — no substitute for Yemeni character", source: "ICO" },
        ],
      },
      "Leading Indicators": {
        status: "bullish",
        signals: [
          { name: "Crop Forecast", status: "neutral", detail: "Minimal data available — conflict limits reporting", source: "USDA / NGO reports" },
          { name: "Weather Alerts", status: "neutral", detail: "Normal seasonal conditions where monitored", source: "Regional monitoring" },
          { name: "ICO Export Certificates", status: "bullish", detail: "Volumes significantly below pre-conflict levels", source: "ICO" },
          { name: "YER / USD", status: "neutral", detail: "Highly distorted — not a reliable signal", source: "N/A" },
          { name: "Logistics Risk", status: "bullish", detail: "Port access and export routes severely disrupted", source: "Freight / NGO" },
        ],
      },
      "Confirmation Signals": {
        status: "neutral",
        signals: [
          { name: "C Market Momentum", status: "neutral", detail: "Negligible direct link — premium-only market", source: "ICE / KC=F" },
          { name: "COT Managed Money", status: "neutral", detail: "Not applicable", source: "CFTC" },
          { name: "COT vs 5-Year Range", status: "neutral", detail: "Not applicable", source: "CFTC historical" },
          { name: "Freight & Fuel", status: "bullish", detail: "Red Sea disruption adding to already-elevated logistics costs", source: "Freightos" },
          { name: "Trade Sentiment", status: "bullish", detail: "Specialty press flagging availability concerns", source: "Manual" },
        ],
      },
    },
    demandNote: "Inelastic specialty demand — no negative modifier",
  },
  {
    id: "indonesia",
    name: "Indonesia",
    flag: "🇮🇩",
    tier: "Tier 3 · Specialty / Robusta Mix",
    rating: "NEUTRAL",
    confidence: "LOW",
    direction: "stable",
    score: 0,
    urgency: "No signal — Sumatra availability stable",
    lastUpdated: "26 May 2026",
    nextUpdate: "2 Jun 2026",
    topSignals: [
      "Sumatra wet-hulled arabica — normal season",
      "Mixed arabica/robusta — limited C Market linkage",
      "No disruption to Sulawesi or Flores volumes",
    ],
    layers: {
      "Structural Priors": {
        status: "neutral",
        signals: [
          { name: "Biennial Cycle", status: "neutral", detail: "Low applicability — continuous harvest pattern", source: "USDA" },
          { name: "ENSO Phase", status: "neutral", detail: "El Niño can affect Sumatra — currently neutral", source: "NOAA" },
          { name: "Stock-to-Use Ratio", status: "neutral", detail: "Within normal range", source: "USDA WASDE" },
          { name: "Origin Supply Share", status: "neutral", detail: "Tier 3 arabica — Sumatra specialty premium-driven", source: "ICO" },
        ],
      },
      "Leading Indicators": {
        status: "neutral",
        signals: [
          { name: "AEKI Crop Forecast", status: "neutral", detail: "Stable estimate — no revision", source: "AEKI" },
          { name: "Weather Alerts", status: "neutral", detail: "Normal conditions across North Sumatra, Aceh", source: "BMKG Indonesia" },
          { name: "ICO Export Certificates", status: "neutral", detail: "Normal seasonal volumes", source: "ICO" },
          { name: "IDR / USD", status: "neutral", detail: "Slightly weak IDR — no significant trend", source: "Yahoo Finance" },
          { name: "Vietnam Robusta", status: "neutral", detail: "No notable substitution dynamic", source: "USDA" },
        ],
      },
      "Confirmation Signals": {
        status: "neutral",
        signals: [
          { name: "C Market Momentum", status: "neutral", detail: "Limited direct link — wet-hulled premium-driven", source: "ICE / KC=F" },
          { name: "COT Managed Money", status: "neutral", detail: "No Indonesia-specific signal", source: "CFTC" },
          { name: "COT vs 5-Year Range", status: "neutral", detail: "Mid-range", source: "CFTC historical" },
          { name: "Freight & Fuel", status: "neutral", detail: "Stable from Indonesian ports", source: "EIA / Freightos" },
          { name: "Trade Sentiment", status: "neutral", detail: "No notable coverage", source: "Manual" },
        ],
      },
    },
    demandNote: "Neutral demand environment — no modifier applied",
  },
  {
    id: "mexico",
    name: "Mexico",
    flag: "🇲🇽",
    tier: "Tier 3 · ~1.5% Global Volume",
    rating: "NEUTRAL",
    confidence: "LOW",
    direction: "stable",
    score: 0,
    urgency: "No signal — monitor Chiapas harvest conditions",
    lastUpdated: "26 May 2026",
    nextUpdate: "2 Jun 2026",
    topSignals: [
      "Chiapas main harvest complete — normal season",
      "Organic and Fair Trade certification adds premium",
      "No revision from AMECAFÉ",
    ],
    layers: {
      "Structural Priors": {
        status: "neutral",
        signals: [
          { name: "Biennial Cycle", status: "neutral", detail: "Moderate cycle — partially offset by varietal diversity", source: "AMECAFÉ / USDA" },
          { name: "ENSO Phase", status: "neutral", detail: "Some rainfall variability in Chiapas under La Niña — manageable", source: "NOAA / SMN Mexico" },
          { name: "Stock-to-Use Ratio", status: "neutral", detail: "Within 5-year average", source: "USDA WASDE" },
          { name: "Origin Supply Share", status: "neutral", detail: "Tier 3 — organic premium partially decouples", source: "ICO" },
        ],
      },
      "Leading Indicators": {
        status: "neutral",
        signals: [
          { name: "AMECAFÉ Forecast", status: "neutral", detail: "No revision — stable season", source: "AMECAFÉ" },
          { name: "Weather Alerts", status: "neutral", detail: "Normal conditions in Chiapas, Veracruz, Oaxaca", source: "SMN Mexico" },
          { name: "ICO Export Certificates", status: "neutral", detail: "Normal seasonal volumes", source: "ICO" },
          { name: "MXN / USD", status: "neutral", detail: "Stable", source: "Yahoo Finance" },
          { name: "Vietnam Robusta", status: "neutral", detail: "No impact", source: "USDA" },
        ],
      },
      "Confirmation Signals": {
        status: "neutral",
        signals: [
          { name: "C Market Momentum", status: "neutral", detail: "Tracks C — no independent signal", source: "ICE / KC=F" },
          { name: "COT Managed Money", status: "neutral", detail: "Stable", source: "CFTC" },
          { name: "COT vs 5-Year Range", status: "neutral", detail: "Mid-range", source: "CFTC historical" },
          { name: "Freight & Fuel", status: "neutral", detail: "Stable from Veracruz port", source: "EIA / Freightos" },
          { name: "Trade Sentiment", status: "neutral", detail: "No notable coverage", source: "Manual" },
        ],
      },
    },
    demandNote: "Neutral demand environment — no modifier applied",
  },
  {
    id: "nicaragua",
    name: "Nicaragua",
    flag: "🇳🇮",
    tier: "Tier 3 · ~1% Global Volume",
    rating: "NEUTRAL",
    confidence: "LOW",
    direction: "stable",
    score: 0,
    urgency: "No signal — normal harvest conditions",
    lastUpdated: "26 May 2026",
    nextUpdate: "2 Jun 2026",
    topSignals: [
      "Normal harvest season — no major disruption",
      "Jinotega and Matagalpa conditions stable",
      "No crop revision from CONACAFE",
    ],
    layers: {
      "Structural Priors": {
        status: "neutral",
        signals: [
          { name: "Biennial Cycle", status: "neutral", detail: "Moderate cycle — limited historical data", source: "CONACAFE / USDA" },
          { name: "ENSO Phase", status: "neutral", detail: "Some La Niña rainfall risk — within manageable range", source: "NOAA / INETER" },
          { name: "Stock-to-Use Ratio", status: "neutral", detail: "Within normal range", source: "USDA WASDE" },
          { name: "Origin Supply Share", status: "neutral", detail: "Tier 3 — limited C price influence", source: "ICO" },
        ],
      },
      "Leading Indicators": {
        status: "neutral",
        signals: [
          { name: "CONACAFE Forecast", status: "neutral", detail: "No revision — stable", source: "CONACAFE" },
          { name: "Weather Alerts", status: "neutral", detail: "Normal conditions in Jinotega, Matagalpa", source: "INETER" },
          { name: "ICO Export Certificates", status: "neutral", detail: "Normal range", source: "ICO" },
          { name: "NIO / USD", status: "neutral", detail: "Stable", source: "Yahoo Finance" },
          { name: "Vietnam Robusta", status: "neutral", detail: "No impact", source: "USDA" },
        ],
      },
      "Confirmation Signals": {
        status: "neutral",
        signals: [
          { name: "C Market Momentum", status: "neutral", detail: "Tracks C — no independent signal", source: "ICE / KC=F" },
          { name: "COT Managed Money", status: "neutral", detail: "Stable", source: "CFTC" },
          { name: "COT vs 5-Year Range", status: "neutral", detail: "Mid-range", source: "CFTC historical" },
          { name: "Freight & Fuel", status: "neutral", detail: "Stable", source: "EIA / Freightos" },
          { name: "Trade Sentiment", status: "neutral", detail: "No notable coverage", source: "Manual" },
        ],
      },
    },
    demandNote: "Neutral demand environment — no modifier applied",
  },
  {
    id: "costa-rica",
    name: "Costa Rica",
    flag: "🇨🇷",
    tier: "Tier 3 · ~0.5% Global Volume",
    rating: "NEUTRAL",
    confidence: "LOW",
    direction: "stable",
    score: 0,
    urgency: "No signal — premium micro-lot season normal",
    lastUpdated: "26 May 2026",
    nextUpdate: "2 Jun 2026",
    topSignals: [
      "Honey and natural process lots — normal availability",
      "Tarrazú and Naranjo conditions stable",
      "Premium decoupled from C — auction-driven",
    ],
    layers: {
      "Structural Priors": {
        status: "neutral",
        signals: [
          { name: "Biennial Cycle", status: "neutral", detail: "Low applicability — continuous selective harvest", source: "ICAFE / USDA" },
          { name: "ENSO Phase", status: "neutral", detail: "Some La Niña rainfall variation — within normal range", source: "NOAA / IMN" },
          { name: "Stock-to-Use Ratio", status: "neutral", detail: "Negligible volume impact on global ratio", source: "USDA WASDE" },
          { name: "Origin Supply Share", status: "neutral", detail: "Tier 3 — premium fully decoupled from C", source: "ICO" },
        ],
      },
      "Leading Indicators": {
        status: "neutral",
        signals: [
          { name: "ICAFE Forecast", status: "neutral", detail: "No revision — stable", source: "ICAFE" },
          { name: "Weather Alerts", status: "neutral", detail: "Normal conditions in Tarrazú, Naranjo, Tres Ríos", source: "IMN Costa Rica" },
          { name: "ICO Export Certificates", status: "neutral", detail: "Normal volumes", source: "ICO" },
          { name: "CRC / USD", status: "neutral", detail: "Stable", source: "Yahoo Finance" },
          { name: "Vietnam Robusta", status: "neutral", detail: "No impact", source: "USDA" },
        ],
      },
      "Confirmation Signals": {
        status: "neutral",
        signals: [
          { name: "C Market Momentum", status: "neutral", detail: "Minimal link — premium-driven", source: "ICE / KC=F" },
          { name: "COT Managed Money", status: "neutral", detail: "Not applicable at this volume", source: "CFTC" },
          { name: "COT vs 5-Year Range", status: "neutral", detail: "Not applicable", source: "CFTC historical" },
          { name: "Freight & Fuel", status: "neutral", detail: "Stable", source: "EIA / Freightos" },
          { name: "Trade Sentiment", status: "neutral", detail: "No notable coverage", source: "Manual" },
        ],
      },
    },
    demandNote: "Neutral demand environment — no modifier applied",
  },
  {
    id: "el-salvador",
    name: "El Salvador",
    flag: "🇸🇻",
    tier: "Tier 3 · Bourbon Specialty",
    rating: "NEUTRAL",
    confidence: "LOW",
    direction: "stable",
    score: 0,
    urgency: "No signal — Pacamara and Bourbon lots stable",
    lastUpdated: "26 May 2026",
    nextUpdate: "2 Jun 2026",
    topSignals: [
      "Pacamara and Bourbon varieties — normal season",
      "Apaneca-Ilamatepec conditions stable",
      "No crop revision from CSC",
    ],
    layers: {
      "Structural Priors": {
        status: "neutral",
        signals: [
          { name: "Biennial Cycle", status: "neutral", detail: "Low volume — limited cycle data", source: "CSC / USDA" },
          { name: "ENSO Phase", status: "neutral", detail: "Limited ENSO sensitivity in Santa Ana highlands", source: "NOAA / SNET" },
          { name: "Stock-to-Use Ratio", status: "neutral", detail: "Negligible volume", source: "USDA WASDE" },
          { name: "Origin Supply Share", status: "neutral", detail: "Tier 3 — Bourbon/Pacamara premium-driven", source: "ICO" },
        ],
      },
      "Leading Indicators": {
        status: "neutral",
        signals: [
          { name: "CSC Forecast", status: "neutral", detail: "No revision", source: "CSC" },
          { name: "Weather Alerts", status: "neutral", detail: "Normal conditions in Apaneca-Ilamatepec", source: "SNET El Salvador" },
          { name: "ICO Export Certificates", status: "neutral", detail: "Normal range", source: "ICO" },
          { name: "USD (dollarised)", status: "neutral", detail: "No FX risk — dollarised economy", source: "N/A" },
          { name: "Vietnam Robusta", status: "neutral", detail: "No impact", source: "USDA" },
        ],
      },
      "Confirmation Signals": {
        status: "neutral",
        signals: [
          { name: "C Market Momentum", status: "neutral", detail: "Some C linkage at commodity grades", source: "ICE / KC=F" },
          { name: "COT Managed Money", status: "neutral", detail: "Not applicable", source: "CFTC" },
          { name: "COT vs 5-Year Range", status: "neutral", detail: "Not applicable", source: "CFTC historical" },
          { name: "Freight & Fuel", status: "neutral", detail: "Stable", source: "EIA / Freightos" },
          { name: "Trade Sentiment", status: "neutral", detail: "No notable coverage", source: "Manual" },
        ],
      },
    },
    demandNote: "Neutral demand environment — no modifier applied",
  },
  {
    id: "uganda",
    name: "Uganda",
    flag: "🇺🇬",
    tier: "Tier 3 · Robusta + Arabica Mix",
    rating: "NEUTRAL",
    confidence: "LOW",
    direction: "stable",
    score: 0,
    urgency: "No signal — Bugisu arabica season stable",
    lastUpdated: "26 May 2026",
    nextUpdate: "2 Jun 2026",
    topSignals: [
      "Mt. Elgon / Bugisu arabica — normal harvest",
      "Primarily robusta producer — arabica is small share",
      "UCDA reporting stable export volumes",
    ],
    layers: {
      "Structural Priors": {
        status: "neutral",
        signals: [
          { name: "Biennial Cycle", status: "neutral", detail: "Low applicability — bimodal rainfall enables 2 harvests", source: "UCDA / USDA" },
          { name: "ENSO Phase", status: "neutral", detail: "Some La Niña rainfall risk — within manageable range", source: "NOAA" },
          { name: "Stock-to-Use Ratio", status: "neutral", detail: "Within normal range", source: "USDA WASDE" },
          { name: "Origin Supply Share", status: "neutral", detail: "Arabica is small share — robusta dominant", source: "ICO" },
        ],
      },
      "Leading Indicators": {
        status: "neutral",
        signals: [
          { name: "UCDA Forecast", status: "neutral", detail: "No revision — stable", source: "UCDA" },
          { name: "Weather Alerts", status: "neutral", detail: "Normal conditions on Mt. Elgon slopes", source: "Uganda Met Authority" },
          { name: "ICO Export Certificates", status: "neutral", detail: "Normal range", source: "ICO" },
          { name: "UGX / USD", status: "neutral", detail: "Stable", source: "Yahoo Finance" },
          { name: "Vietnam Robusta", status: "neutral", detail: "Competing robusta source — monitor", source: "USDA" },
        ],
      },
      "Confirmation Signals": {
        status: "neutral",
        signals: [
          { name: "C Market Momentum", status: "neutral", detail: "Limited arabica link — robusta dominant", source: "ICE / KC=F" },
          { name: "COT Managed Money", status: "neutral", detail: "Not applicable at arabica volume", source: "CFTC" },
          { name: "COT vs 5-Year Range", status: "neutral", detail: "Not applicable", source: "CFTC historical" },
          { name: "Freight & Fuel", status: "neutral", detail: "Landlocked — Mombasa port logistics", source: "EIA / Freightos" },
          { name: "Trade Sentiment", status: "neutral", detail: "No notable coverage", source: "Manual" },
        ],
      },
    },
    demandNote: "Neutral demand environment — no modifier applied",
  },
  {
    id: "tanzania",
    name: "Tanzania",
    flag: "🇹🇿",
    tier: "Tier 3 · Specialty Arabica",
    rating: "NEUTRAL",
    confidence: "LOW",
    direction: "stable",
    score: 0,
    urgency: "No signal — Kilimanjaro and Arusha season normal",
    lastUpdated: "26 May 2026",
    nextUpdate: "2 Jun 2026",
    topSignals: [
      "Kilimanjaro and Arusha conditions normal",
      "Bourbon and Kent varieties — stable availability",
      "TCB auction premiums within normal range",
    ],
    layers: {
      "Structural Priors": {
        status: "neutral",
        signals: [
          { name: "Biennial Cycle", status: "neutral", detail: "Low applicability", source: "TCB / USDA" },
          { name: "ENSO Phase", status: "neutral", detail: "Some regional rainfall variation — within range", source: "NOAA / TMA" },
          { name: "Stock-to-Use Ratio", status: "neutral", detail: "Within normal range", source: "USDA WASDE" },
          { name: "Origin Supply Share", status: "neutral", detail: "Tier 3 — auction premium driven", source: "ICO" },
        ],
      },
      "Leading Indicators": {
        status: "neutral",
        signals: [
          { name: "TCB Forecast", status: "neutral", detail: "No revision — stable", source: "Tanzania Coffee Board" },
          { name: "Weather Alerts", status: "neutral", detail: "Normal conditions on Kilimanjaro slopes, Arusha", source: "TMA" },
          { name: "ICO Export Certificates", status: "neutral", detail: "Normal seasonal volumes", source: "ICO" },
          { name: "TZS / USD", status: "neutral", detail: "Stable", source: "Yahoo Finance" },
          { name: "Vietnam Robusta", status: "neutral", detail: "No impact", source: "USDA" },
        ],
      },
      "Confirmation Signals": {
        status: "neutral",
        signals: [
          { name: "C Market Momentum", status: "neutral", detail: "Some C linkage at lower grades", source: "ICE / KC=F" },
          { name: "COT Managed Money", status: "neutral", detail: "Not applicable", source: "CFTC" },
          { name: "COT vs 5-Year Range", status: "neutral", detail: "Not applicable", source: "CFTC historical" },
          { name: "Freight & Fuel", status: "neutral", detail: "Stable from Dar es Salaam", source: "EIA / Freightos" },
          { name: "Trade Sentiment", status: "neutral", detail: "No notable coverage", source: "Manual" },
        ],
      },
    },
    demandNote: "Neutral demand environment — no modifier applied",
  },
];

const RATINGS = {
  "STRONG BUY": { color: "#4ade80", glow: "#4ade8066", label: "STRONG BUY", bg: "#4ade8012" },
  "BUY":        { color: "#86efac", glow: "#86efac55", label: "BUY",         bg: "#86efac10" },
  "WATCH":      { color: "#fcd34d", glow: "#fcd34d55", label: "WATCH",       bg: "#fcd34d10" },
  "NEUTRAL":    { color: "#94a3b8", glow: "#94a3b833", label: "NEUTRAL",     bg: "#94a3b808" },
  "WAIT":       { color: "#f87171", glow: "#f8717155", label: "WAIT",        bg: "#f8717110" },
  "STRONG WAIT":{ color: "#ef4444", glow: "#ef444466", label: "STRONG WAIT", bg: "#ef444412" },
};

const DIR = {
  improving:    { icon: "↑", color: "#4ade80" },
  stable:       { icon: "→", color: "#94a3b8" },
  deteriorating:{ icon: "↓", color: "#f87171" },
};

const SIG = {
  bullish: { dot: "#4ade80", bg: "#4ade8010" },
  bearish: { dot: "#f87171", bg: "#f8717108" },
  neutral: { dot: "#334155", bg: "transparent" },
};

function LayerPill({ status }) {
  const c = SIG[status];
  return (
    <span style={{ display:"inline-flex", alignItems:"center", gap:4, fontSize:9, fontFamily:"'IBM Plex Mono',monospace", letterSpacing:1, color: c.dot, background: c.bg, border:`1px solid ${c.dot}44`, borderRadius:3, padding:"2px 7px" }}>
      <span style={{ width:5, height:5, borderRadius:"50%", background:c.dot, display:"inline-block" }} />
      {status.toUpperCase()}
    </span>
  );
}

function SignalRow({ s }) {
  const c = SIG[s.status];
  const active = s.status !== "neutral";
  return (
    <div style={{ display:"flex", gap:10, padding:"8px 10px", background: active ? c.bg : "transparent", borderLeft:`2px solid ${active ? c.dot : "#1e293b"}`, borderRadius:"0 6px 6px 0", opacity: active ? 1 : 0.45 }}>
      <div style={{ width:6, height:6, borderRadius:"50%", background:c.dot, marginTop:5, flexShrink:0 }} />
      <div style={{ flex:1 }}>
        <div style={{ display:"flex", justifyContent:"space-between", gap:8 }}>
          <span style={{ fontSize:11, fontWeight:600, color:"#cbd5e1", fontFamily:"'IBM Plex Mono',monospace" }}>{s.name}</span>
          <span style={{ fontSize:9, color:"#475569", fontFamily:"'IBM Plex Mono',monospace", flexShrink:0 }}>{s.source}</span>
        </div>
        <div style={{ fontSize:10, color:"#64748b", marginTop:2, lineHeight:1.5 }}>{s.detail}</div>
      </div>
    </div>
  );
}

function OriginCard({ o }) {
  const [open, setOpen] = useState(false);
  const [activeLayer, setActiveLayer] = useState(0);
  const cfg = RATINGS[o.rating] || RATINGS["NEUTRAL"];
  const dir = DIR[o.direction];
  const layers = Object.entries(o.layers);
  const pct = ((o.score + 10) / 20) * 100;

  return (
    <div style={{ background:"#0f172a", border:`1px solid ${open ? cfg.color+"55" : "#1e293b"}`, borderRadius:16, overflow:"hidden", transition:"border-color 0.3s", boxShadow: open ? `0 0 32px ${cfg.glow}` : "none" }}>
      <div onClick={() => setOpen(!open)} style={{ padding:"20px 22px", cursor:"pointer", userSelect:"none" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <span style={{ fontSize:28 }}>{o.flag}</span>
            <div>
              <div style={{ fontSize:20, fontWeight:700, color:"#f1f5f9", fontFamily:"'Libre Baskerville',serif", letterSpacing:0.3 }}>{o.name}</div>
              <div style={{ fontSize:10, color:"#475569", fontFamily:"'IBM Plex Mono',monospace", marginTop:2 }}>{o.tier}</div>
            </div>
          </div>
          <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:6 }}>
            <div style={{ fontSize:14, fontWeight:800, color:cfg.color, fontFamily:"'IBM Plex Mono',monospace", letterSpacing:2, background:cfg.bg, border:`1px solid ${cfg.color}44`, padding:"4px 10px", borderRadius:5 }}>{cfg.label}</div>
            <div style={{ display:"flex", gap:8, alignItems:"center" }}>
              <span style={{ fontSize:10, color:"#475569", fontFamily:"'IBM Plex Mono',monospace" }}>{o.confidence} CONF.</span>
              <span style={{ fontSize:12, color:dir.color, fontFamily:"'IBM Plex Mono',monospace" }}>{dir.icon} {o.direction.toUpperCase()}</span>
            </div>
          </div>
        </div>

        <div style={{ margin:"16px 0 12px" }}>
          <div style={{ height:3, background:"#1e293b", borderRadius:2, position:"relative" }}>
            <div style={{ position:"absolute", left:"50%", top:-2, bottom:-2, width:1, background:"#334155" }} />
            <div style={{ position:"absolute", left:`${Math.max(2, Math.min(98, pct))}%`, top:"50%", transform:"translate(-50%,-50%)", width:10, height:10, borderRadius:"50%", background:cfg.color, boxShadow:`0 0 8px ${cfg.glow}`, transition:"left 0.4s" }} />
          </div>
          <div style={{ display:"flex", justifyContent:"space-between", marginTop:5, fontSize:9, color:"#334155", fontFamily:"'IBM Plex Mono',monospace" }}>
            <span>STRONG WAIT</span><span>NEUTRAL</span><span>STRONG BUY</span>
          </div>
        </div>

        <div style={{ display:"flex", flexDirection:"column", gap:4, marginBottom:14 }}>
          {o.topSignals.map((s, i) => (
            <div key={i} style={{ display:"flex", gap:7, alignItems:"flex-start" }}>
              <span style={{ color:cfg.color, fontSize:9, marginTop:2, flexShrink:0 }}>▸</span>
              <span style={{ fontSize:11, color:"#94a3b8", lineHeight:1.4 }}>{s}</span>
            </div>
          ))}
        </div>

        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div style={{ fontSize:10, color:cfg.color, fontFamily:"'IBM Plex Mono',monospace", background:cfg.bg, border:`1px solid ${cfg.color}33`, borderRadius:4, padding:"4px 10px" }}>
            ⚡ {o.urgency}
          </div>
          <div style={{ fontSize:10, color:"#475569", fontFamily:"'IBM Plex Mono',monospace" }}>
            {open ? "COLLAPSE ↑" : "SIGNALS ↓"}
          </div>
        </div>
      </div>

      {open && (
        <div style={{ borderTop:"1px solid #1e293b", padding:"20px 22px" }}>
          <div style={{ display:"flex", gap:6, marginBottom:16 }}>
            {layers.map(([name, layer], i) => (
              <button key={i} onClick={() => setActiveLayer(i)} style={{
                flex:1, padding:"8px 4px", border:`1px solid ${activeLayer===i ? "#334155" : "#1e293b"}`,
                borderRadius:7, background: activeLayer===i ? "#1e293b" : "transparent",
                cursor:"pointer", textAlign:"center"
              }}>
                <div style={{ fontSize:9, fontWeight:700, color: activeLayer===i ? "#f1f5f9" : "#475569", fontFamily:"'IBM Plex Mono',monospace", letterSpacing:1 }}>L{i+1}</div>
                <div style={{ fontSize:8, color: activeLayer===i ? "#64748b" : "#334155", marginTop:2, lineHeight:1.3 }}>{name.split(" ")[0]}</div>
                <div style={{ marginTop:5 }}><LayerPill status={layer.status} /></div>
              </button>
            ))}
          </div>

          <div style={{ fontSize:10, color:"#475569", fontFamily:"'IBM Plex Mono',monospace", letterSpacing:1, marginBottom:10 }}>
            {layers[activeLayer][0].toUpperCase()}
          </div>

          <div style={{ display:"flex", flexDirection:"column", gap:5 }}>
            {layers[activeLayer][1].signals.map((s, i) => <SignalRow key={i} s={s} />)}
          </div>

          <div style={{ marginTop:16, paddingTop:14, borderTop:"1px solid #1e293b", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:8 }}>
            <div style={{ fontSize:10, color:"#475569", fontFamily:"'IBM Plex Mono',monospace" }}>
              DEMAND: {o.demandNote}
            </div>
            <div style={{ fontSize:10, color:"#334155", fontFamily:"'IBM Plex Mono',monospace", textAlign:"right" }}>
              Updated {o.lastUpdated} · Next {o.nextUpdate}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [filter, setFilter] = useState("ALL");
  const [tierFilter, setTierFilter] = useState("ALL");
  const filters = ["ALL", "BUY", "WATCH", "NEUTRAL", "WAIT"];
  const tiers = ["ALL", "Tier 1", "Tier 2", "Tier 3"];

  const filtered = origins.filter(o => {
    const ratingMatch = filter === "ALL" ? true :
      filter === "BUY" ? ["BUY","STRONG BUY"].includes(o.rating) :
      filter === "WAIT" ? ["WAIT","STRONG WAIT"].includes(o.rating) :
      o.rating === filter;
    const tierMatch = tierFilter === "ALL" ? true : o.tier.startsWith(tierFilter);
    return ratingMatch && tierMatch;
  });

  const buyCount = origins.filter(o => ["BUY","STRONG BUY"].includes(o.rating)).length;
  const waitCount = origins.filter(o => ["WAIT","STRONG WAIT"].includes(o.rating)).length;
  const watchCount = origins.filter(o => o.rating === "WATCH").length;

  return (
    <div style={{ minHeight:"100vh", background:"#080e1a", color:"#f1f5f9", fontFamily:"'DM Sans',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=IBM+Plex+Mono:wght@400;600&family=DM+Sans:wght@400;500;600&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }
        button { cursor:pointer; }
        ::-webkit-scrollbar { width:3px; }
        ::-webkit-scrollbar-thumb { background:#1e293b; border-radius:2px; }
      `}</style>

      {/* Header */}
      <div style={{ borderBottom:"1px solid #1e293b", padding:"18px 28px", display:"flex", justifyContent:"space-between", alignItems:"center", position:"sticky", top:0, background:"#080e1aee", backdropFilter:"blur(12px)", zIndex:10 }}>
        <div>
          <div style={{ fontSize:18, fontWeight:700, fontFamily:"'Libre Baskerville',serif", color:"#f1f5f9", letterSpacing:0.5 }}>
            Green Coffee Signal
          </div>
          <div style={{ fontSize:9, color:"#334155", fontFamily:"'IBM Plex Mono',monospace", letterSpacing:2, marginTop:2 }}>
            WEEKLY MARKET INTELLIGENCE · ARABICA ORIGINS
          </div>
        </div>
        <div style={{ display:"flex", gap:6, alignItems:"center" }}>
          <div style={{ width:6, height:6, borderRadius:"50%", background:"#4ade80", boxShadow:"0 0 8px #4ade80" }} />
          <span style={{ fontSize:10, color:"#475569", fontFamily:"'IBM Plex Mono',monospace" }}>26 MAY 2026</span>
        </div>
      </div>

      {/* Summary bar */}
      <div style={{ padding:"16px 28px", borderBottom:"1px solid #1e293b", display:"flex", gap:24, flexWrap:"wrap" }}>
        {[
          { label:"ACT NOW", count:buyCount, color:"#4ade80" },
          { label:"MONITOR", count:watchCount, color:"#fcd34d" },
          { label:"HOLD OFF", count:waitCount, color:"#f87171" },
          { label:"ORIGINS TRACKED", count:origins.length, color:"#475569" },
        ].map((s,i) => (
          <div key={i} style={{ display:"flex", alignItems:"baseline", gap:8 }}>
            <span style={{ fontSize:22, fontWeight:700, fontFamily:"'Libre Baskerville',serif", color:s.color }}>{s.count}</span>
            <span style={{ fontSize:9, color:"#475569", fontFamily:"'IBM Plex Mono',monospace", letterSpacing:1 }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ padding:"14px 28px", borderBottom:"1px solid #1e293b", display:"flex", gap:12, flexWrap:"wrap", alignItems:"center" }}>
        <div style={{ display:"flex", gap:6 }}>
          {filters.map(f => {
            const cfg = f === "ALL" ? { color:"#94a3b8" } : RATINGS[f] || RATINGS["NEUTRAL"];
            const active = filter === f;
            return (
              <button key={f} onClick={() => setFilter(f)} style={{
                fontSize:10, fontFamily:"'IBM Plex Mono',monospace", letterSpacing:1,
                padding:"5px 12px", borderRadius:5,
                border:`1px solid ${active ? cfg.color+"66" : "#1e293b"}`,
                background: active ? cfg.color+"15" : "transparent",
                color: active ? cfg.color : "#475569",
                transition:"all 0.2s"
              }}>{f}</button>
            );
          })}
        </div>
        <div style={{ width:1, height:16, background:"#1e293b" }} />
        <div style={{ display:"flex", gap:6 }}>
          {tiers.map(t => {
            const active = tierFilter === t;
            return (
              <button key={t} onClick={() => setTierFilter(t)} style={{
                fontSize:10, fontFamily:"'IBM Plex Mono',monospace", letterSpacing:1,
                padding:"5px 12px", borderRadius:5,
                border:`1px solid ${active ? "#64748b" : "#1e293b"}`,
                background: active ? "#64748b22" : "transparent",
                color: active ? "#94a3b8" : "#475569",
                transition:"all 0.2s"
              }}>{t}</button>
            );
          })}
        </div>
      </div>

      {/* Cards */}
      <div style={{ padding:"24px 28px", display:"flex", flexDirection:"column", gap:14, maxWidth:680, margin:"0 auto" }}>
        {filtered.map(o => <OriginCard key={o.id} o={o} />)}
      </div>
    </div>
  );
}
