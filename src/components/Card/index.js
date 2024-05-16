import './Card.css';

export const Card = ({ pokemon, types }) => {

    const typeHandler = () => {
        if (types[1]) {
            return types[0].type.name + ' | ' + types[1].type.name;
        }
        else {
            return types[0].type.name;
        }
    }

    return (
        <div className='card'>
            <img 
                src={pokemon.sprites.front_default} 
                alt='Pokemon' 
                width={150} 
                height={150} 
            />
            <h2>{pokemon.name}</h2>
            <p>{typeHandler()}</p>
        </div>
    );
}
