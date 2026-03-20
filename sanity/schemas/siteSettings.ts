import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'domain', title: 'Domain', type: 'string' }),
    defineField({ name: 'title', title: 'Page Title', type: 'string' }),
    defineField({ name: 'description', title: 'Meta Description', type: 'text' }),
    defineField({ name: 'headshot', title: 'Headshot', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'resume', title: 'Resume (PDF)', type: 'file', options: { accept: '.pdf' } }),
    defineField({ name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url' }),
    defineField({
      name: 'navigation',
      title: 'Navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'Href', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'Href', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({ name: 'footerNote', title: 'Footer Note', type: 'string' }),
  ],
})
