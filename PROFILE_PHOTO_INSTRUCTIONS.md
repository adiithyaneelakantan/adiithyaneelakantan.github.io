# Profile Photo Instructions

## Current Status
The portfolio currently uses a placeholder SVG image. To add your actual profile photo:

## Steps to Add Your Profile Photo

1. **Prepare your image:**
   - Use a professional headshot or graduation photo
   - Recommended size: 400x400 pixels or larger (square aspect ratio works best)
   - Format: JPG or PNG
   - File size: Keep under 500KB for fast loading

2. **Replace the placeholder:**
   - Save your image as `assets/profile-photo.jpg`
   - The HTML file (`index.html`) already references this path
   - If the image fails to load, a placeholder with initials "AN" will be shown

3. **Alternative formats:**
   - If you prefer PNG: Save as `assets/profile-photo.png` and update line 58 in `index.html` to reference `.png` instead of `.jpg`
   - If you prefer SVG: Save as `assets/profile-photo.svg` and update the reference in `index.html`

## Current Image Reference
The profile photo is referenced in `index.html` at line 58:
```html
<img src="assets/profile-photo.jpg" alt="Adithya Neelakantan Profile Photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
```

## Testing
After adding your photo:
1. Refresh the browser (the server is running at http://localhost:8000)
2. Check that the image displays correctly
3. Test the fallback by temporarily renaming the file to verify the placeholder appears

