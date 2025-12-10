<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { navLinks } from './data/content'
import { useStructuredData } from './composables/useStructuredData'

const mobileNavOpen = ref(false)
const showBackToTop = ref(false)

const toggleMenu = () => {
  mobileNavOpen.value = !mobileNavOpen.value
}

const closeMenu = () => {
  mobileNavOpen.value = false
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300
}

const { addStructuredData, createOrganizationSchema, createWebSiteSchema } = useStructuredData()

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Add Organization Schema
  const organizationSchema = createOrganizationSchema({
    name: 'SheEmpower Global',
    description: 'Women Empowerment & Safety Foundation. Empowering women through skills, safety, and solidarity.',
    url: window.location.origin,
    logo: window.location.origin + '/sheempower-logo.png',
    contactPoint: {
      telephone: '+1-800-225-1234',
      contactType: 'Customer Service',
      email: 'hello@wesfoundation.org'
    },
    sameAs: [
      'https://www.facebook.com',
      'https://twitter.com',
      'https://www.instagram.com',
      'https://www.linkedin.com',
      'https://www.youtube.com'
    ]
  })
  addStructuredData(organizationSchema, 'organization-schema')
  
  // Add WebSite Schema
  const websiteSchema = createWebSiteSchema({
    name: 'SheEmpower Global',
    url: window.location.origin,
    description: 'Women Empowerment & Safety Foundation. Empowering women through skills, safety, and solidarity.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: window.location.origin + '/blog?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  })
  addStructuredData(websiteSchema, 'website-schema')
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="app-shell">
    <header class="site-header">
      <RouterLink class="brand brand-link" to="/" @click="closeMenu">
        <img src="/sheempower-logo.png" alt="SheEmpower Global logo" class="logo-image" />
        <div>
          <p class="brand-title">SheEmpower Global</p>
          <p class="brand-subtitle">Women Empowerment & Safety Foundation</p>
        </div>
      </RouterLink>

      <nav :class="['nav-links', mobileNavOpen ? 'is-open' : '']">
        <RouterLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.to"
          @click="closeMenu"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="header-cta">
        <RouterLink class="btn ghost hide-mobile" to="/resources">Need help?</RouterLink>
        <RouterLink class="btn primary" to="/get-involved">Donate now</RouterLink>
        <button
          class="menu-toggle"
          :class="{ 'is-open': mobileNavOpen }"
          @click="toggleMenu"
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>

    <main class="view-container">
      <Transition name="fade-slide" mode="out-in">
        <RouterView />
      </Transition>
    </main>

    <footer class="site-footer">
      <!-- Emergency Banner -->
      <div class="footer-emergency-banner">
        <p class="emergency-text">🆘 IN CRISIS? WE'RE HERE 24/7</p>
        <div class="emergency-actions">
          <RouterLink class="btn emergency" to="/resources">Call Now</RouterLink>
          <RouterLink class="btn emergency-secondary" to="/resources">Live Chat</RouterLink>
        </div>
        <p class="emergency-subtitle">"You are not alone. Help is one click away."</p>
      </div>

      <!-- Main Footer Content -->
      <div class="footer-main">
        <!-- Column 1: Brand & Mission -->
        <div class="footer-column footer-brand">
          <img src="/sheempower-logo.png" alt="SheEmpower Global" class="footer-logo" />
          <p class="brand-title">Women Empowerment & Safety Foundation</p>
          <p class="brand-subtitle">
            Empowering women through skills, safety, and solidarity.
          </p>
          <p class="footer-nonprofit-badge">501(c)(3) Nonprofit Organization</p>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="footer-column">
          <p class="footer-heading">Quick Links</p>
          <nav class="footer-nav">
            <RouterLink to="/programs">Our Programs</RouterLink>
            <RouterLink to="/impact">Impact Stories</RouterLink>
            <RouterLink to="/get-involved">Get Involved</RouterLink>
            <RouterLink to="/resources">Resources</RouterLink>
            <RouterLink to="/stories">Testimonials</RouterLink>
            <RouterLink to="/blog">Blog</RouterLink>
          </nav>
        </div>

        <!-- Column 3: Get Help -->
        <div class="footer-column">
          <p class="footer-heading">Get Help Now</p>
          <div class="footer-contact">
            <a href="tel:+18002251234" class="footer-contact-item">
              <span class="contact-icon">📞</span>
              <span>1-800-225-1234</span>
            </a>
            <a href="mailto:hello@wesfoundation.org" class="footer-contact-item">
              <span class="contact-icon">📧</span>
              <span>hello@wesfoundation.org</span>
            </a>
            <RouterLink to="/resources" class="footer-contact-item">
              <span class="contact-icon">📍</span>
              <span>Find a Resource Center</span>
            </RouterLink>
          </div>
        </div>

        <!-- Column 4: Connect -->
        <div class="footer-column">
          <p class="footer-heading">Connect With Us</p>
          <div class="footer-social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" class="social-icon social-icon-facebook" aria-label="Facebook" title="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-icon social-icon-twitter" aria-label="Twitter" title="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="social-icon social-icon-instagram" aria-label="Instagram" title="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" class="social-icon social-icon-linkedin" aria-label="LinkedIn" title="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" class="social-icon social-icon-youtube" aria-label="YouTube" title="YouTube">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/>
              </svg>
            </a>
          </div>
          <p class="footer-address">
            120 Civic Plaza, Suite 400<br />
            San Francisco, CA 94105
          </p>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p class="footer-meta">
          © {{ currentYear }} Women Empowerment & Safety Foundation. All rights reserved.
        </p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>

    <RouterLink class="floating-help" to="/resources">
      Need help fast?
    </RouterLink>

    <button
      v-if="showBackToTop"
      class="back-to-top"
      @click="scrollToTop"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  </div>
</template>
