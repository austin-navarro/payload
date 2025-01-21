import type { Product } from '@/payload-types'

export const productHat: Partial<Product> = {
  variants: {
    options: [
      {
        label: 'Colour',
        slug: 'colour',
        values: [
          {
            label: 'Black',
            slug: 'black',
          },
          {
            label: 'White',
            slug: 'white',
          },
        ],
      },
    ],
    variants: [
      {
        options: ['black'],
        stripeProductID: 'prod_Rd14YYv1Jlvy7w',
        stock: 52,
        info: {
          price: {
            amount: 1900,
            currency: 'usd',
          },
          productName: 'Payload Hat - Black',
          options: [
            {
              slug: 'black',
              key: {
                slug: 'colour',
                label: 'Colour',
              },
              label: 'Black',
            },
          ],
        },
        images: ['{{IMAGE_1}}'],
      },
      {
        options: ['white'],
        stripeProductID: 'prod_Rd18itaLMglNRH',
        stock: 52,
        info: {
          price: {
            amount: 1900,
            currency: 'usd',
          },
          productName: 'Payload Cup Whites',
          options: [
            {
              slug: 'white',
              key: {
                slug: 'colour',
                label: 'Colour',
              },
              label: 'White',
            },
          ],
        },
        images: ['{{IMAGE_2}}'],
      },
    ],
  },
  stock: 0,
  meta: {
    title: 'Hat | Payload Ecommerce Template',
    image: '{{IMAGE_1}}',
    description:
      'Top off your look with our classic hat, crafted for style and comfort. Made with breathable, high-quality materials and an adjustable strap for the perfect fit.',
  },
  skipSync: false,
  _status: 'published',
  layout: [],
  categories: ['{{CATEGORY_1}}'],
  currency: 'usd',
  description: {
    root: {
      children: [
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Top off your look with our classic hat, crafted for style and comfort. Made with breathable, high-quality materials and an adjustable strap for the perfect fit, it’s ideal for everyday wear or outdoor adventures. Available in a range of colors to match any outfit.',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'paragraph',
          version: 1,
          textFormat: 0,
          textStyle: '',
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  },
  enableVariants: true,
  gallery: ['{{IMAGE_1}}', '{{IMAGE_2}}', '{{IMAGE_3}}'],
  price: 1999,
  publishedOn: '2025-01-21T00:01:06.661Z',
  title: 'Hat',
  slug: 'hat',
  relatedProducts: ['{{RELATED_PRODUCT_1}}'],
}
