const Filho = ({altura, peso}) => {
    const imc = peso/(altura*altura)

    let status = ''
    if(imc < 18.5) {
        status = "Abaixo do peso"
    }
    else if (imc >= 18.5 && imc < 24.9) {
        status = "Peso ideal!"
    }
    else {
        status = "Acima do peso"
    }

    return (
        <>
        <h3>Altura: {altura} </h3>
        <h3>Peso: {peso}</h3>
        <h3>imc: {imc.toFixed(2)} </h3>
        <h3>status: {status} </h3>
        </>
    )
}

export default Filho