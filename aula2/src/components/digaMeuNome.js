function DigaMeuNome(props){

    return(
        <div>
            <p>Oba{props.nome}, tudo mec? </p>
            <p>Minha profissao é {props.profissao}. Gostou? </p>
            <p>Tenho {props.idade} anos </p>
            <p>Meu sonho é {props.sonho}. Legal né? </p>
        </div>
    )
}

export default DigaMeuNome