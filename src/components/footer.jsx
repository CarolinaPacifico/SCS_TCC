import { Link } from 'react-router-dom';
import LOGO from '../img/LOGO.svg';
import whatsapp from '../img/whatsapp.svg'
import instagram from '../img/instagram.svg'
import facebook from '../img/facebook.svg'
import linhaFooter from '../img/linhaFooter.svg'

import '../App.css'

function Footer() {

    return (
        <nav>
            <div className="linha">
            <img src={linhaFooter}/>
            </div>
            
        <div className="links-footer">
        <Link href="/">
                  <img
                  src={LOGO}
                  width="200"
                  height="200"
                  className="d-inline-block align-top"
                  />
          </Link>

        <div className='sobre-footer'>
        <h1>Sobre</h1>
        <p>Ajuda</p>
        <p>Contratação</p>
        <p>Sobre Nós</p>
        </div>

        <div className='info-footer'>
        <h1>Info</h1>
        <p>Fale Conosco</p>
        <p>Política de Privacidade</p>
        <p>Termos e Condições</p>
        </div>

        <div className='siga-footer'>
        <h1>Siga-nos</h1>
        <Link href="/">
                  <img
                  src={whatsapp}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  />
          </Link>

          <Link href="/">
                  <img
                  src={instagram}
                  width="26"
                  height="26"
                  className="d-inline-block align-top"
                  />
          </Link>

          <Link href="/">
                  <img
                  src={facebook}
                  width="25"
                  height="25"
                  className="d-inline-block align-top"
                  />
          </Link>
          </div>

        <div className='siga-footer'>
            <h1>Páginas</h1>
                <div className="loginbtn-footer">
                    <Link href="/Login">Login</Link>
                    <Link href="/Cadastro">Cadastre-se</Link> 
                </div>
            <p>Contato</p>
        </div>
    </div>
    </nav>
    )
  }
  
  export default Footer
