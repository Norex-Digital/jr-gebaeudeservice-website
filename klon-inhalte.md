# Klon-Inhalte — premium-fensterreinigung.de
_Erstellt: 2026-05-18 (Phase 0) — Referenz für Phase 1 Copy_
_Quelle: WebFetch auf premium-fensterreinigung.de + Unterseiten_

---

## Meta (alt — wird komplett ersetzt)

| Feld | Aktuell | Neu (aus copy-briefing.md) |
|---|---|---|
| Title | "Fensterreinigung in Berlin & Brandenburg / Premium Fensterreinigung" | "Fensterreinigung Berlin – 80°C Heißwasser, kein Gerüst \| JR Gebäudeservice" |
| Meta-Description | Nicht gesetzt | "Fensterreinigung Berlin: 80°C Heißwasser, ohne Chemie, bis 21m vom Boden. Foto senden → Festpreis noch heute. Privat & Gewerbe." |
| H1 | "IHRE PREMIUM FENSTERREINIGUNG" | "Fensterreinigung Berlin – Streifenfrei durch 80°C Heißwasser" |

---

## Navigation (alt)

| Linktext (alt) | URL (alt) | Hinweis |
|---|---|---|
| Home | / | bleibt |
| Fensterreinigung | /fensterreinigung/ | bleibt |
| Wintergartenreinigung | /wintergartenreinigung/ | bleibt |
| Glasreinigung | /glasreinigung/ | bleibt |
| Terassenüberdachung | /terassenueberdachung/ | **Tippfehler! Neue URL: /terrassenueberdachung/** |
| Solaranlagenreinigung | /solaranlagenreinigung/ | bleibt |
| Jalousienreinigung | /jalousienreinigung/ | bleibt |
| Kontakt | /kontakt/ | bleibt |
| — | — | NEU: /dachreinigung/, /fassadenreinigung/, /steinreinigung/, /privatkunden/, /gewerbekunden/ |

---

## Hero-Sektion (alt)

**Headline:** "IHRE PREMIUM FENSTERREINIGUNG"
**Subheadline:** "Intensive Heiß-Reinwasserreinigung bis 80 °C für Privat & Gewerbe in Berlin & Brandenburg"
**CTA:** "KOSTENLOSE ANFRAGE STARTEN"

→ Wird komplett ersetzt durch copy/master.md (Phase 1)

---

## Sektions-Struktur (alt — Reihenfolge beibehalten als Referenz)

1. Hero (Headline + Subheadline + CTA)
2. Intro: "IHR REGIONALER PREMIUM FENSTERREINIGER IN BERLIN & BRANDENBURG"
3. Service-Übersicht: "DIREKT ZU DEN WICHTIGSTEN SEITEN" (6 Service-Karten)
4. Technik: "UNSERE TECHNIK – DEN UNTERSCHIED DEN MAN SIEHT"
   - 80°C Heiß-Reinwasser
   - 100% gefiltertes Osmosewasser
   - Eigenes Einbausystem im Transporter
   - Streifenfrei ohne Chemie
5. Einzugsgebiet: "WO WIR FÜR SIE AKTIV SIND" (Radius ~50km, WhatsApp)
6. Testimonials: "DAS SAGEN KUNDEN ÜBER UNS"
7. Prozess: "SO LÄUFT UNSERE PREMIUM ZUSAMMENARBEIT AB" (4 Schritte):
   - Analyse statt Schätzung (Foto per WhatsApp)
   - Präzises Angebot – oft am selben Tag
   - Premium-Reinigung mit High-End-Technik
   - Auf Wunsch: dauerhafte Sauberkeit
8. Preise: "WAS KOSTET EINE PREMIUM FENSTERREINIGUNG?" + CTA
9. Buchungsformular: "BUCHEN SIE UNS JETZT" (Name, Telefon, E-Mail, Nachricht)

---

## Kontaktdaten (alt vs. korrekt)

| Kanal | Auf Website | Korrekt (aus inhaber-infos.md) | Problem |
|---|---|---|---|
| Telefon (Kontaktseite) | 0162 7061789 | 0162 7061789 | ✅ Korrekt |
| WhatsApp (Homepage) | +49162 1870181 | 0162 7061789 | ❌ FALSCHE NUMMER! |
| E-Mail | info@premium-fensterreinigung.de | info@premium-fensterreinigung.de | ✅ Korrekt |
| Adresse | Nicht angegeben | Sonnenstraße 50, 14612 Falkensee | ❌ Fehlt |
| Öffnungszeiten | Nicht angegeben | 07:00–18:00 Uhr (Tage: noch offen) | ❌ Fehlt |

**→ Auf neuer Website: NUR 0162 7061789 überall (Competitor-Gap #11 behoben)**

---

## Impressum (alt)

**Status: LEER** — nur Platzhaltertexte, keine Pflichtangaben eingetragen.
**Abmahnrisiko! → Phase 4 Pflicht: vollständiges Impressum nach §5 TMG**

Korrekte Daten (aus inhaber-infos.md):
- Julien Ranft | Sonnenstraße 50, 14612 Falkensee
- Tel: 0162 7061789 | info@premium-fensterreinigung.de
- Einzelunternehmen

---

## Technologie-Stack (alt)

- WordPress + IONOS SiteBuilder (erkenntlich an /wp-content/uploads/ Bildpfaden)
- Go-X Plugin für Bild-Uploads
- IONOS SiteAnalytics (wird ersetzt durch GTM + GA4 in Phase 6)
- Website-Translator (Drittanbieter — entfällt auf neuer Site)
- Cookie-Consent: IONOS-eigene Lösung → wird ersetzt durch Klaro (Phase 4)

---

## Bilder (alt — WordPress CDN)

Die alten Bild-URLs (/wp-content/uploads/go-x/u/...) werden NICHT übernommen.
Neue Site nutzt eigene Assets aus: `kunden/jr-gebaeudeservice/assets/`
→ Asset-Zuweisungen: siehe build-plan.md → "Asset-Zuweisungen"

---

## Bestehende Location-Pages (alt — für 301-Redirects)

Fensterreinigung-Location-Pages bereits vorhanden (gleiche Slugs wie geplant):
- fensterreinigung-im-havelland ✅
- fensterreinigung-in-berlin ✅
- fensterreinigung-in-berlin-spandau ✅
- fensterreinigung-in-brandenburg ✅
- fensterreinigung-in-brieselang ✅
- fensterreinigung-in-dallgow-doeberitz ✅
- fensterreinigung-in-elstal ✅
- fensterreinigung-in-falkensee ✅
- fensterreinigung-in-gatow ✅
- fensterreinigung-in-gross-glienicke ✅
- fensterreinigung-in-kladow ✅
- fensterreinigung-in-schoenwalde-glien ✅
- fensterreinigung-in-staaken ✅
- fensterreinigung-in-wustermark ✅

Glasreinigung- und Wintergartenreinigung-Location-Pages: noch NICHT vorhanden → neue URLs, kein Redirect nötig.

---

## Fensterreinigung-Unterseite (alt)

**Meta-Title:** "Fensterreinigung in Berlin & Brandenburg / Premium Fensterreinigung"
**H1:** "PREMIUM FENSTER REINIGUNG"
**H2s:**
- WARUM SICH UNSERE FENSTERREINIGUNG DEUTLICH ABHEBT
- WAS GEHÖRT ZU UNSERER FENSTERREINIGUNG
- UNSERE TECHNIK
- SO LÄUFT UNSERE PREMIUM ZUSAMMENARBEIT AB
- FÜR PRIVATE & GEWERBLICHE KUNDEN
- VIELLEICHT HABEN SIE UNS SCHON IN IHRER NACHBARSCHAFT GESEHEN
- WAS KOSTET EINE PREMIUM FENSTERREINIGUNG
**H3:** "Ihr regionaler Premium Fensterreiniger"

Kern-Aussagen die beibehalten werden:
- Streifenfreie Reinigung ohne Chemie
- Bis 21 Meter ohne Gerüst
- 80°C Osmosewasser-System
- Privat + Gewerblich
- Transparente Preise nach Fläche/Zugänglichkeit/Verschmutzung
