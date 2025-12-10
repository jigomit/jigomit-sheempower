<script setup>
import { blogPosts } from '../data/content'
</script>

<template>
  <section class="blog page-section">
    <div class="section-heading">
      <p class="eyebrow">Blog & Resources</p>
      <h1>Best Practices for Women's Safety and Empowerment</h1>
      <p>Expert insights, safety tips, and empowering stories to help women thrive safely.</p>
    </div>

    <div class="blog-grid">
      <RouterLink
        v-for="post in blogPosts"
        :key="post.id"
        :to="`/blog/${post.slug}`"
        class="blog-card-link"
      >
        <article class="blog-card card-elevated">
          <div v-if="post.imageUrl" class="blog-image">
            <img :src="post.imageUrl" :alt="post.title" loading="lazy" />
          </div>
          <div class="blog-content">
            <div class="blog-meta">
              <span class="blog-date">{{ post.date }}</span>
              <span class="blog-author">By {{ post.author }}</span>
            </div>
            <h2>{{ post.title }}</h2>
            <p class="blog-excerpt">{{ post.excerpt }}</p>
            <div class="blog-tags">
              <span v-for="tag in post.tags" :key="tag" class="blog-tag">{{ tag }}</span>
            </div>
            <div class="link-arrow">
              Read full article
              <span aria-hidden="true">→</span>
            </div>
          </div>
        </article>
      </RouterLink>
    </div>
  </section>
</template>

