<script setup>
import { ref, computed } from 'vue'
import { donationTiers, partners, volunteerTracks } from '../data/content'

const selectedTier = ref(donationTiers[1] ?? donationTiers[0])
const isRecurring = ref(false)
const supporterEmail = ref('')
const showThanks = ref(false)

const handleTierSelect = (tier) => {
  selectedTier.value = tier
}

const donationButtonText = computed(() => {
  const frequency = isRecurring.value ? 'monthly' : 'once'
  return `Give $${selectedTier.value.amount} ${frequency}`
})

const impactMessage = computed(() => {
  if (isRecurring.value) {
    const monthlyAmount = selectedTier.value.amount
    const annualImpact = monthlyAmount * 12
    return `Your monthly gift of $${monthlyAmount} provides $${annualImpact}/year in sustainable support`
  }
  return selectedTier.value.label
})

const submitForm = (event) => {
  event.preventDefault()
  if (!supporterEmail.value.trim()) {
    return
  }
  showThanks.value = true
  supporterEmail.value = ''
  setTimeout(() => {
    showThanks.value = false
  }, 3200)
}
</script>

<template>
  <section class="cta-panel page-section">
    <div class="cta-copy">
      <p class="eyebrow">Invest in safety & opportunity</p>
      <h2>Pick an impact tier or volunteer your expertise.</h2>
      <p>Every contribution equips women with the skills, tools, and allies they deserve.</p>

      <!-- Recurring Donation Toggle -->
      <div class="donation-frequency-toggle">
        <button
          :class="['frequency-option', !isRecurring ? 'active' : '']"
          @click="isRecurring = false"
        >
          One-time
        </button>
        <button
          :class="['frequency-option', isRecurring ? 'active' : '']"
          @click="isRecurring = true"
        >
          Monthly
          <span class="badge">Recommended</span>
        </button>
      </div>

      <div class="tiers">
        <button
          v-for="tier in donationTiers"
          :key="tier.amount"
          :class="['tier', selectedTier.amount === tier.amount ? 'is-selected' : '']"
          @click="handleTierSelect(tier)"
        >
          <strong>${{ tier.amount }}</strong>
          <span>{{ impactMessage }}</span>
        </button>
      </div>
      <div class="cta-buttons">
        <a class="btn primary" href="#">{{ donationButtonText }}</a>
        <a class="btn secondary" href="#">Become a mentor</a>
      </div>
    </div>
    <div class="cta-form">
      <h3>Stay in the loop</h3>
      <p>Monthly field notes, emergency action alerts, and volunteer openings.</p>
      <form @submit="submitForm">
        <label for="email">Work or personal email</label>
        <input
          id="email"
          v-model="supporterEmail"
          type="email"
          placeholder="you@email.com"
          required
        />
        <button type="submit" class="btn primary">Count me in</button>
      </form>
      <p v-if="showThanks" class="form-success">Thank you for standing with women everywhere.</p>
      <div class="partners">
        <p class="eyebrow">Trusted partners</p>
        <div class="partner-cards">
          <div
            v-for="partner in partners"
            :key="partner.name"
            class="partner-card"
          >
            <div class="partner-icon">
              <img v-if="partner.logo" :src="partner.logo" :alt="partner.name.replace('\n', ' ')" />
              <div v-else class="partner-placeholder">📄</div>
            </div>
            <div class="partner-name" v-html="partner.name.replace('\n', '<br />')"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="volunteer-tracks page-section">
    <div class="section-heading">
      <p class="eyebrow">Volunteer pathways</p>
      <h2>Bring your skills to women on the frontlines.</h2>
      <p>Flexible commitments and remote-friendly options make it easy to plug in.</p>
    </div>
    <div class="track-grid">
      <article v-for="track in volunteerTracks" :key="track.title" class="track-card card-elevated">
        <h3>{{ track.title }}</h3>
        <p>{{ track.description }}</p>
        <p class="track-commitment">{{ track.commitment }}</p>
      </article>
    </div>
  </section>
</template>
