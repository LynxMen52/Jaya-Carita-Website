# Jaya Carita Bali Property — Landing Page

## Original Problem Statement
Redesign https://jcbaliproperty.com/ into a luxury, UI/UX-friendly brand landing page with Legal & Visa services and a marquee of hot Bali areas (Uluwatu, Canggu, etc.). The original site continues as the database listing site; this becomes the brand face.

## User Choices
- Language: English
- Services: Property Sales, Rentals, Legal, Visa, Property Management
- Contact: Direct WhatsApp to +62 823-4185-4239
- Listings: Top picks from JCB Bali (Saba Beach, Cemagi, Ungasan, Petulu Ubud, Kerambitan)
- Style: Light luxury (cream/beige tropical elegant)

## Architecture
- Frontend-only marketing site (React + Tailwind + Shadcn UI)
- All CTAs deep-link to WhatsApp with prefilled messages
- No backend changes — existing FastAPI/Mongo template untouched
- Dependencies added: react-fast-marquee

## Implemented (2026-12)
- Hero with split layout, animated entrance, stats
- Continuous marquee ticker of 15 hot Bali areas
- Featured Properties bento grid (5 listings)
- Services bento grid (5 services with hover-flip color)
- Hot Areas image grid (8 regions)
- About / Why Choose Us with 3 trust pillars
- Testimonials (3 quotes)
- FAQ accordion (5 questions on visa/legal/ownership)
- Footer with oversized CTA, contact info, socials
- Sticky WhatsApp float button
- Responsive header with mobile menu

## Backlog (P1/P2)
- Bilingual ID/EN toggle
- Property search filter form
- Blog/News section
- Form-based lead capture (in addition to WhatsApp)
- Property detail pages
