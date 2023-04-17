import Head from 'next/head'
import RandomFox from '@/components/RandomFox'
import { useState } from 'react'
import type {MouseEventHandler} from 'react'


const random = ()=> Math.floor(Math.random() * 123) + 1

type Item = {id: string, image: string}

export default function Home() {
  const [images, setImages] = useState<Array<Item>>([])

  const handleClick:MouseEventHandler<HTMLButtonElement> =(event)=>{
    event.preventDefault()
    const newItem: Item = {id: images.length.toString(), image: `https://randomfox.ca/images/${random()}.jpg`}
    setImages([...images, newItem])
  }
  return (
    <>
      <Head>
        <title>Random Foxes Generator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <button onClick={handleClick}>Add new fox</button>
        {images.map((item,index) => <RandomFox key={index} image={item.image} />)}
      </main>
    </>
  )
}
