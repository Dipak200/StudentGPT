import { PineconeClient } from '@pinecone-database/pinecone'

export const getPineconeClient = async () => {
  const client = new PineconeClient()

  await client.init({
    apiKey: "c9d37a84-bd69-426f-9ec3-00b5bed24788",
    environment: 'us-east1-gcp-free',
  })

  return client
}
