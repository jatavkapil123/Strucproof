# Hostinger Deployment Guide

## Files to Upload
Upload all contents of the `dist` folder to your Hostinger `public_html` directory:

### Required Files:
- index.html (main entry point)
- All files in `dist/assets/` folder
- All image files (.jpg, .png, .ico)
- manifest.json
- robots.txt
- .htaccess (for SPA routing)

## Steps:
1. Log into Hostinger hPanel
2. Open File Manager
3. Navigate to `public_html`
4. Upload all files from the `dist` folder
5. Ensure `.htaccess` is uploaded for proper routing
6. Test your website at your domain

## Important Notes:
- The `.htaccess` file ensures React Router works properly
- All assets are optimized and ready for production
- Your website will be accessible at your domain once uploaded

## File Structure on Server:
```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-DSt93KOG.js
│   ├── index-7ELdx7Ln.css
│   └── [other optimized assets]
├── [all image files]
├── manifest.json
└── robots.txt
```