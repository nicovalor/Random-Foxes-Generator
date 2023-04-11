
const random = ()=> Math.floor(Math.random() * 123) + 1

const RandomFox = (): JSX.Element => {
    const image: string = `https://randomfox.ca/images/${random()}.jpg`
    return <img src={image} alt='Random Fox'  width='500rem 'height='auto' />
}

export default RandomFox