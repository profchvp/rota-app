import {Link} from 'react-router-dom';
//
function Home() {
    return (
      <div >
        <h1>Página Home</h1>
<Link to='/sobre'>Sobre</Link>
<br/>
<Link to='/contato'>Contato</Link>

<hr/>
<Link to='/produto/1234'>Acessar produto</Link>
      </div>
    );
  }
  
  export default Home;
  