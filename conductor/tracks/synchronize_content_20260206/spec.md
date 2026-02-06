# Track: Synchronize Website Content with CMS and "All Plumbing Solutions" Brand Identity

## 1. Overview
This track aims to resolve the content discrepancy identified during the project analysis. Currently, the `index.html` file explicitly references "All Plumbing Solutions" and related services, while the content management system (Decap CMS) YAML files (`data/home.yml`, `data/ajustes.yml`) contain content related to "Luxury Cleaning London". The objective is to ensure all dynamic content displayed on the website accurately reflects the "All Plumbing Solutions" brand and services, by ensuring proper data flow from the CMS YAML files to the `index.html`. This will reinforce the project's identity as a master template that can be easily repurposed.

## 2. Problem Statement
The website's primary content, particularly brand name, contact information, and service descriptions, is inconsistent. The `index.html` file hardcodes "All Plumbing Solutions" details, while the CMS data files (`home.yml`, `ajustes.yml`) are populated with "Luxury Cleaning London" information. This inconsistency leads to a disjointed user experience and hinders the efficient rebranding capabilities of the master template.

## 3. Goals
*   Ensure that the main brand name, "All Plumbing Solutions," is consistently displayed across the website, dynamically sourced from the CMS.
*   Update contact information (phone, email) to reflect "All Plumbing Solutions" details, managed via the CMS.
*   Synchronize service descriptions, project examples, and customer reviews to align with plumbing services, all managed through the CMS.
*   Validate that all hardcoded instances of "Luxury Cleaning London" or its related content in `index.html` are replaced with dynamic content from the CMS or correctly reflect "All Plumbing Solutions" where CMS integration is not feasible or appropriate for static branding elements.
*   Maintain the "Master Template" philosophy by ensuring content is generic in the code, and specific branding/text is CMS-driven.

## 4. Scope
This track will involve:
*   Reviewing `index.html` to identify all hardcoded instances of text and image paths that should be driven by CMS data.
*   Modifying `data/ajustes.yml` to reflect "All Plumbing Solutions" branding and contact details.
*   Modifying `data/home.yml` to reflect "All Plumbing Solutions" service descriptions, project examples, and review content.
*   Updating `index.html` to dynamically fetch and display content from the CMS YAML files where applicable.
*   Ensuring images reflect plumbing services and are referenced correctly via the CMS public folder.

## 5. Out of Scope
*   Migration of existing CMS content (e.g., historical "Luxury Cleaning London" data will be overwritten/removed as part of synchronization).
*   Any changes to the Netlify CMS `admin/config.yml` structure beyond necessary data updates.
*   Implementation of new features or sections not directly related to content synchronization.

## 6. Technical Considerations
*   The solution must maintain the current static site generation approach.
*   All changes should adhere to the established code style guidelines (`html-css.md`, `javascript.md`).
*   The updated solution must be easily re-brandable for other niches, emphasizing the master template concept.
*   Attention to SEO implications for title and description meta tags which are CMS-managed.
