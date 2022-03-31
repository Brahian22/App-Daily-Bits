import React from 'react'
import CategoriaComponent from '../components/CategoriaComponent'
import NavBar from '../components/NavBar'
import { DivAll, DivPrincipal } from '../styles/StyledCategorias'

const Categorias = () => {
  return (
    <DivAll>
    <DivPrincipal>
        <CategoriaComponent/>
    </DivPrincipal>
    <NavBar/>
    </DivAll>
  )
}

export default Categorias