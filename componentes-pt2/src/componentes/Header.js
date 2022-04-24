import '../index.css';
import {FaUser} from 'react-icons/fa'
import Relogio from './Relogio'

export default function Header()
{
    return(
        <div>
            <Relogio />
            <h1>Cadastro de clientes&nbsp;&nbsp;<FaUser/></h1>
        </div>
    )
}