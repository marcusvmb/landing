# Brand Design System & Art Direction
This file dictates the visual identity. The agents MUST prioritize these rules over generic design patterns.

## 1. Visual DNA (From Brand Guidelines)
**Strictly use these tokens. Do not invent colors.**

### Color Palette
| Token | Hex | Usage Rule |
|-------|-----|------------|
| **Primary (Electric Blue)** | `#5C5CFF` | Main actions, highlights, digital glows. NOT for large backgrounds. |
| **Surface (Ice Grey)** | `#EFF0F0` | **MAIN BACKGROUND.** Avoid pure white (#FFF). Gives a premium, softer feel. |
| **Deep Navy (Contrast)** | `#2B3259` | Text, headings, and high-contrast structural elements. Replaces Black. |
| **White** | `#FFFFFF` | Only for cards/inputs on top of the Surface color. |

### Typography
| Type | Font Family | Characteristics |
|------|-------------|-----------------|
| **Headings (Display)** | `Neogrotesk` | Geometric, modern, aggressive. Use tight letter-spacing (`-0.03em`). |
| **Body (UI)** | `Montserrat` | Clean, legible, high readability. |

### Shape Language
* **Radius:** `rounded-2xl` or `rounded-3xl` (Soft, friendly, tech).
* **Buttons:** `rounded-full` (Pill shape) or `rounded-2xl`. Never square.
* **Iconography:** Geometric but with soft edges (like the logo symbol).

---

## 2. The "Anti-AI" Design Rules (Negative Constraints)
**To avoid the "Generic Bootstrap/Template" look, adhere to these prohibitions:**

1.  **NO Standard Grids:** Do not use the standard "Center Text + Image on Right" 50/50 layout. Use asymmetry (e.g., 40/60), overlap elements, or use huge typography as the main visual.
2.  **NO Default Shadows:** Do not use `shadow-md` or `shadow-lg`. Use **Colored Shadows** derived from the Primary Color (e.g., `box-shadow: 0 20px 60px -15px rgba(92, 92, 255, 0.25)`).
3.  **NO "Corporate Memphis":** Avoid flat, generic vector illustrations. Use abstract geometric 3D shapes, glassmorphism, or high-quality photography with custom masking.
4.  **NO Static Elements:** Every interactive element must have a specific hover state (scale, glow, or color shift).

## 3. High-End UI Techniques (Implementation)
* **Glassmorphism 2.0:** Use `backdrop-blur-xl` with white opacity (20-40%) on top of the `#EFF0F0` background.
* **Typography as Image:** Allow headings to be massive (e.g., `text-8xl`), breaking lines intentionally for visual rhythm.
* **Micro-Interactions:** Buttons should feel "magnetic" or "liquid".

## 4. CSS/Tailwind Instructions
* Use `arbitrary values` when needed to break the grid (e.g., `w-[43%]`, `mt-[-50px]`).
* Prioritize `flex` and `grid` with custom placements over simple stacking.