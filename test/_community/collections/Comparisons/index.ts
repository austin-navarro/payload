import type { CollectionConfig } from 'payload'

import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const comparisonsSlug = 'comparisons'

export const ComparisonsCollection: CollectionConfig = {
  slug: comparisonsSlug,
  labels: {
    singular: 'Comparison Page',
    plural: 'Comparison Pages',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'published'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'intro',
      label: 'Introduction',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
    },
    {
      name: 'comparisonImage',
      label: 'Comparison Image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'sections',
      label: 'Comparison Sections',
      type: 'array',
      fields: [
        {
          name: 'heading',
          label: 'Section Heading',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          label: 'Content',
          type: 'richText',
          required: true,
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [...defaultFeatures],
          }),
        },
      ],
    },
    {
      name: 'conclusion',
      label: 'Conclusion',
      type: 'richText',
      required: false,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
    },
    {
      name: 'published',
      label: 'Published',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}

// Make sure collection is exported
export default ComparisonsCollection
