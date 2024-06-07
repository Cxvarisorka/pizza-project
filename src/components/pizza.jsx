const Pizza = ({photoName, name, ingredients, soldOut, price}) => {
    return (
        <li className={`pizza ${soldOut ? 'sold-out' : null}`}>
            <img src={photoName} alt={name}/>
            <div>
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <span>{soldOut ? "SOLD OUT" : price}</span>
            </div>
            
        </li>
    );
}

export default Pizza;