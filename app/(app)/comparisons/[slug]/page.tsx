import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    slug: string
  }
}

export const Page = async ({ params: { slug } }: Props) => {
  const payload = await getPayload({
    config: configPromise,
  })

  const {
    docs: [comparison],
  } = await payload.find({
    collection: 'comparisons',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  if (!comparison) {
    notFound()
  }

  return (
    <div>
      <h1>{comparison.title}</h1>
      {comparison.intro && <div>{comparison.intro[0]?.children[0]?.text}</div>}
      {comparison.sections?.map((section, index) => (
        <div key={index}>
          <h2>{section.heading}</h2>
          <div>{section.content[0]?.children[0]?.text}</div>
        </div>
      ))}
      {comparison.conclusion && <div>{comparison.conclusion[0]?.children[0]?.text}</div>}
      <a href="/comparisons">Back to Comparisons</a>
    </div>
  )
}

export default Page
