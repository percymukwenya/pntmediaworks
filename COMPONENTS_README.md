# Shared Components System

This website now uses a JavaScript-based shared component system for the header and footer.

## How It Works

- **Header**: `/components/header.html`
- **Footer**: `/components/footer.html`
- **Loader**: `/js/components.js`

All HTML pages load these shared components automatically using JavaScript.

## Testing Locally

**Important**: Due to browser CORS restrictions, you cannot open HTML files directly (file:// protocol). You must serve them via HTTP.

### Option 1: Python HTTP Server (Easiest)

```bash
# Python 3
python3 -m http.server 8000

# Then visit: http://localhost:8000
```

### Option 2: PHP Built-in Server

```bash
php -S localhost:8000

# Then visit: http://localhost:8000
```

### Option 3: Node.js HTTP Server

```bash
# Install globally
npm install -g http-server

# Run
http-server -p 8000

# Then visit: http://localhost:8000
```

## Editing Header or Footer

To update the header or footer across the entire site:

1. Edit `/components/header.html` or `/components/footer.html`
2. Refresh any page - changes appear everywhere instantly!

## Benefits

✅ **Single Source of Truth**: Edit once, updates everywhere
✅ **Easy Maintenance**: No need to update 16+ HTML files
✅ **Consistency**: Header and footer always match
✅ **Works on Any Hosting**: No server-side requirements beyond static file serving

## Deployment

Works on all static hosting platforms:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any web server (Apache, Nginx, etc.)

No special configuration needed - just upload all files and folders.

## Files Modified

All `.html` files now use:
- `<div id="header-placeholder"></div>` for the header
- `<div id="footer-placeholder"></div>` for the footer
- `<script src="js/components.js"></script>` to load components
