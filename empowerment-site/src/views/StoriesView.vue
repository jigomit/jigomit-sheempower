<script setup>
import { stories } from '../data/content'
</script>

<template>
  <section class="stories page-section">
    <div class="section-heading">
      <p class="eyebrow">Voices</p>
      <h2>Stories of courage and possibility.</h2>
      <p>Our storytelling policy centers consent, privacy, and collective healing.</p>
    </div>
    <div class="stories-track">
      <article v-for="story in stories" :key="story.name" class="story-card card-elevated">
        <div v-if="story.imageUrl" class="story-image">
          <img :src="story.imageUrl" :alt="story.name" />
        </div>
        <div class="story-content">
          <p class="quote">"{{ story.quote }}"</p>
          <div class="story-meta">
            <strong>{{ story.name }}</strong>
            <span>{{ story.location }}</span>
            <span class="program-chip">{{ story.program }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
