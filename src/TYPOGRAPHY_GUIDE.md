# Typography Standardization Guide

## Overview
This document defines the consistent typography system for the Liquid Consulting website.

## Typography Scale

### CSS Variables (defined in `/src/styles/theme.css`)
```css
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
```

## Typography Usage

### Hero Titles
- **Desktop**: `text-6xl md:text-7xl lg:text-8xl`
- **Line Height**: `leading-tight` (1.2)
- **Usage**: Main hero headings only

### Section Titles (H1)
- **Size**: `text-4xl md:text-5xl`
- **Line Height**: Default (1.2 from base styles)
- **Color**: `text-[#0d1c36]`
- **Usage**: Main section headings

### Subsection Titles (H2)
- **Size**: `text-2xl md:text-3xl`
- **Line Height**: Default (1.3 from base styles)
- **Color**: `text-[#0d1c36]`
- **Usage**: Secondary headings within sections

### Card/Component Titles (H3)
- **Size**: `text-xl`
- **Line Height**: Default (1.4 from base styles)
- **Color**: `text-[#0d1c36]`
- **Usage**: Titles for cards, services, features

### Small Headings (H4)
- **Size**: `text-lg`
- **Line Height**: Default (1.5 from base styles)
- **Usage**: Minor headings, labels

### Body Text

#### Large Body
- **Size**: `text-lg`
- **Line Height**: `leading-relaxed` (1.6)
- **Usage**: Intro paragraphs, featured content

#### Regular Body
- **Size**: `text-base`
- **Line Height**: Default (1.6 from base styles)
- **Usage**: Standard paragraph text

#### Small Text
- **Size**: `text-sm`
- **Usage**: Captions, labels, meta information

#### Extra Small
- **Size**: `text-xs`
- **Usage**: Very small labels, footnotes

### Labels & Eyebrows
- **Size**: `text-sm`
- **Transform**: `uppercase tracking-wider`
- **Color**: `text-[#ff6c19]`
- **Usage**: Section labels ("Our Services", "About Us", etc.)

### Buttons
- **Size**: `text-sm`
- **Weight**: `font-medium`
- **Usage**: All button text

### Form Inputs
- **Labels**: `text-sm font-medium text-gray-700`
- **Inputs**: `text-base` (inherited)
- **Placeholders**: `text-gray-500`

## Brand Colors
- **Navy**: `#0d1c36` (Primary text, headings)
- **Orange**: `#ff6c19` (Accents, CTAs, highlights)
- **Gray**: `text-gray-600` (Body text)
- **Light Gray**: `text-gray-500` (Supporting text)

## Font Families
- **Headings**: Manrope (sans-serif)
- **Body**: Inter (sans-serif)

## Examples

### Section Header
```tsx
<div className="text-center mb-16">
  <p className="text-[#ff6c19] text-sm uppercase tracking-wider mb-4">
    Our Services
  </p>
  <h2 className="text-4xl md:text-5xl text-[#0d1c36] mb-4">
    Comprehensive Solutions
  </h2>
  <p className="text-lg text-gray-600 leading-relaxed">
    Description text goes here
  </p>
</div>
```

### Card Component
```tsx
<div className="bg-white p-6 rounded-lg">
  <h3 className="text-xl text-[#0d1c36] mb-3">
    Service Title
  </h3>
  <p className="text-base text-gray-600 leading-relaxed">
    Service description
  </p>
</div>
```

### Form Field
```tsx
<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Field Label
  </label>
  <input
    type="text"
    className="w-full px-4 py-3 text-base border border-gray-300 rounded-md"
  />
</div>
```

## Implementation Checklist

- [x] Update theme.css with typography variables
- [x] Update base HTML element styles (h1, h2, h3, h4, p, label, button)
- [ ] Standardize all section headers across components
- [ ] Standardize all card/service titles
- [ ] Standardize all body text
- [ ] Standardize all form elements
- [ ] Remove all custom text-[##px] classes
- [ ] Use consistent spacing (mb-4, mb-6, mb-8, mb-16)
