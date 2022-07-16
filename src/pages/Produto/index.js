import {useParams} from 'react-router-dom';
//
function Produto(){
const{idProduto}=useParams();

    return(
<div>
    <h2>Página de Produto</h2>
<spa>
    Meu produto é: {idProduto}
</spa>
</div>
    )
}
export default Produto;