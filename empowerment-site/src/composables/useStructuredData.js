export function useStructuredData() {
  const addStructuredData = (schema, id) => {
    const scriptId = id || `structured-data-${Date.now()}`

    // Remove existing script with same ID if it exists
    const existing = document.getElementById(scriptId)
    if (existing) {
      existing.remove()
    }

    const script = document.createElement('script')
    script.id = scriptId
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
  }

  const createOrganizationSchema = (data) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: data.name,
      ...(data.url && { url: data.url }),
      ...(data.logo && { logo: data.logo }),
      ...(data.description && { description: data.description }),
      ...(data.contactPoint && {
        contactPoint: {
          '@type': 'ContactPoint',
          ...data.contactPoint
        }
      }),
      ...(data.sameAs && { sameAs: data.sameAs })
    }
  }

  const createArticleSchema = (data, url) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.headline,
      description: data.description,
      ...(data.image && { image: data.image }),
      author: {
        '@type': data.author.type || 'Organization',
        name: data.author.name
      },
      datePublished: data.datePublished,
      ...(data.dateModified && { dateModified: data.dateModified }),
      publisher: {
        '@type': 'Organization',
        name: data.publisher.name,
        ...(data.publisher.logo && {
          logo: {
            '@type': 'ImageObject',
            url: data.publisher.logo.url
          }
        })
      },
      ...(data.mainEntityOfPage && { mainEntityOfPage: data.mainEntityOfPage }),
      ...(url && { url: url })
    }
  }

  const createBreadcrumbSchema = (data) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: data.itemListElement.map(item => ({
        '@type': 'ListItem',
        position: item.position,
        name: item.name,
        item: item.item
      }))
    }
  }

  const createWebSiteSchema = (data) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: data.name,
      ...(data.url && { url: data.url }),
      ...(data.description && { description: data.description }),
      ...(data.potentialAction && { potentialAction: data.potentialAction })
    }
  }

  const createFAQSchema = (data) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.questions.map(q => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: q.answer
        }
      }))
    }
  }

  return {
    addStructuredData,
    createOrganizationSchema,
    createArticleSchema,
    createBreadcrumbSchema,
    createWebSiteSchema,
    createFAQSchema
  }
}
