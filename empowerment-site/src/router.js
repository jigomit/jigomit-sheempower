import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ProgramsView from './views/ProgramsView.vue'
import ImpactView from './views/ImpactView.vue'
import ResourcesView from './views/ResourcesView.vue'
import StoriesView from './views/StoriesView.vue'
import GetInvolvedView from './views/GetInvolvedView.vue'
import BlogView from './views/BlogView.vue'
import BlogPostView from './views/BlogPostView.vue'
import NotFoundView from './views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home | SheEmpower Global - Women Empowerment & Safety Foundation',
        description: 'SheEmpower Global empowers women through skills, safety, and solidarity. Learn best practices for women\'s safety, self-defense techniques, and access resources for empowerment.',
        keywords: [
          'how to stay safe as a woman walking alone at night',
          'best women safety practices for everyday life',
          'free women empowerment programs near me',
          '24/7 women harassment helpline support',
          'women self defense training classes online',
          'how to protect yourself from street harassment',
          'community safety programs for women and girls',
          'women empowerment foundation that helps survivors',
          'where to find women safety resources and support',
          'best practices for women personal safety tips',
          'how to build confidence through women empowerment',
          'free self defense workshops for women beginners',
          'women protection strategies and safety planning',
          'support services for women facing harassment',
          'how to access free women empowerment programs'
        ],
        image: '/sheempower-logo.png'
      }
    },
    {
      path: '/programs',
      name: 'programs',
      component: ProgramsView,
      meta: {
        title: 'Programs | SheEmpower Global - Women Empowerment Programs',
        description: 'Explore our comprehensive women empowerment programs including self-defense training, skill development, career support, and community safety networks.',
        keywords: [
          'free self defense classes for women near me',
          'how to learn self defense techniques for women beginners',
          'women skill development training programs online',
          'career support services for women survivors',
          'community based safety networks for women',
          'workplace harassment helpline for women 24/7',
          'best women empowerment programs that actually work',
          'how to enroll in free women self defense training',
          'job training programs for women survivors',
          'vocational skills training for women empowerment',
          'how to access career counseling for women',
          'community defense network programs for women safety',
          'free skill building workshops for women',
          'women empowerment programs with job placement',
          'self defense training classes for women beginners step by step'
        ],
        image: '/sheempower-logo.png'
      }
    },
    {
      path: '/impact',
      name: 'impact',
      component: ImpactView,
      meta: {
        title: 'Our Impact | SheEmpower Global - Women Empowerment Results',
        description: 'See the positive impact of our women empowerment programs. Learn about the lives we\'ve changed, communities we\'ve strengthened, and the difference we\'re making together.',
        keywords: [
          'real women empowerment success stories and results',
          'how women empowerment programs change lives',
          'impact of self defense training on women confidence',
          'women safety programs that actually work',
          'community impact of women empowerment initiatives',
          'statistics on women empowerment program success rates',
          'how many women have been helped by empowerment programs',
          'measurable results of women safety training',
          'before and after women empowerment programs',
          'testimonials from women empowerment program participants',
          'how women empowerment reduces violence against women',
          'proven impact of women self defense classes',
          'community transformation through women empowerment',
          'long term effects of women safety education',
          'how women empowerment programs strengthen communities'
        ],
        image: '/sheempower-logo.png'
      }
    },
    {
      path: '/resources',
      name: 'resources',
      component: ResourcesView,
      meta: {
        title: 'Resources | SheEmpower Global - Women Safety Resources',
        description: 'Access essential resources for women\'s safety and empowerment. Find helplines, support services, safety guides, and tools to help you stay safe and empowered.',
        keywords: [
          'free women safety helpline numbers 24/7',
          'where to find emergency shelter for women near me',
          'how to access free legal aid for women survivors',
          'domestic violence support services in my area',
          'women crisis hotline that actually helps',
          'free counseling services for women survivors',
          'emergency housing assistance for women escaping abuse',
          'women safety resources and helplines near me',
          '24 hour domestic violence hotline for women',
          'how to get immediate help for domestic violence',
          'free legal services for women facing harassment',
          'where to find safe shelter for abused women',
          'women empowerment resources and support groups',
          'crisis intervention services for women in danger',
          'how to contact women harassment helpline anonymously'
        ],
        image: '/sheempower-logo.png'
      }
    },
    {
      path: '/stories',
      name: 'stories',
      component: StoriesView,
      meta: {
        title: 'Stories | SheEmpower Global - Women Empowerment Stories',
        description: 'Read inspiring stories from women who have been empowered through our programs. Real stories of courage, strength, and transformation.',
        keywords: [
          'real life women empowerment success stories',
          'how women overcame domestic violence and rebuilt their lives',
          'inspiring stories of women learning self defense',
          'women who escaped abusive relationships success stories',
          'survivor stories of women finding strength and hope',
          'how self defense training changed my life as a woman',
          'testimonials from women empowerment program graduates',
          'inspiring journey of women survivors becoming thrivers',
          'real stories of women who found safety and empowerment',
          'how women empowerment programs helped me rebuild my life',
          'courageous stories of women standing up to harassment',
          'women who transformed their lives through empowerment',
          'personal accounts of women overcoming abuse',
          'motivational stories of women finding their strength',
          'how women found hope through empowerment programs'
        ],
        image: '/sheempower-logo.png'
      }
    },
    {
      path: '/get-involved',
      name: 'get-involved',
      component: GetInvolvedView,
      meta: {
        title: 'Get Involved | SheEmpower Global - Join Our Mission',
        description: 'Join SheEmpower Global in empowering women worldwide. Donate, volunteer, or partner with us to create safer, more empowered communities for women.',
        keywords: [
          'how to donate to women empowerment organizations',
          'volunteer opportunities for women safety programs',
          'best charities for women empowerment to donate to',
          'how to become a mentor for women survivors',
          'donate to help women escape domestic violence',
          'volunteer as self defense instructor for women',
          'how to support women empowerment in my community',
          'monthly donation to women safety programs',
          'become a volunteer for women harassment helpline',
          'sponsor a woman through empowerment program',
          'ways to help women facing violence and abuse',
          'join women empowerment volunteer network',
          'donate to women self defense training programs',
          'how to get involved in women safety initiatives',
          'support women empowerment foundation through volunteering'
        ],
        image: '/sheempower-logo.png'
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
      meta: {
        title: 'Blog | SheEmpower Global - Best Women Safety Practices & Tips',
        description: 'Read our blog for the best women safety practices, self-defense tips, empowerment guides, and resources. Learn how to stay safe and build confidence.',
        keywords: [
          'step by step guide to women safety practices',
          'how to recognize street harassment and respond safely',
          'best self defense moves every woman should know',
          'mental health resources for women survivors of abuse',
          'how to create a safety plan for domestic violence',
          'legal rights for women facing workplace harassment',
          'what to do if you are being harassed at work',
          'how to protect yourself when walking alone at night',
          'women safety tips that actually work in real life',
          'practical self defense techniques for women beginners',
          'how to build a women safety support circle',
          'comprehensive guide to women personal safety',
          'expert tips for women empowerment and confidence',
          'how to stay safe as a woman in public places',
          'best practices for women safety in everyday situations'
        ],
        image: '/sheempower-logo.png'
      }
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: BlogPostView,
      meta: {
        title: 'Blog Post | SheEmpower Global',
        description: 'Read our latest blog post on women safety and empowerment.',
        keywords: [
          'women safety tips and best practices',
          'how to stay safe as a woman',
          'women empowerment advice and guidance',
          'self defense techniques for women',
          'women protection and safety strategies',
          'mental health resources for women',
          'legal rights for women survivors',
          'domestic violence prevention and support',
          'workplace harassment prevention for women',
          'community safety for women and girls',
          'women empowerment step by step guide',
          'how to build confidence as a woman',
          'safety planning for women in danger',
          'support resources for women survivors',
          'women safety education and training'
        ],
        image: '/sheempower-logo.png'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
      meta: {
        title: '404 - Page Not Found | SheEmpower Global',
        description: 'The page you are looking for does not exist.',
      }
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

// Helper function to update meta tags
const updateMetaTag = (name, content, attribute = 'name') => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

// Update SEO meta tags on route change
router.afterEach((to) => {
  const meta = to.meta

  const baseUrl = window.location.origin
  const currentUrl = baseUrl + to.path
  const title = meta.title || 'SheEmpower Global - Women Empowerment & Safety Foundation'
  const description = meta.description || 'Empowering women through skills, safety, and solidarity.'
  const keywords = meta.keywords || ['women empowerment', 'women safety']
  const image = meta.image ? (meta.image.startsWith('http') ? meta.image : baseUrl + meta.image) : baseUrl + '/sheempower-logo.png'
  const type = to.name === 'blog-post' ? 'article' : 'website'

  // Update title
  document.title = title

  // Update basic meta tags
  updateMetaTag('description', description)
  updateMetaTag('keywords', keywords.join(', '))

  // Update Open Graph tags
  updateMetaTag('og:title', title, 'property')
  updateMetaTag('og:description', description, 'property')
  updateMetaTag('og:type', type, 'property')
  updateMetaTag('og:image', image, 'property')
  updateMetaTag('og:url', currentUrl, 'property')

  // Update Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image')
  updateMetaTag('twitter:title', title)
  updateMetaTag('twitter:description', description)
  updateMetaTag('twitter:image', image)

  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', currentUrl)
})

export default router
