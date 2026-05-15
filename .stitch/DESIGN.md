---
name: Executive Heritage
colors:
  surface: '#121412'
  surface-dim: '#121412'
  surface-bright: '#383938'
  surface-container-lowest: '#0d0f0d'
  surface-container-low: '#1a1c1a'
  surface-container: '#1f201e'
  surface-container-high: '#292a29'
  surface-container-highest: '#343533'
  on-surface: '#e3e2e0'
  on-surface-variant: '#d2c4bc'
  inverse-surface: '#e3e2e0'
  inverse-on-surface: '#2f312f'
  outline: '#9b8e87'
  outline-variant: '#4f453f'
  surface-tint: '#dec1af'
  primary: '#dec1af'
  on-primary: '#3f2c20'
  primary-container: '#3d2b1f'
  on-primary-container: '#ac9181'
  inverse-primary: '#705a4c'
  secondary: '#ffb779'
  on-secondary: '#4c2700'
  secondary-container: '#955200'
  on-secondary-container: '#ffd9bc'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#2f2f2f'
  on-tertiary-container: '#989696'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#fbddca'
  primary-fixed-dim: '#dec1af'
  on-primary-fixed: '#28180d'
  on-primary-fixed-variant: '#574335'
  secondary-fixed: '#ffdcc1'
  secondary-fixed-dim: '#ffb779'
  on-secondary-fixed: '#2e1500'
  on-secondary-fixed-variant: '#6c3a00'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#121412'
  on-background: '#e3e2e0'
  surface-variant: '#343533'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.03em
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  max-width: 1280px
---

# Design System: Jônata Albuquerque: Portfólio Executivo
**Project ID:** 5131587722735790161

## Brand & Style
The brand personality is authoritative, mature, and deeply sophisticated, designed for high-level decision-makers who value tradition and precision. It avoids the fleeting trends of "tech" aesthetics in favor of a timeless, editorial feel inspired by luxury watchmaking and heritage tailoring.

The design style is a blend of **Minimalism** and **Tactile Luxury**. It utilizes heavy whitespace to create a sense of breathing room and exclusivity. Surfaces are treated with subtle tonal shifts rather than aggressive gradients, evoking the feel of physical high-grade materials like dark leather, brushed bronze, and premium paper. The emotional response should be one of calm confidence and unwavering reliability.

## Colors
The palette is rooted in a "Warm Executive" dark mode. 

*   **Primary (#3D2B1F):** Deep Umber used for secondary backgrounds and subtle container fills.
*   **Secondary (#CD7F32):** Bronze acts as the accent color for CTAs, focus states, and key highlights. It should be used sparingly to maintain its value.
*   **Tertiary/Base (#1A1A1A):** Matte Black serves as the primary canvas color, providing a solid, high-contrast foundation.
*   **Neutral (#FAF9F6):** Off-White is reserved strictly for typography and iconography to ensure maximum legibility against the dark base.

Avoid any use of pure blues, greens, or vibrant purples. Functional colors (Success/Error) should be desaturated to fit the warm spectrum (e.g., a deep oxblood for errors rather than bright red).

## Typography
The typographic system creates a sharp contrast between the "Literary Serif" (Playfair Display) and the "Functional Sans" (Inter). 

Headlines use Playfair Display to evoke the feeling of a prestige masthead. Tracking should be slightly tightened on larger display sizes to maintain a dense, premium look. 

Body text utilizes Inter for its exceptional legibility in dark environments. Line heights are generous (1.6) to prevent eye fatigue. Labels and small metadata should use Inter with increased letter spacing and uppercase styling to provide a clear structural hierarchy that mimics high-end editorial captions.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop, centered with significant side margins to create an "article-centric" focus. 

- **Desktop:** 12-column grid with 24px gutters. Content is often offset or utilizes asymmetrical whitespace to mimic classic magazine spreads.
- **Mobile:** 4-column grid with 20px margins. 
- **Rhythm:** Spacing follows an 8px scale. Use "LG" (48px) and "XL" (80px) vertical spacing between major sections to emphasize the premium, unhurried nature of the experience. 

Avoid packing elements tightly; density is the enemy of this design system. Every card and container should feel like an exhibit.

## Elevation & Depth
Depth is achieved through **Tonal Layers** rather than traditional shadows. Because the background is Matte Black (#1A1A1A), elevation is suggested by moving toward the Primary color (#3D2B1F).

1.  **Base:** Matte Black (#1A1A1A).
2.  **Surface:** Dark Brown (#3D2B1F) for cards or inset sections.
3.  **Outlines:** Instead of shadows, use 1px solid borders in a desaturated Bronze or a very dark Grey-Brown (Opacity 20%) to define shapes.

If shadows are necessary for specific floating elements (like modals), they must be "Ambient Shadows": long, very soft, and tinted with the Primary color to avoid a "grey/fuzzy" look on the dark background.

## Shapes
The shape language is strictly **Sharp (0)**. 

To maintain a "solid, sophisticated, and professional" appearance, all buttons, cards, and input fields utilize 90-degree corners. This architectural approach reinforces the feeling of stability and classic craftsmanship. Avoid any rounded corners or "pill" shapes, as they detract from the serious executive tone.

## Components
### Buttons
*   **Primary:** Solid Bronze (#CD7F32) with Off-White text. Sharp corners.
*   **Secondary:** Ghost style. 1px Off-White border, Sharp corners.
*   **Tertiary:** Text-only with a subtle bronze underline on hover.

### Cards
Cards are inspired by luxury print. They should have a 1px border (#3D2B1F) and a very subtle background fill of #1A1A1A. Imagery within cards should use a slightly desaturated or high-contrast filter to match the executive tone.

### Input Fields
Inputs are minimal: a bottom-border only (#3D2B1F) that transitions to Bronze (#CD7F32) on focus. Labels are always positioned above the field in uppercase Inter (Label-MD).

### Chips & Tags
Small, sharp-edged boxes with a Dark Brown (#3D2B1F) background and Bronze text. Used for categorization without adding visual clutter.

### Lists
Lists should feature high vertical padding (16px - 24px per item) with a thin 1px separator. Use Playfair Display for list item titles to maintain the editorial aesthetic.
