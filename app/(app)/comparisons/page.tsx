import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const Page = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const { docs: comparisons } = await payload.find({
    collection: 'comparisons',
    where: {
      published: {
        equals: true,
      },
    },
  })

  return (
    <div>
      <h1>Comparisons</h1>
      {comparisons?.map((comparison) => (
        <div key={comparison.id}>
          <h2>{comparison.title}</h2>
          <a href={`/comparisons/${comparison.slug}`}>View Comparison</a>
        </div>
      ))}
    </div>
  )
}

export default Page
