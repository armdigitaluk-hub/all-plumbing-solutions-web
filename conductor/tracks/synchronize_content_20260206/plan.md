# Track: Synchronize Website Content with CMS and "All Plumbing Solutions" Brand Identity

## Phase 1: Update CMS Data to Reflect "All Plumbing Solutions"

- [ ] Task: Update `data/ajustes.yml` with "All Plumbing Solutions" branding and contact details.
    - [ ] Read `data/ajustes.yml`.
    - [ ] Replace `nombre_empresa: Luxury Cleaning London` with `nombre_empresa: All Plumbing Solutions`.
    - [ ] Replace `email: contact@londoncleaning.uk` with `email: contact@londonplumbing.uk`.
    - [ ] (Optional) Update `logo` path if a new logo for "All Plumbing Solutions" is available or required.
- [ ] Task: Update `data/home.yml` with "All Plumbing Solutions" service details and example projects.
    - [ ] Read `data/home.yml`.
    - [ ] Update `hero.titulo` to "Reliable Plumbing & Heating Engineer".
    - [ ] Update `hero.subtitulo` to "No Call Out Charge. Gas Safe Registered. Fast Response."
    - [ ] Update `about` section content to reflect plumbing services.
    - [ ] Update `servicios` list items (nombre, detalle, imagen) to reflect plumbing services.
    - [ ] Update `contacto.formulario.placeholder_telefono` and `contacto.formulario.opciones_servicio` to align with plumbing services.
    - [ ] Update `footer.copyright` to "© 2026 All Plumbing Solutions. All Rights Reserved".
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Update CMS Data to Reflect "All Plumbing Solutions"' (Protocol in workflow.md)

## Phase 2: Integrate CMS Data into `index.html`

- [ ] Task: Read `index.html` and identify hardcoded values that should be dynamic.
- [ ] Task: Replace hardcoded brand name "All Plumbing Solutions" in `index.html` with dynamic content from CMS.
- [ ] Task: Replace hardcoded contact details (phone, email) in `index.html` with dynamic content from CMS.
- [ ] Task: Dynamically render services section content from `data/home.yml` in `index.html`.
- [ ] Task: Dynamically render project examples from `data/home.yml` in `index.html`.
- [ ] Task: Dynamically render customer reviews from `data/home.yml` in `index.html`.
- [ ] Task: Dynamically render general configuration (e.g., top bar text) from `data/ajustes.yml` in `index.html`.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Integrate CMS Data into `index.html`' (Protocol in workflow.md)

## Phase 3: Final Review and Cleanup

- [ ] Task: Perform a final review of `index.html` to ensure all content is dynamic and accurately reflects "All Plumbing Solutions".
- [ ] Task: Verify that all image paths in `index.html` and CMS data files are correct and point to relevant plumbing-related images.
- [ ] Task: Check for any remaining "Luxury Cleaning London" references and remove/replace them.
- [ ] Task: Ensure the master template remains generic and easily re-brandable.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Final Review and Cleanup' (Protocol in workflow.md)
