import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyleImg = styled.img`
  margin-top: 250px;
  display: flex;
  width: 20%;
`
const StyleDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-color: #7F5AF0; 
    align-items: center;
`

const Inicio = () => {
  
  return (
    <div>
        <Link to="/registro">
        <StyleDiv>
        <StyleImg src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1645392832/Daily%20Bits/Logo_1_fqpf3b.svg"/>
        </StyleDiv>
        </Link>
    </div>
  )
}

export default Inicio