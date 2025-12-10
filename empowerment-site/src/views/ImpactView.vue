<script setup>
import { impactPhases, impactMetrics } from '../data/content'
</script>

<template>
  <section class="impact page-section">
    <div class="section-heading">
      <p class="eyebrow">Measured progress</p>
      <h2>Impact timeline fueled by community trust.</h2>
      <p>We publish transparent dashboards and co-own data with the women we serve.</p>
    </div>
    <div class="timeline">
      <article v-for="phase in impactPhases" :key="phase.year" class="timeline-card card-elevated">
        <div v-if="phase.imageUrl" class="timeline-image">
          <img :src="phase.imageUrl" :alt="phase.title" />
        </div>
        <div class="timeline-content">
          <p class="timeline-year">{{ phase.year }}</p>
          <h3>{{ phase.title }}</h3>
          <p>{{ phase.description }}</p>
        </div>
      </article>
    </div>
  </section>

  <section class="impact-metrics page-section">
    <div class="section-heading">
      <p class="eyebrow">Accountability in numbers</p>
      <h2>Transparent dashboards updated quarterly.</h2>
      <p>Every data point is audited with community councils and independent evaluators.</p>
    </div>
    <div class="metric-grid">
      <article v-for="metric in impactMetrics" :key="metric.label" class="metric-card card-elevated">
        <p class="metric-value">{{ metric.value }}</p>
        <h3>{{ metric.label }}</h3>
        <p>{{ metric.description }}</p>
      </article>
    </div>
  </section>
</template>
