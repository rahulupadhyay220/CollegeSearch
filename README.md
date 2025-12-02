CollegeSearch - Study Abroad and College Search Platform

Overview

CollegeSearch is a responsive front-end web application designed to help students discover and compare universities across the globe. The platform features a modern, clean user interface that allows users to search for institutions, filter results by discipline or country, and view key details such as rankings, fees, and admission probabilities.

This project demonstrates a clean separation of concerns by isolating the structure (HTML), presentation (CSS), and logic (JavaScript) into separate files, making the codebase easier to maintain and scale.

Project Structure

The project consists of the following three main files:

index.html: This file contains the semantic markup for the website. It defines the layout, including the header, hero section, filter sidebar, and the main results grid. It links to the external stylesheet and script file.

style.css: This file handles custom styling requirements that go beyond the utility classes provided by Tailwind CSS. It includes configurations for fonts, custom scrollbar behaviors, gradient backgrounds, and animation keyframes.

script.js: This file contains the application logic. It manages the state (search terms, active filters), stores the mock database of universities, handles DOM manipulation for rendering the grid, and processes user interactions like searching and filtering.

Key Features

Dynamic Filtering: Users can filter universities based on specific disciplines (e.g., Engineering, Business) and countries (e.g., USA, UK, Canada).

Real-time Search: The search bar allows users to filter results instantly by university name, location, or course.

Responsive Design: The layout adapts seamlessly to different screen sizes, featuring a sidebar for desktops and a horizontal scrollable filter list for mobile devices.

Interactive UI Elements: Includes hover effects, smooth transitions, and dynamic status badges (e.g., "Featured," "Fast Track") to enhance the user experience.

Data Visualization: Simple visual indicators for admission probabilities (Safe, Target, Ambitious) using color-coded progress bars.

Technologies Used

HTML5: For semantic page structure.

Tailwind CSS: Used via CDN for rapid utility-first styling.

CSS3: Custom styles for specific animations and form elements.

JavaScript (ES6+): Vanilla JavaScript for handling logic and DOM manipulation without external frameworks.

FontAwesome: For UI icons.

Google Fonts: Uses "Plus Jakarta Sans" for typography.

How to Run

Download all three files (index.html, style.css, and script.js) and place them in the same folder.

Open the index.html file in any modern web browser (Chrome, Firefox, Safari, or Edge).

The application will load immediately with the mock data populated.

Customization

To add more universities to the platform, open the script.js file and locate the COLLEGES_DATA array. You can add new objects to this array following the existing format, and they will automatically appear in the grid upon refreshing the page.
