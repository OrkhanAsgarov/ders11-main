function Card({baslik, gorselUrl}) {

    return (
        <>
            <h2>{baslik}</h2>
            <img src={gorselUrl} />
        </>
    )
}

export default Card;