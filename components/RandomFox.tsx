import { useEffect, useRef, useState } from "react"

type Props = {
    image: string
}


const RandomFox = ({image}: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null)
    const [src, setSrc] = useState<string>("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")
    useEffect(()=>{
        //New observer
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    console.log('Hey!')
                }
            })
        })

        //Observe node
        node.current && observer.observe(node.current)

        //Disconect node
        return ()=> observer.disconnect()
    },
    [])
    return <img ref={node} src={src} alt='Random Fox'  width='500rem 'height='auto' className="rounded bg-grey-300" />
}

export default RandomFox