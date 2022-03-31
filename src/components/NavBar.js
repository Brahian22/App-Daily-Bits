import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from "react-bootstrap"
import { ContainerNav, LabelStyled } from '../styles/StyleNavBar'

const NavBar = () => {
  return (
    <div>
        <div>
      <ContainerNav>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Link to="/categorias" className="nav-link" ><img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644705254/DailyBitsSprint2/Component_1_ytkhrz.png" alt="home" /><LabelStyled>Home</LabelStyled></Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/estadisticas" className="nav-link"><img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644705330/DailyBitsSprint2/Union_1_r3i3u5.png" alt="estadistica" /><LabelStyled>Estadisticas</LabelStyled></Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/perfil" className="nav-link"><img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644705337/DailyBitsSprint2/Component_2_v0a53s.png" alt="perfil" /><LabelStyled>Perfil</LabelStyled></Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/clasificacion" className="nav-link"><img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644705337/DailyBitsSprint2/Component_2_v0a53s.png" alt="perfil" /><LabelStyled>Clasificación</LabelStyled></Link>
          </Nav.Item>
        </Nav>
      </ContainerNav>

    </div>
    </div>
  )
}

export default NavBar