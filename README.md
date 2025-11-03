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
While meta keywords have been implemented in this project to meet assignment requirements, 
it's important to note that they are no longer used by major search engines for ranking 
purposes. Google officially stopped using meta keywords for web ranking in September 2009. 
The tag was deprecated due to widespread abuse through keyword stuffing and other major search engines (Yahoo, Bing) followed.

**Currently:**
- Google: Does not use (confirmed 2009)
- Bing: Does not use (confirmed 2014)

**Modern SEO Focus:**
Instead of meta keywords, modern SEO best practices emphasise:

- Proper heading structure (H1-H6)
- Meta descriptions (for click-through rates)
- Alt text for images
- Page load speed and mobile responsiveness

## Changelog  
- **v1.0 (Initial Submission):** Project setup, content research, wireframes, README created.  
- **v1.1 (Part 2 Submission):** Licensing details added, footer corrected, external stylesheet implemented, CSS styling applied (base, typography, layout, and visual styles), responsive testing performed.  

## References  
Figma. (2025) *Figma: The collaborative interface design tool*. Available at: https://www.figma.com (Accessed: 27 August 2025).  

Varsity College. (2025) *WEDE5020MM Module Manual*. Cape Town: Varsity College (Accessed: 27 August 2025).  

Unsplash. (2025) *Free stock photos and images under the Unsplash License*. Available at: https://unsplash.com (Accessed: 29 September 2025).  

Shutterstock. (2025) *Royalty-free images, photos, and vectors*. Available at: https://www.shutterstock.com (Accessed: 29 September 2025). Licensed under Shutterstock Royalty-Free License. 

Google Search Central. (2009, September 21). Google does not use the keywords 
meta tag in web ranking. Google for Developers. 
https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag
