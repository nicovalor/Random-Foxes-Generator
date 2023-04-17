import { useEffect, useRef, useState } from "react"
import type {ImgHTMLAttributes} from 'react'

type LazyImageProps = {
    image: string
}

type ImageNativeTypes = ImgHTMLAttributes<HTMLImageElement>

type Props = LazyImageProps & ImageNativeTypes


const LazyImage = ({image, ...imgProps}: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null)
    const [src, setSrc] = useState<string>("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")
    useEffect(()=>{
        //New observer
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    setSrc(image)
                }
            })
        })

        //Observe node
        node.current && observer.observe(node.current)

        //Disconect node
        return ()=> observer.disconnect()
    },
    [image])
    return <img ref={node} src={src} alt='Random Fox' {...imgProps} />
}

export default LazyImage