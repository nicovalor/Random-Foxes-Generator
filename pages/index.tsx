import Head from 'next/head'
import RandomFox from '@/components/RandomFox'

export default function Home() {
  return (
    <>
      <Head>
        <title>Random Foxes Generator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1> 
        <RandomFox />
      </main>
    </>
  )
}
