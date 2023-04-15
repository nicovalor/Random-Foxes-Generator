import Head from 'next/head'
import RandomFox from '@/components/RandomFox'

const random = ()=> Math.floor(Math.random() * 123) + 1

export default function Home() {
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
