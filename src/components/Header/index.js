import './style.css';

import {Link} from 'react-router-dom';
//
function Header(){
    return (
        <header>
            <h2>Esta é a Header</h2>
            <div className='menu'>
             <Link to='/'>Home</Link>
             <Link to='/sobre'>Sobre</Link>
             <Link to='/contato'>Contato</Link>
            </div>
        </header>
    )
}
export default Header;