import Title from './Title';


function Card({cardInfo}) {
    //comportement
    const handleItemClick = () => {
        // Stockage de props.cardInfo dans le localStorage lorsque le <li> est cliqué
        localStorage.setItem("thePictures", JSON.stringify(cardInfo));
    };
    //Render
    return (
        <li onClick={handleItemClick} className='list'>
            <img src={cardInfo.cover} alt={cardInfo.title} />
            <Title title={cardInfo.title}/>
        </li>
    );
}

export default Card;