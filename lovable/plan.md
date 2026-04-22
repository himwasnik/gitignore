
# Sahil Ingale — Premium Cinematic Portfolio

## Design Direction
- **Light theme** with warm cream/off-white backgrounds and deep charcoal text
- **Serif headings** (Playfair Display) + **sans-serif body** (Inter)
- Cannes Film Festival-inspired elegance: gold accent color, generous whitespace, smooth scroll animations
- Subtle fade-in animations on scroll using Intersection Observer

## Pages & Sections (Single Page)

### 1. Hero Section
- Full-width split layout: left text ("Stories That Reach The World"), right cinematic placeholder image
- Two CTA buttons: "Explore Work" (scroll) and "Connect" (scroll to contact)
- Subtle gold underline accent on heading

### 2. About Section
- Two-column: placeholder portrait left, bio text right
- Name, role, professional bio mentioning Cannes recognition
- Elegant divider elements

### 3. Featured Work Section
- 3-column grid of film cards with placeholder posters
- Each card: film name, short description, recognition badge (e.g., "Cannes Official Selection")
- Hover effects with subtle scale/shadow

### 4. Vision / Studio Section
- Centered text block with large serif quote-style heading
- "The Vision Behind The Frame" + philosophy text
- Warm background tint for contrast

### 5. Achievements Section
- Minimal icon/stat layout highlighting festival selections, awards, collaborations
- Gold accent on key numbers/icons

### 6. Contact Section
- Clean form (Name, Email, Message) with validation
- CTA heading: "Let's Create Something Meaningful"
- Toast confirmation on submit

### 7. Footer
- Minimal: name, nav links, copyright © 2026

## Technical
- All in a single `Index.tsx` page with component sections
- Custom CSS variables for gold accent and cream backgrounds
- Scroll-based fade-in animations
- Fully responsive (mobile-friendly)
- Placeholder images using gradient backgrounds (no external image dependencies)
