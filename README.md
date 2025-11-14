# Adithya Neelakantan - Academic Research Portfolio

A professional academic portfolio website showcasing research in AI agents, machine learning, natural language processing, and computer vision.

## 🌐 Live Website

This website is designed to be deployed on GitHub Pages.

## 📋 Features

- **Fixed Navigation Bar** - Easy access to resume and main sections
- **Two-Column Layout** - Fixed sidebar with contact information and scrollable content area
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Accessibility** - WCAG compliant with keyboard navigation and screen reader support
- **Professional Design** - Clean Helvetica typography with academic aesthetic

## 🚀 Deployment to GitHub Pages

### Option 1: Deploy from this repository

1. Go to your repository **Settings**
2. Navigate to **Pages** (under "Code and automation")
3. Under "Build and deployment":
   - Source: Select **Deploy from a branch**
   - Branch: Select **main** (or your default branch) and **/ (root)**
   - Click **Save**
4. Your site will be published at: `https://yourusername.github.io/repository-name`

### Option 2: Deploy to github.io

1. Create a new repository named exactly: `yourusername.github.io`
   (Replace `yourusername` with your actual GitHub username)
2. Copy all files from this project to that repository
3. Push to GitHub
4. Your site will automatically be available at: `https://yourusername.github.io`

## 📁 Project Structure

```
.
├── index.html              # Main HTML file (Home page)
├── projects.html           # Academic Projects page
├── experience.html         # Experience page
├── .nojekyll              # Prevents Jekyll processing on GitHub Pages
├── css/
│   └── styles.css         # All styling
├── js/
│   └── script.js          # JavaScript functionality
├── assets/
│   └── profile-photo.jpg  # Your profile photo
├── pdfs/
│   ├── Adithya-Resume-Research.pdf
│   ├── NLP-Report-Mental-Health.pdf
│   └── Melanoma-Detection-Poster.pdf
└── README.md              # This file
```

## 🖼️ Adding Your Profile Photo

Replace `assets/profile-photo.jpg` with your own professional photo:
- Recommended size: 500x500px or larger (square format)
- Format: JPG or PNG
- Keep the filename as `profile-photo.jpg` or update the reference in `index.html`

## 🎨 Customization

### Colors
The website uses a specific color scheme defined in `css/styles.css`:
- Background: White (#FFFFFF)
- Text: Black (#000000)
- Links/Accents: Dark Pink (#A20597)

To change colors, search and replace these hex values in the CSS file.

### Typography
The website uses Helvetica font at 18px base size. To change the font:
1. Open `css/styles.css`
2. Find the `body` rule
3. Update the `font-family` property

### Content
Content is spread across multiple pages:
- `index.html` - Home page with About, Updates, Research Vision, and Publications
- `projects.html` - Academic Projects page
- `experience.html` - Experience page

Update the sections in their respective HTML files.

## 📱 Responsive Breakpoints

- Desktop: > 768px (two-column layout)
- Mobile: ≤ 768px (stacked layout)

## 🔧 Local Development

To view the website locally:

1. Simply open `index.html` in your browser, or
2. Use a local server (recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with npx)
   npx serve
   ```
3. Visit `http://localhost:8000` in your browser

## ✨ Features

- **Smooth Scrolling** - Navigate sections smoothly
- **Scroll Animations** - Content fades in as you scroll
- **Responsive Navigation** - Adapts to mobile screens
- **External Link Handling** - Opens in new tabs with proper attributes
- **Accessibility Features** - Keyboard navigation, ARIA labels, reduced motion support
- **Print Optimization** - Clean print layout for CV purposes

## 📄 License

© 2025 Adithya Neelakantan. All rights reserved.

## 📞 Contact

- Email: adithya.neelakantan2001@gmail.com
- Email: aneelaka@syr.edu
- GitHub: [@adiithyaneelakantan](https://github.com/adiithyaneelakantan)
- LinkedIn: [adithyaneelakantan](https://www.linkedin.com/in/adithyaneelakantan/)
- Instagram: [@adithya.neelakantan](https://www.instagram.com/adithya.neelakantan/)

---

Built with ❤️ using pure HTML, CSS, and JavaScript
