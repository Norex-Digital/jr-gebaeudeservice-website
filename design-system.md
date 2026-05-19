# Design System — Premium Fensterreinigung
_Erstellt: 2026-05-18 (Phase 0 / hue)_
_Vollständige Tokens: `~/.claude/skills/premium-fensterreinigung-design/`_
_CSS-Code: `~/.claude/skills/premium-fensterreinigung-design/references/platform-mapping.md`_

---

## Farben

| CSS Variable | Wert | Rolle |
|---|---|---|
| `--bg` / `--background` | `#0A0A0A` | Seiten-Hintergrund |
| `--surface1` | `#111111` | Karten |
| `--surface2` | `#1A1A1A` | Eingebettete Elemente |
| `--surface3` | `#0D1B2A` | Dunkelblaue Sektionen |
| `--surface3-mid` | `#0F2540` | Hover auf blauen Flächen |
| `--border` | `rgba(255,255,255,0.06)` | Dezente Borders |
| `--border-visible` | `rgba(255,255,255,0.12)` | Sichtbare Borders |
| `--text1` | `#FFFFFF` | Headlines |
| `--text2` | `#94A3B8` | Fließtext |
| `--text3` | `#64748B` | Labels, Timestamps |
| `--text4` | `#475569` | Disabled |
| `--accent` | `#1a56db` | Buttons, Highlights |
| `--accent-dark` | `#0e3a9e` | Gradient-Ende |
| `--accent-gradient` | `linear-gradient(135deg, #1a56db, #0e3a9e)` | CTA-Buttons, Logo |
| `--accent-subtle` | `rgba(26,86,219,0.10)` | Akzent-Hintergrund |
| `--glass-bg` | `rgba(17,17,17,0.60)` | Glassmorphism-Karten |
| `--glass-blur` | `blur(12px)` | Glassmorphism-Unschärfe |
| `--whatsapp` | `#25D366` | WhatsApp FAB |

## Schatten

| Variable | Wert | Verwendung |
|---|---|---|
| `--shadow-card` | `0 1px 0 rgba(255,255,255,0.05) inset, 0 4px 24px rgba(0,0,0,0.4)` | Standard-Karten |
| `--shadow-raised` | `0 8px 32px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.08) inset` | Hover-Karten |
| `--shadow-accent-glow` | `0 0 32px rgba(26,86,219,0.25), 0 8px 32px rgba(0,0,0,0.5)` | Hover auf CTA-Buttons |

## Typografie

Fonts:
- **Bebas Neue** (Google Fonts — weight: 400) — Display, H1, H2 (alle Sektions-Titel, Hero)
- **Plus Jakarta Sans** (Google Fonts — weights: 400, 600, 700) — Body, Labels, UI-Text

| Token | Font | Größe | Weight | Tracking | Verwendung |
|---|---|---|---|---|---|
| Display | Bebas Neue | clamp(64px,10vw,118px) | 400 | +0.02em | Hero-Headline |
| H1 | Bebas Neue | clamp(36px,4vw,48px) | 400 | -0.02em | Seiten-Titel |
| H2 | Bebas Neue | clamp(28px,3vw,36px) | 400 | -0.02em | Sektions-Titel |
| H3 | 24px | 600 | -0.01em | Karten-Titel |
| H4 | 18px | 600 | 0 | Labels |
| Body | 16px | 400 | 0 | Fließtext |
| Body-sm | 14px | 400 | 0 | Sekundärtext |
| Caption | 12px | 400 | +0.02em | Metadaten |
| Label | 13px | 600 | +0.04em | Buttons (UPPERCASE) |

## Abstände (8px Grid)

`2xs`=2 | `xs`=4 | `sm`=8 | `md`=16 | `lg`=24 | `xl`=32 | `2xl`=48 | `3xl`=64 | `4xl`=96

## Radien

`element`=4px | `control`=8px | `component`=12px | `container`=16px | `pill`=999px

## Motion

Easing: `cubic-bezier(0.4, 0, 0.2, 1)` | Spring: `cubic-bezier(0.34, 1.56, 0.64, 1)`
Durations: `fast`=150ms | `normal`=250ms | `slow`=400ms
Nur animieren: `transform`, `opacity`, `background-color`, `border-color`, `box-shadow`

## Icons

Phosphor Icons Regular — CDN: `https://unpkg.com/@phosphor-icons/web@2/src/regular/style.css`
Klasse: `ph ph-[icon-name]`

## Asset-Zuweisungen

| Rolle | Datei |
|---|---|
| Hero Homepage | `IMG_7849.jpg.webp` |
| Hero Gewerbe | `IMG_7859.jpg.webp` |
| Inhaber-Portrait | `E1F5A667-9471-4E22-B183-25758B86F367.png.webp` |
| Team-Foto | `A54B9F4B-C854-426C-849F-A3DAAD9F362A.png.webp` |
| Julien vor Van | `JR_Fensterreinigung_26-05-15_13.43.41-2.jpg.webp` |
| Fensterreinigung | `IMG_7689.jpg.webp` |
| Wintergarten | `IMG_7654.jpg.webp` |
| Solar | `0F0D24C2-3558-4046-BCEC-E52ECBEAC058.png.webp` |
| Vorher/Nachher 1 | `B8140E4A-215E-4541-8E18-D27DECF21821.png.webp` |
| Vorher/Nachher 2 | `DA33D6F3-1CC7-4A9F-B657-32D48835F10F.png.webp` |
| Logo | `35A0CDFB-340E-43DE-B074-575700301CD6.png.webp` |

Assets-Pfad relativ zur HTML: `../../assets/[dateiname]` (von website/[service]/index.html aus)
Assets-Pfad von index.html: `../assets/[dateiname]`

## Kritische Kontaktdaten (IMMER diese verwenden)

- Telefon: `0162 7061789` → `href="tel:+491627061789"`
- WhatsApp: `href="https://wa.me/491627061789"`
- E-Mail: `href="mailto:info@premium-fensterreinigung.de"`
