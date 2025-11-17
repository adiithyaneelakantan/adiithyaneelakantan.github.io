# Design Guidelines for Academic Research Portfolio Website

## Project Overview
A professional academic research portfolio website for Adithya Neelakantan, designed for deployment as a static GitHub Pages site. The design prioritizes clarity, professionalism, and easy access to research information with a clean, academic aesthetic.

---

## Typography System

**Font Families**
- Primary: Helvetica, Arial, sans-serif
- Base font size: 12px
- All text in black (#000000) for maximum readability

**Typography Hierarchy**
- Name/Logo: Larger, bold weight
- Section headings: Medium-large, bold
- Timeline dates: Bold or emphasized
- Body text: Regular weight, 12px base
- Links: Underlined or visually distinguished in dark pink

---

## Color Palette

**Core Colors**
- Background: White (#FFFFFF)
- Text: Black (#000000)
- Hyperlinks: Dark Pink (#A20597)
- Maintain high contrast throughout for readability

---

## Layout Architecture

### Top Navigation Bar
- Fixed header spanning full width
- Left aligned: "Adithya Neelakantan" (name/logo)
- Right aligned: "Resume" link (linking to PDF: "Adithya Resume research-1.pdf")
- Clean, minimal design with subtle bottom border

### Two-Column Layout

**Left Sidebar (Fixed, ~30% width)**
- Remains fixed during scroll
- Contains:
  - Profile photo (square format) - use provided image: `2_1761261534032.jpg`
  - Contact emails (clickable, with icons matching accent color):
    - adithya.neelakantan@gmail.com
    - aneelaka@syr.edu
  - Social media links with icons:
    - GitHub: https://github.com/adithya-neelakantan
    - LinkedIn: https://www.linkedin.com/in/adithyaneelakantan/
    - Instagram: https://www.instagram.com/adithya.neelakantan/

**Right Content Area (Scrollable, ~70% width)**
Sections in order:

1. **About Section**
   - Brief introduction of current role and research focus
   - Content: Recent Syracuse University graduate (Masters in CS), research intern on continually learning AI agents and cognition in Agentic AI systems

2. **Updates Section**
   - Reverse chronological timeline format
   - Dates with corresponding milestones:
     - June 16, 2025: Started AI agents research project
     - May 10, 2025: Graduated from Syracuse University
     - April 26, 2025: AIOT Smart Classroom project completion
     - December 2, 2024: Mental Health categories Reddit project
     - August 23, 2024: Completed Intel internship
     - August 28, 2023: Started Masters degree

3. **Research Vision Section**
   - Detailed paragraph about research interests
   - Focus areas: Human-Computer Interaction, Computational Communication, adaptive AI systems, metacognitive processes, network analysis, text mining, machine learning

4. **Publications Section**
   - Format: Author list, title, venue/status
   - AIOT paper with hyperlink: "[arXiv]" linked to https://arxiv.org/abs/2510.26999

5. **Academic Projects Section**
   - Project title, dates, description, tech stack
   - Key projects with hyperlinks:
     - AIOT Smart Classroom System → arXiv paper link
     - Mental Health Categories on Reddit → PDF report link ("NLP Report mental health categories.pdf")
     - Movie Review Analysis for Letterboxd Data → report link
     - AI-Driven Gomoku Algorithm
     - Detection of Melanoma using Computer Vision
     - Vehicle Detection using Mask R-CNN

6. **Experience Section**
   - Position, organization, dates
   - Bullet-pointed responsibilities and achievements
   - Include: Syracuse University (Research Assistant), Intel (Graduate Technical Intern), Maven Silicon, Srijan Technologies

---

## Component Specifications

**Icons**
- Use Heroicons or similar professional icon set via CDN
- Location pin icon for "Portland, OR"
- Social media icons for GitHub, LinkedIn, Instagram

**Profile Photo**
- Square aspect ratio
- Prominent placement at top of sidebar
- Professional presentation

**Links & Interactive Elements**
- All hyperlinks styled in dark pink (#A20597)
- Clear visual distinction (underline or color)
- Smooth hover states
- Resume link prominently accessible in navigation

**Spacing & Layout**
- Consistent vertical rhythm throughout
- Clear visual separation between sections
- Generous padding in sidebar and content areas
- Clean, uncluttered presentation

---

## Responsive Design

**Desktop (>768px)**
- Fixed sidebar (30% width) + scrollable content (70% width)
- Navigation bar spans full width

**Mobile (<768px)**
- Stack layout vertically
- Sidebar becomes top section with all contact info
- Content sections follow below
- Navigation remains at top

---

## Images

**Profile Photo Only**
- Single image: Square professional headshot (provided: `2_1761261534032.jpg`)
- Positioned at top of fixed left sidebar
- No hero image - this is a simple, professional academic portfolio

**No Additional Images**
- Focus on typography and content hierarchy
- Clean, text-focused design appropriate for academic portfolio

---

## Technical Requirements

- Static HTML/CSS/JavaScript only
- Optimized for GitHub Pages deployment
- Proper file structure with index.html at root
- Linked PDF assets for resume and project reports
- External links to arXiv, GitHub, LinkedIn, Instagram
- Fast loading, accessible, professional presentation