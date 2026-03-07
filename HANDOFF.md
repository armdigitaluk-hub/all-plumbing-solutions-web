# Project Handoff: All Plumbing Solutions

## What Was Built
A professional, dynamic landing page for "All Plumbing Solutions" based on a master template. The site is fully integrated with a YAML-based CMS (Netlify CMS compatible) for easy content management.

### Key Features
- **Dynamic Content:** All text, images, and brand details are driven by YAML files in the `data/` directory.
- **Responsive Design:** Mobile-first approach with a compact and professional UK-style aesthetic.
- **Interactive Map:** Leaflet.js integration to show service coverage areas.
- **Professional Form Handler:** Migrated from FormSubmit.co to a custom EmailJS integration for a seamless, white-label user experience.
- **24/7 Service Branding:** Focused on emergency plumbing and Gas Safe registered engineering.

## Files
- `index.html`: Main landing page with dynamic CMS integration logic.
- `data/*.yml`: CMS data files (ajustes, home, colores, seo, etc.).
- `js/form-handler.js`: Custom script for handling form submissions via EmailJS with professional success/error modals.
- `FORM_IMPROVEMENTS.md`: Overview of the form migration.
- `EMAILJS_SETUP.md`: Detailed instructions for configuring EmailJS.

## UI/UX Details
- **Screens:** Single-page landing with sections for Hero, Services, About, Projects, Reviews, Coverage, FAQ, and Contact.
- **User flows:**
  1. Visitors land and see immediate 24/7 contact options.
  2. Users can browse services and recent projects.
  3. Contact via floating buttons (WhatsApp/Phone) or the integrated form.
- **Components:** Success/Error modals for form feedback, sticky header, mobile menu toggle.
- **Design notes:** Uses a clean UK-inspired color palette (Blue/Red/White) defined in `data/colores.yml`.

## Testing Notes
- **Areas needing tests:**
  - Form submission logic (EmailJS integration).
  - CMS data loading and fallback mechanisms.
  - Mobile responsiveness and menu functionality.
- **Edge cases to consider:**
  - Missing or malformed YAML files.
  - EmailJS API failures or network issues.
- **Integration points:**
  - EmailJS (Pending configuration of API keys).
  - Leaflet.js (Map initialization).
  - Netlify CMS (Admin interface).
