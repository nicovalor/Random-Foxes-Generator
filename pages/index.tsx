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

      <main className='bg-sky-950'>
        <div className='bg-blue-950 shadow flex justify-center items-center'>
          <button onClick={handleClick} className='my-10 rounded-full bg-cyan-400 p-5'>Add new fox</button>
        </div>
        <div className='flex flex-col justify-center items-center '>
          {images.map((item,index) => { return <div key={index} className='w-96 h-fit'>
              <LazyImage key={index} image={item.image} width='500rem 'height='auto' className="rounded bg-grey-300 flex flex-col justify-center items-center my-4 shadow-xl" /> 
            </div>})}
          </div>
      </main>
    </>
  )
}
