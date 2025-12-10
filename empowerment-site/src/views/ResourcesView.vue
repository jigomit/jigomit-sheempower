<script setup>
import { onMounted } from 'vue'
import { faqs, quickLinks, resources, resourceCenters } from '../data/content'
import { useStructuredData } from '../composables/useStructuredData'

const { addStructuredData, createFAQSchema } = useStructuredData()

onMounted(() => {
  // Add FAQ Structured Data
  const faqSchema = createFAQSchema({
    questions: faqs.map(faq => ({
      question: faq.question,
      answer: faq.answer
    }))
  })
  addStructuredData(faqSchema, 'resources-faq-schema')
})
</script>

<template>
  <section class="resources page-section">
    <div class="section-heading">
      <p class="eyebrow">24/7 resources</p>
      <h2>Reach our safety team however you need.</h2>
      <p>All channels encrypt personal data and include trauma-informed advocates.</p>
    </div>
    <div class="resources-grid">
      <article v-for="resource in resources" :key="resource.label" class="resource-card card-elevated">
        <p class="resource-label">{{ resource.label }}</p>
        <p class="resource-value">{{ resource.value }}</p>
        <button class="btn secondary">{{ resource.action }}</button>
        <p class="resource-type">Available via {{ resource.type }}</p>
      </article>
      <article class="resource-card card-elevated highlight">
        <h3>Fast answers</h3>
        <details v-for="faq in faqs" :key="faq.question">
          <summary>{{ faq.question }}</summary>
          <p>{{ faq.answer }}</p>
        </details>
      </article>
    </div>
    <div class="quick-links">
      <p class="eyebrow">Toolkits</p>
      <div class="chip-row">
        <span v-for="item in quickLinks" :key="item" class="chip">{{ item }}</span>
      </div>
    </div>

    <div class="resource-centers">
      <p class="eyebrow">Regional response hubs</p>
      <div class="center-grid">
        <article v-for="center in resourceCenters" :key="center.city" class="center-card card-elevated">
          <div v-if="center.imageUrl" class="center-image">
            <img :src="center.imageUrl" :alt="center.hub" />
          </div>
          <div class="center-content">
            <h3>{{ center.hub }}</h3>
            <p class="center-city">{{ center.city }}</p>
            <p>Lead advocate: {{ center.lead }}</p>
            <p>Hours: {{ center.hours }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
