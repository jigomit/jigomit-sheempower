<script setup>
import { programs, initiatives } from '../data/content'
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="programs page-section">
    <div class="section-heading">
      <p class="eyebrow">Holistic programming</p>
      <h2>From urgent safety to long-term opportunity.</h2>
      <p>Each program is co-designed with survivors, employers, and civic partners to deliver measurable change.</p>
    </div>
    <div class="program-grid">
      <article v-for="program in programs" :key="program.title" class="program-card card-elevated">
        <div v-if="program.imageUrl" class="program-image">
          <img :src="program.imageUrl" :alt="program.title" />
        </div>
        <div class="program-content">
          <div class="program-icon">
            <svg v-if="program.icon === 'skill'" viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H12v16H6.5A2.5 2.5 0 0 1 4 17.5v-11Z" />
              <path d="M12 4h5.5A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20H12" />
              <path d="M7 8h3m-3 4h3" />
            </svg>
            <svg v-else-if="program.icon === 'shield'" viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M12 4 5 6v6c0 4.418 2.686 7.896 7 9 4.314-1.104 7-4.582 7-9V6l-7-2Z" />
              <path d="M12 9v7m-3-3h6" />
            </svg>
            <svg v-else-if="program.icon === 'phone'" viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path
                d="M17.5 21h-1.2a3 3 0 0 1-2.62-1.52l-.84-1.45a2 2 0 0 1 .54-2.6l1-.75a.9.9 0 0 0 .2-1.28L12 8.5a.9.9 0 0 0-1.28-.2l-1 .75a2 2 0 0 1-2.6-.54l-.84-1.45A3 3 0 0 1 6.5 4.2V3.5"
              />
              <path d="M15 3h4v4m0 4v5.5a4.5 4.5 0 0 1-4.5 4.5" />
            </svg>
            <svg v-else viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M5 7h14v12H5z" />
              <path d="M9 3h6v4H9zM9 11h6" />
            </svg>
          </div>
          <p class="program-focus">{{ program.focus }}</p>
          <h3>{{ program.title }}</h3>
          <p>{{ program.description }}</p>
          <ul v-if="program.pillars" class="pillars">
            <li v-for="pillar in program.pillars" :key="pillar">{{ pillar }}</li>
          </ul>
          <p v-if="program.stats" class="program-stat">{{ program.stats }}</p>
          <RouterLink to="/get-involved" class="link-arrow">
            Explore this program
            <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
      </article>
    </div>
  </section>

  <section class="initiatives page-section">
    <div class="section-heading">
      <p class="eyebrow">Signature initiatives</p>
      <h2>Systems change alongside direct services.</h2>
      <p>We amplify survivor leadership through technology pilots, policy labs, and employer alliances.</p>
    </div>
    <div class="initiative-grid">
      <article v-for="initiative in initiatives" :key="initiative.title" class="initiative-card card-elevated">
        <div v-if="initiative.imageUrl" class="initiative-image">
          <img :src="initiative.imageUrl" :alt="initiative.title" />
        </div>
        <div class="initiative-content">
          <p class="pill">{{ initiative.theme }}</p>
          <h3>{{ initiative.title }}</h3>
          <p>{{ initiative.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
