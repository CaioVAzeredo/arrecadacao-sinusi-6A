import "./Valor.css"

const Valor = () => {
    return (
        <div className="container">
            <h1 className="titulo">VALOR TOTAL ATÉ O MOMENTO: </h1>
            <h2 className="valor">
                R$ 0,00
            </h2>
            <img src="./public/imagens/QRCODE.jpg" className="img"/>
            <p className="p"><strong>Chave Pix </strong>39514655-1493-44cf-ba9c-2f0b78777ccf</p>

        </div>
    )
}

export default Valor