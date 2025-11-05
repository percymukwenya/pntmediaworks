/**
 * Shared Components Loader
 * Loads header and footer from separate HTML files
 */

(function() {
  'use strict';

  // Load component HTML
  function loadComponent(url, targetId) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load ${url}: ${response.status}`);
        }
        return response.text();
      })
      .then(html => {
        const target = document.getElementById(targetId);
        if (target) {
          target.innerHTML = html;
        }
      })
      .catch(error => {
        console.error('Error loading component:', error);
      });
  }

  // Load components when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComponents);
  } else {
    initComponents();
  }

  function initComponents() {
    // Load header
    if (document.getElementById('header-placeholder')) {
      loadComponent('components/header.html', 'header-placeholder');
    }

    // Load footer
    if (document.getElementById('footer-placeholder')) {
      loadComponent('components/footer.html', 'footer-placeholder');
    }
  }
})();
