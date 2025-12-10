<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { stats, impactMetrics, newsHighlights, galleryShots } from '../data/content'

// Animated counter functionality
const animatedStats = ref(stats.map(() => 0))
const statsAnimated = ref(false)

const animateValue = (index, start, end, duration) => {
  const startTime = performance.now()
  const animate = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easeOutQuad = progress * (2 - progress)
    animatedStats.value[index] = Math.floor(easeOutQuad * (end - start) + start)

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }
  requestAnimationFrame(animate)
}

const parseStatValue = (value) => {
  const numStr = value.replace(/[^\d.]/g, '')
  const multiplier = value.includes('K') ? 1000 : value.includes('M') ? 1000000 : 1
  return parseFloat(numStr) * multiplier
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated.value) {
        statsAnimated.value = true
        stats.forEach((stat, index) => {
          const endValue = parseStatValue(stat.value)
          animateValue(index, 0, endValue, 2000)
        })
        observer.disconnect()
      }
    })
  }, { threshold: 0.3 })

  const statsSection = document.querySelector('.hero-stats')
  if (statsSection) {
    observer.observe(statsSection)
  }
})

const formatStatValue = (value, originalValue) => {
  if (originalValue.includes('K')) {
    return (value / 1000).toFixed(1) + 'K+'
  } else if (originalValue.includes('M')) {
    return (value / 1000000).toFixed(1) + 'M+'
  }
  return value.toString()
}
</script>

<template>
  <section class="hero">
    <div class="hero-copy">
      <h1>Future-proof safety, careers, and confidence for every woman.</h1>
      <p class="lead">
        We power skill training, self-defense, harassment helplines, and career support so that women can thrive without
        fear. Together we are designing safer cities and equitable workplaces.
      </p>
      <div class="hero-cta">
        <RouterLink class="btn primary" to="/programs">Explore programs</RouterLink>
        <RouterLink class="btn secondary" to="/impact">See our impact</RouterLink>
      </div>
      <div class="hero-stats">
        <div v-for="(stat, index) in stats" :key="stat.label" class="stat-card">
          <p class="stat-value">{{ formatStatValue(animatedStats[index], stat.value) }}</p>
          <p class="stat-label">{{ stat.label }}</p>
          <p class="stat-detail">{{ stat.detail }}</p>
        </div>
      </div>
    </div>
    <div class="hero-visual">
        <div class="hero-photo">
          <img
            src="https://togetherthrive.info/public/Img/about-banner.png"
            alt="Women in technology and leadership collaborating on empowerment initiatives"
          />
        </div>
      <div class="impact-card">
        <p>90% of participants reported feeling safer at work within 6 months.</p>
        <div class="impact-badge">
          <span>Safety Index</span>
          <strong>+42%</strong>
        </div>
      </div>
    </div>
  </section>

  <section class="home-impact page-section">
    <div class="section-heading">
      <p class="eyebrow">Global pulse</p>
      <h2>Stronger networks mean safer futures.</h2>
      <p>We combine hard data, lived experience, and civic partnerships to drive accountability.</p>
    </div>
    <div class="metric-grid">
      <article v-for="metric in impactMetrics" :key="metric.label" class="metric-card card-elevated">
        <p class="metric-value">{{ metric.value }}</p>
        <h3>{{ metric.label }}</h3>
        <p>{{ metric.description }}</p>
      </article>
    </div>
    <div class="metric-poster">
      <img
        src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=compress&cs=tinysrgb&w=1600"
        alt="Women marching together for equality and empowerment"
        loading="lazy"
      />
      <div class="poster-caption">
        <strong>Power • Equality</strong>
        <p>Our grassroots safety pods begin with community-led protest, policy, and solidarity.</p>
      </div>
    </div>
  </section>

  <section class="news-spotlight page-section">
    <div class="section-heading">
      <p class="eyebrow">In the press</p>
      <h2>Leaders spotlight our safety innovations.</h2>
      <p>Journalists and partners cover how women are rewriting the rules of safety and opportunity.</p>
    </div>
    <div class="news-grid">
      <article v-for="item in newsHighlights" :key="item.title" class="news-card card-elevated">
        <div class="news-meta">
          <span class="news-tag">{{ item.tag }}</span>
          <p class="news-outlet">{{ item.outlet }} • {{ item.date }}</p>
        </div>
        <h3>{{ item.title }}</h3>
        <a class="link-arrow" :href="item.link">
          Read feature
          <span aria-hidden="true">→</span>
        </a>
      </article>
    </div>
  </section>

  <section class="movement-banner page-section">
    <figure>
      <img
        src="https://plus.unsplash.com/premium_photo-1661488569775-2f16dbefca71?auto=format&fit=crop&w=1600&q=80"
        alt="Women holding a banner during a demonstration"
        loading="lazy"
      />
      <figcaption>
        <strong>Women. Safety. Solidarity.</strong>
        <p>Our rallies, helpline pods, and policy councils are led by women who demand change together.</p>
      </figcaption>
    </figure>
  </section>

  <section class="image-gallery page-section">
    <div class="section-heading">
      <p class="eyebrow">On the ground</p>
      <h2>Faces of SheEmpower Global.</h2>
      <p>Real moments from safety trainings, helpline hubs, and career labs across four continents.</p>
    </div>
    <div class="gallery-grid">
      <figure v-for="shot in galleryShots" :key="shot.src" class="gallery-card">
        <img :src="shot.src" :alt="shot.alt" loading="lazy" />
        <figcaption>
          <p>{{ shot.caption }}</p>
          <span>{{ shot.location }}</span>
        </figcaption>
      </figure>
    </div>
  </section>
</template>
