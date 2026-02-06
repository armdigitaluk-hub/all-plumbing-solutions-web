# Product Guidelines

## 1. Tone and Voice
The communication tone for all website content and external communications should be **professional yet neutral**. This approach ensures versatility, allowing the template to be adapted seamlessly across various service niches without requiring significant alterations to the core messaging. Clarity, accuracy, and conciseness are paramount, ensuring information is conveyed effectively and authoritatively.

## 2. Content Strategy
All content, including titles, descriptive texts, and image references, **MUST be dynamically extracted from Decap CMS (YAML files)**. This is a critical guideline to ensure the website functions as a "Master Template." This modular approach to content management enables rapid adaptation and rebranding for different service industries (e.g., cleaning, electrical, gardening, etc.) with minimal code changes. Hardcoded content in HTML should be avoided unless absolutely necessary for structural elements not managed by the CMS.

## 3. Code Style and Generality
The codebase must be developed with **generality and reusability** as primary considerations.
*   **HTML Structure:** Maintain a clean, semantic HTML structure that clearly separates content from presentation.
*   **CSS Styling:** Utilize a modular and well-commented CSS architecture (e.g., BEM, utility-first with Tailwind CSS, or a similar approach) that allows for easy theme changes and component-level customization without affecting other parts of the template. Avoid highly specific class names where generic alternatives would suffice.
*   **JavaScript Logic:** Implement JavaScript in a generic manner, focusing on functionality that is broadly applicable (e.g., form submissions, navigation toggles, dynamic content loading) rather than niche-specific interactions. Ensure code is well-documented and follows modern best practices.

## 4. Visual Identity (Placeholders and Adaptability)
While specific branding (colors, logos) will be managed via the CMS (as seen in `admin/config.yml` under `data/colores.yml`), the visual design of the template should be inherently adaptable.
*   **Logo:** Ensure the logo slot is prominent and easily swappable via CMS.
*   **Imagery:** All images should be managed through the CMS, allowing for easy updates to reflect different service niches. Placeholder images should be used during development that clearly indicate their purpose (e.g., "Service-Hero-Image.jpg").
*   **Color Palette:** The template should leverage CSS variables for colors, linked to the CMS-managed color scheme, to facilitate quick branding changes.

## 5. User Experience (UX)
The template should prioritize a clear, intuitive, and efficient user experience.
*   **Navigation:** Simple and logical navigation that guides users to key information.
*   **Responsiveness:** Fully responsive design ensuring optimal viewing and interaction across all devices.
*   **Accessibility:** Adherence to WCAG guidelines to ensure the website is accessible to all users.

By following these guidelines, the project will maintain its integrity as a flexible "Master Template," capable of serving diverse business needs efficiently.
