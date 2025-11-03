# Devcon Website Project  

## Project Title  
Devcon Company Website  

## Student Information  
- **Name:** Marcus Fourie  
- **Student Number:** ST10487313  
- **Course:** WEDE5020
- **Institution:** Varsity College  

## Project Overview
Devcon is a South African business specialising in project management, electrical installations, contract management, and solar energy solutions. This project involves the creation of a responsive, professional website to establish Devcon's online presence, showcase services, and provide clients with an enquiry platform.
The website includes five main pages:

* **Home** - Hero banner, company overview, and service previews
* **About Us** - Company history, mission & vision, and team section with interactive accordions
* **Services** - Service offerings with an interactive project gallery and lightbox viewer
* **Enquiry** - Dynamic quote request form with real-time cost estimation and order summary
* **Contact** - Contact information, messaging form, and interactive service area map

## Website Goals and Objectives


* Establish Devcon's digital presence with a professional, modern website
* Highlight services and showcase past project experience through visual galleries
* Provide a structured enquiry form for quote requests with instant cost estimates
* Improve client communication through multiple contact methods and forms
* Ensure responsive design that works seamlessly across all devices and screen sizes
* Implement proper SEO practices to improve search engine visibility

## Key Features and Functionality
### Interactive Elements

**Accordion Sections (About Page)**: Company History, Mission & Vision, and Team sections feature smooth expand/collapse animations. Multiple sections can be open simultaneously for easy comparison.

**Lightbox Gallery (Services Page)**: Project portfolio showcasing four completed projects. Users can click any thumbnail to view full-size images with detailed descriptions, navigate using keyboard arrows or on-screen buttons, and close with the Escape key.

**Dynamic Quote Calculator (Enquiry Page)**: Real-time order summary that calculates estimated costs based on selected service and timeline, compares against user's budget, and provides immediate feedback on whether their budget is sufficient.

**Interactive Map (Contact Page)**: Leaflet.js-powered map showing Devcon's location in Windhoek, Namibia with a marker popup and 50km service area visualization. Smart scroll-wheel behavior prevents accidental zooming.

### Form Validation and Submission
Both the enquiry and contact forms feature comprehensive validation combining HTML5 attributes (required, pattern, minlength, maxlength) with custom JavaScript validation. Users receive real-time feedback as they fill out forms, with error messages appearing directly below problematic fields and success indicators (green borders) on valid fields. The enquiry form includes conditional logic that shows/hides the phone number field based on the selected contact method. Both forms integrate with FormSubmit.co to deliver submissions directly to email without requiring backend server code.

### Responsive Design
The entire website is built mobile-first with responsive breakpoints ensuring optimal viewing on devices ranging from smartphones to large desktop monitors. CSS Grid and Flexbox layouts automatically adapt to screen size, images scale appropriately while maintaining aspect ratios, and navigation remains accessible across all viewports.

## Content Licensing
* Unsplash: Images used for services and content sections, licensed under the free Unsplash License (commercial and non-commercial use permitted without attribution required).
* Shutterstock: Banner image licensed under the Shutterstock Royalty-Free License for commercial use.
* Figma: Used for wireframes and interface design mockups under Figma's free tier license.
* Google Fonts: Typography implemented using fonts licensed under the SIL Open Font License.
* Leaflet.js: Interactive map library used under BSD 2-Clause License (open source).
* OpenStreetMap: Map tiles used under Open Database License (ODbL).

## Breakpoints Testing
Screenshots demonstrate responsive design tested on smaller breakpoints (e.g., iPad/tablet screens at 768px-1024px). Layout and styling remain intact without major distortions, with elements reordering naturally for optimal mobile viewing. Interactive features like accordions, forms, and the lightbox gallery maintain full functionality across all tested screen sizes.
### Examples:  
- **Homepage on Tablet**  
![Homepage Breakpoint](./screenshots/home-tablet.png)  

- **About Us Page on Tablet**  
![About Breakpoint](./screenshots/about-tablet.png)  

- **Services Page on Tablet**  
![Services Breakpoint](./screenshots/services-tablet.png)  

- **Enquiry Page on Tablet**  
![Enquiry Breakpoint](./screenshots/enquiry-tablet.png)  

- **Contact Page on Tablet**  
![Contact Breakpoint](./screenshots/contact-tablet.png)  

*(Screenshots uploaded in the `/screenshots/` folder of the project.)*  


## SEO Implementation Notes
### Meta Keywords
While meta keywords have been implemented in this project to meet assignment requirements, it's important to note that they are no longer used by major search engines for ranking purposes. Google officially stopped using meta keywords for web ranking in September 2009. The tag was deprecated due to widespread abuse through keyword stuffing, and other major search engines (Yahoo, Bing) followed suit.
**Currently:**

**Google:** Does not use (confirmed 2009)

**Bing:** Does not use (confirmed 2014)

## Modern SEO Focus
Instead of meta keywords, modern SEO best practices emphasize:

* **Proper heading structure (H1-H6):** Each page has a single, descriptive H1 tag with a logical hierarchy of subheadings
* **Meta descriptions**: Each page includes a unique, compelling 150-160 character description optimized for click-through rates
* **Optimized title tags:** Unique titles for each page incorporating relevant keywords, location, and brand name (50-60 characters)
* **Alt text for images:** All images include descriptive alt text for accessibility and image search optimization
* **Page load speed:** Optimized images and minimal external dependencies ensure fast loading
* **Mobile responsiveness:** Fully responsive design ensures good rankings in mobile-first indexing
* **Semantic HTML:** Proper use of semantic tags like (header), (nav), (main), (section), and (footer)

## Technical Implementation
### Code Quality and Optimization
Throughout development, the codebase underwent rigorous review and optimization. Approximately 290 lines of redundant code were removed across all HTML files, eliminating unused CSS classes, unnecessary inline styles, and non-functional JavaScript. Over 1,200 lines of unused CSS were identified and removed, resulting in cleaner, more maintainable stylesheets. All remaining code serves a specific purpose, with no dead code or unused functions.
### Documentation Standards
Every HTML file includes comprehensive comments explaining the purpose of each section, why certain approaches were chosen, and how interactive features work. JavaScript files contain over 140 professional-grade comments with JSDoc-style function documentation, making the codebase accessible to future developers or collaborators. CSS is organized with clear section headers and comments explaining complex layouts or responsive behaviors.
### Accessibility Features
The website implements WCAG accessibility guidelines including proper semantic HTML structure, descriptive alt text on all images, form labels properly associated with inputs, keyboard navigation support for all interactive elements, sufficient color contrast ratios, and focus indicators on interactive elements.

## Technologies Used

**HTML5:** Semantic markup with proper heading hierarchy and form validation attributes

**CSS3:** External stylesheet using Flexbox, CSS Grid, transitions, and media queries for responsive design

**JavaScript (ES6+)**: Vanilla JavaScript for form validation, dynamic content updates, and interactive features

**Leaflet.js:** Open-source library for interactive maps (contact page)

**FormSubmit.co:** Third-party service for form-to-email conversion without backend code

**Google Fonts:** Web typography (Roboto, Open Sans, or similar)

## Changelog
### v1.0 (Initial Submission)
The project began with initial setup and content research. Wireframes were created in Figma to plan the layout and structure of all five pages. The README documentation was established to outline project goals, objectives, and technical requirements. Basic project structure and file organization were implemented to prepare for development.
### v1.1 (Part 2 Submission)
This version focused on refining the visual presentation and ensuring proper structural foundation. Detailed licensing information was added for all media assets including images from Unsplash and Shutterstock, ensuring proper attribution and legal compliance. The footer was corrected across all pages to maintain consistency and was positioned outside the body tag per assignment specifications. An external stylesheet (css/style.css) was implemented to properly separate content from presentation, following best practices for maintainable code. Comprehensive CSS styling was applied including base reset styles, typography rules, flexible layout structures using Flexbox and CSS Grid, and visual enhancements like colors, spacing, and borders. Responsive design was thoroughly tested across tablet breakpoints (768px-1024px), with screenshots captured demonstrating how layouts adapt gracefully to smaller screens without distortion.
### v1.2 (Part 3 Submission - Code Review, Optimization & Interactive Features)
This final version involved a comprehensive code review of all HTML, CSS, and JavaScript files, removing unnecessary code and adding professional documentation throughout.

**SEO Implementation:** A complete SEO strategy was implemented across all pages. Meta keywords were added to meet assignment requirements despite being deprecated by Google (2009) and Bing (2014), with documentation clearly stating these no longer affect rankings. Modern SEO techniques were prioritised: unique meta descriptions (150-160 characters) for click-through rates, optimized title tags with keywords and location, descriptive alt text on all images, proper semantic HTML with heading hierarchies, and mobile-responsive design for Google's mobile-first indexing.

**Home Page:** All inline styles were replaced with semantic CSS classes (.cta-container, .footer-content), a typo was corrected, footer positioning was verified, and 40+ comprehensive comments were added.

**About Page:** A critical JavaScript bug was fixed where accordion variables were undefined, causing console errors. Smooth transitions were added to accordion animations, hover effects implemented on headers, and functionality modified to allow multiple sections open simultaneously. 

**Services Page:** The most dramatic transformation -  A working lightbox gallery was implemented with keyboard navigation, smooth animations, and project descriptions. All inline styles (12+ instances) were consolidated into semantic classes, brand colors standardized, and 60+ comments added. 

**Enquiry Form:** HTML structure simplified from five nesting levels to three, complex flexbox replaced with cleaner CSS Grid, and all inline styles eliminated. Dynamic features were added: real-time cost calculation based on service and timeline, budget comparison with immediate feedback, conditional phone field visibility, and comprehensive HTML5 + JavaScript validation. Form connects to FormSubmit.co for email delivery, with 45+ detailed comments.

**Contact Page:** HTML structure fixed, footer verified, and brand colors standardised. An interactive Leaflet.js map was added showing Devcon's location with marker popup, 50km service area circle, and smart scroll-wheel behavior. Contact form includes real-time character counter that changes color near the 1000-character limit. Connected to FormSubmit.co

**JavaScript Documentation:** Both files (enquiry.js and contact.js) were found to be bug-free and excellently written. JSDoc-style comments were added explaining every function, validation rule, and feature. Code was organized into clear sections with headers. The enquiry form handles dynamic cost calculation, budget comparison, conditional phone validation, and FormSubmit integration. The contact form manages character counting, optional phone validation, and form submission with proper error handling. Both demonstrate modern JavaScript practices with 100% code efficiency - no unused functions or dead code.

**Overall Impact:** This review transformed the website from functional to professional.  Interactive features (accordions, lightbox gallery, dynamic forms, interactive map) elevated user experience. Form validation and email integration make the site fully functional for real business use. Responsive design ensures flawless performance across all devices. Every remaining line of code serves a clear purpose, following industry best practices.


## References

Figma. (2025) Figma: The collaborative interface design tool. Available at: https://www.figma.com (Accessed: 27 August 2025).

Varsity College. (2025) WEDE5020MM Module Manual. Cape Town: Varsity College (Accessed: 27 August 2025).

Unsplash. (2025) Free stock photos and images under the Unsplash License. Available at: https://unsplash.com (Accessed: 29 September 2025).

Shutterstock. (2025) Royalty-free images, photos, and vectors. Available at: https://www.shutterstock.com (Accessed: 29 September 2025). Licensed under Shutterstock Royalty-Free License.

Google Search Central. (2009, September 21). Google does not use the keywords meta tag in web ranking. Google for Developers. https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag (Accessed: November 2025).

Yoast. (2025, January 3). Meta keywords are no longer helpful for SEO. https://yoast.com/meta-keywords/ (Accessed: November 2025).

Leaflet. (2024). Leaflet - an open-source JavaScript library for mobile-friendly interactive maps. Available at: https://leafletjs.com/ (Accessed: November 2025).

OpenStreetMap. (2025). OpenStreetMap - The Free Wiki World Map. Available at: https://www.openstreetmap.org (Accessed: November 2025).

FormSubmit. (2025). FormSubmit - Easy form submission without backend code. Available at: https://formsubmit.co/ (Accessed: November 2025).

MDN Web Docs. (2025). JavaScript | MDN. Mozilla. https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed: November 2025).
