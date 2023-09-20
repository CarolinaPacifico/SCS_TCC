import '../css/prestadores.css'
import '../css/global.css'
import julia from '../img/pessoa1.svg'

function CardPrestadores() {

    return (
        <div>
            <h1>Prestadores de serviço disponíveis</h1>
            <ul>
                <li>
                    <img src={julia} alt="" />
                    <h2>Julia Baltar</h2>
                    <ul>
                        <li>Enfermeira</li>
                        <li>34 anos</li>
                        <li>6 anos de experiência</li>
                    </ul>
                    <p>Salário Minimo: R$ 1.200 e negociável</p>
                </li>
                <li>
                    <img src={julia} alt="" />
                    <h2>Nilson Muradas</h2>
                    <ul>
                        <li>Cuidador</li>
                        <li>45 anos</li>
                        <li>21 anos de experiência</li>
                    </ul>
                    <p>Salário Minimo: R$ 1.450</p>
                </li>
                <li>
                    <img src={julia} alt="" />
                    <h2>Marcos Fontes</h2>
                    <ul>
                        <li>Auxiliar de enfermagem </li>
                        <li>35 anos</li>
                        <li>8 anos de experiência</li>
                    </ul>
                    <p>Salário Minimo: R$ 1.450</p>
                </li>
                <li>
                    <img src={julia} alt="" />
                    <h2>Suzana Martins</h2>
                    <ul>
                        <li>Cuidadora e auxiliar em asilos</li>
                        <li>29 anos</li>
                        <li>7 anos de experiência</li>
                    </ul>
                    <p>Salário Minimo: R$ 1.450</p>
                </li>
            </ul>


        </div>
    )
  }
  
  export default CardPrestadores