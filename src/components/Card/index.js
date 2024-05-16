import './Card.css';

export const Card = ({ pokemon }) => {

    return (
        <div className='card'>
            <img 
                src={pokemon.sprites.front_default} 
                alt='Pokemon' 
                width={200} 
                height={200} 
            />
            <h2>{pokemon.name}</h2>
            <p>tipo 1 | tipo 2</p>
        </div>
    );
}
