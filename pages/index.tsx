import Head from 'next/head'
import { useState } from 'react'
import type {MouseEventHandler} from 'react'
import LazyImage from '@/components/RandomFox'


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

      <main className='flex flex-col justify-center bg-cyan-950'>
        <button onClick={handleClick} className='my-10 rounded-full bg-cyan-400'>Add new fox</button>
        <div className='flex justify-center items-center'>
          <div className='flex gap-4 w-4/5  bg-red-300'>
          {images.map((item,index) => { return <div key={index} className='w-96 h-fit'>
              <LazyImage key={index} image={item.image} width='500rem 'height='auto' className="rounded bg-grey-300" /> 
            </div>})}
          </div>
        </div>
      </main>
    </>
  )
}
