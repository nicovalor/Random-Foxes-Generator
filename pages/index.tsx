import Head from 'next/head'
import RandomFox from '@/components/RandomFox'
import { useState } from 'react'

const random = ()=> Math.floor(Math.random() * 123) + 1

export default function Home() {
  const [images, setImages] = useState<string[]>([])
  return (
    <>
      <Head>
        <title>Random Foxes Generator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <RandomFox image={`https://randomfox.ca/images/${random()}.jpg`} />
      </main>
    </>
  )
}
