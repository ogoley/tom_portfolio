import { sanityClient } from './sanityClient'
import type { SiteContent } from '@/content/schema'

const query = `{
  "site": *[_type == "siteSettings"][0] {
    name, domain, title, description, resumeHref, linkedinUrl
  },
  "navigation": *[_type == "siteSettings"][0].navigation,
  "socialLinks": *[_type == "siteSettings"][0].socialLinks,
  "footerNote": *[_type == "siteSettings"][0].footerNote,
  "hero": *[_type == "hero"][0] {
    eyebrow, title, subtitle, summary, primaryCta, secondaryCta, metrics
  },
  "about": *[_type == "about"][0] {
    title, paragraphs, highlights
  },
  "experience": *[_type == "experience"] | order(order asc) {
    company, role, period, location, summary, achievements
  },
  "projects": *[_type == "project"] | order(order asc) {
    name, description, impact, stack, href
  },
  "skills": *[_type == "skills"] | order(order asc) {
    title, items
  },
  "contact": *[_type == "contact"][0] {
    title, body, email, location, availability
  }
}`

export async function getSiteContent(): Promise<SiteContent> {
  return sanityClient.fetch(query)
}
