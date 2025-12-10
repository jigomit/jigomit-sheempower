<script setup>
import { useRoute } from 'vue-router'
import { blogPosts } from '../data/content'
import { computed, watchEffect, ref } from 'vue'
import { useSEO } from '../composables/useSEO'
import { useStructuredData } from '../composables/useStructuredData'

const route = useRoute()
const { addStructuredData, createArticleSchema, createBreadcrumbSchema } = useStructuredData()

const post = computed(() => {
  return blogPosts.find(p => p.slug === route.params.slug)
})

const baseUrl = computed(() => window.location.origin)
const currentUrl = computed(() => baseUrl.value + route.path)
const imageUrl = computed(() => {
  if (!post.value) return baseUrl.value + '/sheempower-logo.png'
  const img = post.value.imageUrl || baseUrl.value + '/sheempower-logo.png'
  return img.startsWith('http') ? img : baseUrl.value + img
})

const seoData = ref({
  title: post.value ? `${post.value.title} | SheEmpower Global` : 'Blog Post | SheEmpower Global',
  description: post.value?.excerpt || 'Read our latest blog post on women safety and empowerment.',
  keywords: post.value?.keywords || ['women safety', 'women empowerment'],
  image: imageUrl.value,
  url: currentUrl.value,
  type: 'article',
  author: post.value?.author
})

useSEO(seoData)

watchEffect(() => {
  if (post.value) {
    const base = window.location.origin
    const url = base + route.path
    const img = post.value.imageUrl || base + '/sheempower-logo.png'
    const fullImageUrl = img.startsWith('http') ? img : base + img
    
    // Update SEO data
    seoData.value = {
      title: `${post.value.title} | SheEmpower Global`,
      description: post.value.excerpt,
      keywords: post.value.keywords,
      image: fullImageUrl,
      url: url,
      type: 'article',
      author: post.value.author
    }
    
    // Add Article structured data
    const articleSchema = createArticleSchema({
      headline: post.value.title,
      description: post.value.excerpt,
      image: fullImageUrl,
      author: {
        name: post.value.author,
        type: 'Organization'
      },
      datePublished: new Date(post.value.date).toISOString(),
      dateModified: new Date(post.value.date).toISOString(),
      publisher: {
        name: 'SheEmpower Global',
        logo: {
          url: base + '/sheempower-logo.png'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url
      }
    }, url)
    addStructuredData(articleSchema, 'article-schema')
    
    // Add Breadcrumb schema
    const breadcrumbSchema = createBreadcrumbSchema({
      itemListElement: [
        {
          position: 1,
          name: 'Home',
          item: base + '/'
        },
        {
          position: 2,
          name: 'Blog',
          item: base + '/blog'
        },
        {
          position: 3,
          name: post.value.title,
          item: url
        }
      ]
    })
    addStructuredData(breadcrumbSchema, 'breadcrumb-schema')
  } else if (route.name === 'blog-post') {
    // Redirect to blog if post not found
    window.location.href = '/blog'
  }
})
</script>

<template>
  <article v-if="post" class="blog-post page-section">
    <div class="blog-post-header">
      <div class="blog-post-meta">
        <span class="blog-date">{{ post.date }}</span>
        <span class="blog-author">By {{ post.author }}</span>
      </div>
      <h1>{{ post.title }}</h1>
      <div class="blog-tags">
        <span v-for="tag in post.tags" :key="tag" class="blog-tag">{{ tag }}</span>
      </div>
    </div>

    <div v-if="post.imageUrl" class="blog-post-image">
      <img :src="post.imageUrl" :alt="post.title" loading="lazy" />
    </div>

    <div class="blog-post-content" v-html="post.content"></div>

    <div class="blog-post-footer">
      <RouterLink to="/blog" class="btn secondary">← Back to Blog</RouterLink>
    </div>
  </article>
</template>

