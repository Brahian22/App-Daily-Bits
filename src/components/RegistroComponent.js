import React, { useState } from 'react'
import { BsGoogle } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StyledButton, StyledDivPrincipal, StyledImage, StyledInput, StyleDiv, StyledLink1, StyledText1, StyledText2, StyledTitulo } from '../styles/StyledRegistro';
import queryString from 'query-string'
import Swal from 'sweetalert2'

const RegistroComponent = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search);
  const [login, setLogin] = useState({
    correo: q
  })

  const { correo } = login;

  const handleChanged = ({ target }) => {
    setLogin({
      ...login,
      [target.name]: target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`?q=${correo}`)
    getLocal()
  }

  const getLocal = () => {
    let datosUser = JSON.parse(localStorage.getItem("userRegistro"));
    datosUser = datosUser !== null ? datosUser : [];

    const datFilter = datosUser.filter(d => d.correo.toLocaleLowerCase() === login.correo.toLocaleLowerCase())
    if (datFilter.length === 1) {
      navigate('/categorias')
      localStorage.setItem("PerfilUser", JSON.stringify(datFilter));
    } else if (login.correo === "") {
      Swal.fire({
        icon: 'warning',
        title: 'Debes ingresar un correo'
      })
    } else if (datFilter.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Cuenta no registrada'
      })
    }

  }

  return (
    <StyledDivPrincipal>
        <StyleDiv>
        <StyledImage src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1645392832/Daily%20Bits/Logo_1_fqpf3b.svg"></StyledImage>
        <StyledTitulo>Iniciar sesión</StyledTitulo>
        <StyledButton><BsGoogle style={{fontSize: "22px", marginRight: "15px"}}/>Continuar con google</StyledButton>
        <hr></hr>
        <StyledText1>Correo electrónico</StyledText1>
        <form onSubmit={handleSubmit}>
        <StyledInput type="email" placeholder="Ingrese su correo electrónico" onChange={handleChanged} name='correo' value={correo}></StyledInput><br/>
        </form>
        <StyledLink1 href="#">¿Se te olvidó tu contraseña?</StyledLink1>
        <StyledText2>¿Aún no tienes una cuenta? <Link to="/signup"><StyledLink1 >Inscribirse</StyledLink1></Link></StyledText2>
        
        </StyleDiv>
    </StyledDivPrincipal>
  )
}

export default RegistroComponent