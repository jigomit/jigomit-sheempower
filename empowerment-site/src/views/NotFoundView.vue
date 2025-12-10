<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="not-found-view">
    <div class="not-found-content">
      <h1 class="not-found-title">404</h1>
      <h2 class="not-found-subtitle">Page Not Found</h2>
      <p class="not-found-message">
        Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
      </p>
      <div class="not-found-actions">
        <RouterLink to="/" class="btn primary">Go Home</RouterLink>
        <RouterLink to="/resources" class="btn ghost">Get Help</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found-view {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.not-found-content {
  text-align: center;
  max-width: 600px;
}

.not-found-title {
  font-size: 8rem;
  font-weight: 700;
  color: var(--color-primary, #e91e63);
  margin: 0;
  line-height: 1;
}

.not-found-subtitle {
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem 0;
  color: var(--color-text, #333);
}

.not-found-message {
  font-size: 1.125rem;
  color: var(--color-text-secondary, #666);
  margin: 1.5rem 0 2.5rem;
  line-height: 1.6;
}

.not-found-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .not-found-title {
    font-size: 5rem;
  }
  
  .not-found-subtitle {
    font-size: 1.5rem;
  }
  
  .not-found-actions {
    flex-direction: column;
  }
  
  .not-found-actions .btn {
    width: 100%;
  }
}
</style>

