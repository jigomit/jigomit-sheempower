import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

export function useSEO(data) {
  const route = useRoute()

  const updateMetaTag = (name, content, attribute = 'name') => {
    let element = document.querySelector(`meta[${attribute}="${name}"]`)
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attribute, name)
      document.head.appendChild(element)
    }
    element.setAttribute('content', content)
  }

  const updateTitle = (title) => {
    document.title = title
  }

  const updateSEO = () => {
    // Update title
    updateTitle(data.value.title)

    // Update basic meta tags
    updateMetaTag('description', data.value.description)
    if (data.value.keywords && data.value.keywords.length > 0) {
      updateMetaTag('keywords', data.value.keywords.join(', '))
    }
    if (data.value.author) {
      updateMetaTag('author', data.value.author)
    }

    // Update Open Graph tags
    updateMetaTag('og:title', data.value.title, 'property')
    updateMetaTag('og:description', data.value.description, 'property')
    updateMetaTag('og:type', data.value.type || 'website', 'property')
    if (data.value.image) {
      updateMetaTag('og:image', data.value.image, 'property')
    }
    if (data.value.url) {
      updateMetaTag('og:url', data.value.url, 'property')
    } else {
      // Use current URL
      const currentUrl = window.location.origin + route.path
      updateMetaTag('og:url', currentUrl, 'property')
    }

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', data.value.title)
    updateMetaTag('twitter:description', data.value.description)
    if (data.value.image) {
      updateMetaTag('twitter:image', data.value.image)
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    const canonicalUrl = data.value.url || (window.location.origin + route.path)
    canonical.setAttribute('href', canonicalUrl)
  }

  onMounted(() => {
    updateSEO()
  })

  watch(() => [data.value.title, data.value.description, data.value.keywords, data.value.image], () => {
    updateSEO()
  }, { deep: true })

  return {
    updateSEO
  }
}
