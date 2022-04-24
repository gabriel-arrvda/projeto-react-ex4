import '../index.css';

export default function Exibir( {conteudo} )
{
    let lista = conteudo.map( dados => {return <li> {dados.nome} - {dados.endereco} - {dados.cidade} - {dados.estado} - {dados.telefone} </li>}) 

    return(
        <ul>{lista}</ul>
    )
}