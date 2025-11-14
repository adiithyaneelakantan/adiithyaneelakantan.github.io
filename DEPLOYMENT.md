# GitHub Pages Deployment Guide

## Quick Start - Deploy in 3 Steps

### Step 1: Create Your GitHub Repository

Choose ONE of these options:

#### Option A: Personal Website (Recommended for Portfolio)
1. Create a new repository named: `yourusername.github.io`
   - Replace `yourusername` with your actual GitHub username
   - This will be accessible at: `https://yourusername.github.io`

#### Option B: Project Website
1. Create a new repository with any name (e.g., `portfolio`, `research-website`)
   - This will be accessible at: `https://yourusername.github.io/repository-name`

### Step 2: Upload Your Files

**Using Git (Command Line):**

```bash
# Navigate to your website directory
cd path/to/your/website

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Academic research portfolio"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Using GitHub Web Interface:**

1. Go to your repository on GitHub
2. Click "Add file" → "Upload files"
3. Drag and drop ALL files and folders:
   - `index.html`
   - `css/` folder
   - `js/` folder
   - `assets/` folder
   - `pdfs/` folder
   - `README.md`
4. Click "Commit changes"

### Step 3: Enable GitHub Pages

1. Go to your repository **Settings**
2. Click on **Pages** in the left sidebar
3. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `main` and `/ (root)`
   - Click **Save**
4. Wait 1-2 minutes for deployment
5. Your site will be live! GitHub will show the URL at the top of the Pages settings

## Before You Deploy - Checklist

- [ ] Add your profile photo to `assets/profile-photo.jpg`
- [ ] Verify all PDFs are in the `pdfs/` folder
- [ ] Update any personal information in `index.html` if needed
- [ ] Test the website locally by opening `index.html` in a browser

## Custom Domain (Optional)

To use your own domain (e.g., `adithyaneelakantan.com`):

1. Add a file named `CNAME` (no extension) to the root directory
2. Inside the file, put only your domain name:
   ```
   yourdomain.com
   ```
3. In your domain registrar (GoDaddy, Namecheap, etc.), add DNS records:
   - **A Record**: Point to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **CNAME Record** (for www): Point to `yourusername.github.io`
4. In GitHub repository settings → Pages, enter your custom domain
5. Enable "Enforce HTTPS"

## Updating Your Website

After making changes to your website:

```bash
# Make your changes to the files
# Then commit and push:

git add .
git commit -m "Update: describe your changes"
git push
```

Your changes will be live in 1-2 minutes!

## Troubleshooting

### Website not loading?
- Wait 2-3 minutes after enabling Pages
- Check that `index.html` is in the root directory (not in a subfolder)
- Verify the branch is set to `main` and path to `/ (root)`

### Images not showing?
- Check that file paths are correct (case-sensitive!)
- Verify images are committed to the repository
- Open browser console (F12) to see any errors

### PDFs not downloading?
- Make sure PDFs are in the `pdfs/` folder
- Check that file names match exactly (including spaces and case)
- Verify PDFs are committed to the repository

### Custom domain not working?
- DNS changes can take 24-48 hours
- Verify CNAME file contains only the domain (no http://, no trailing slash)
- Check DNS records with a tool like `nslookup yourdomain.com`

## Testing Locally

### Method 1: Direct Open
Simply double-click `index.html` to open in your browser

### Method 2: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

```bash
# Using Node.js
npx serve

# Then visit the URL shown
```

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Community Forum](https://github.community)
- Check the main README.md for more details

---

Good luck with your deployment! 🚀
