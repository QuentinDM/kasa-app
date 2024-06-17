import Title from './Title';


function Card({cardInfo}) {
   
    return (
        <li onClick={() => {
            // Storing props.cardInfo in localStorage when the <li> is clicked
            localStorage.setItem("thePictures", JSON.stringify(cardInfo));
        }} className='list'>
            <img src={cardInfo.cover} alt={cardInfo.title} />
            <Title title={cardInfo.title}/>
        </li>
    );
}

export default Card;