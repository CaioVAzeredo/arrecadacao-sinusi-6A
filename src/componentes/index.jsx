import "./Valor.css"

const Valor = () => {
    return (
        <div className="container">
            <h1 className="titulo">VALOR TOTAL ATÉ O MOMENTO: </h1>
            <h2 className="valor">
                R$ 40,21
            </h2>
            <img src='/imagens/qr.jpg' alt='Logo do Organo'/>
            <p className="p"><strong>Chave Pix </strong>39514655-1493-44cf-ba9c-2f0b78777ccf</p>
            <h2>O que precisamos fazer:</h2>
            <ul>
                <li>Rifar a lâmpada</li>
                <li>Sortear a lâmpada. Sorteio: 13/06/2024</li>
            </ul>
            <h2>O que foi feito:</h2>
            <ul>
                <li>Lâmpada inteligente comprada</li>
            </ul>
        </div>
    )
}

export default Valor