type Props = {
    image: string
}


const RandomFox = ({image}: Props): JSX.Element => {
    return <img src={image} alt='Random Fox'  width='500rem 'height='auto' />
}

export default RandomFox