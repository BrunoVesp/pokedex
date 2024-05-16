import './Header.css';
import { FaSearch } from "react-icons/fa";


export const Header = ({ filteredPokemon }) => {

    return (
        <header className='cabecalho'>
            <input 
                className='input-pesquisa' 
                placeholder='Pesquisar Pokemon'
                onChange={(e) => filteredPokemon(e.target.value)}
            />
            <FaSearch className='icone' />
        </header>
    );
}
