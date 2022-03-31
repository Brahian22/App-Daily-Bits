import React, { useState, useEffect } from 'react'
import { ContainerAll } from '../styles/StyleHome';
import { urlEstadist } from '../helpers/url'
import { StyleH2 } from '../styles/StyleSingUp';
import { ContainerAdmin, TableA } from '../styles/StyleClasificacion';
import NavBar from '../components/NavBar'

const Clasificacion = () => {

  const [clasifi, setClasifi] = useState({
    estadistUser: []

  }
  )

  useEffect(() => {
    getAllusers()
    return () => {

    };
  }, [])

  const getAllusers = async () => {
    const resp = await fetch(urlEstadist);
    const result = await resp.json();

    setClasifi({
      estadistUser: result
    })

  }


  return (
    <div>
      <ContainerAll>
        <ContainerAdmin>
          <StyleH2 style={{ marginBottom: '5%' }}>Estadisticas de los usuarios</StyleH2>
          <TableA striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Usuario</th>
                <th>Respuestas Contestadas</th>
                <th>Respuestas Correctas</th>
                <th>Respuestas Incorrectas</th>

              </tr>
            </thead>
            <tbody>

              {clasifi.estadistUser.map(a => (
                <tr key={a.id}>
                  <td>{a.id}</td>
                  <td>{a.user}</td>
                  <td>{a.respContestadas}</td>
                  <td>{a.respCorrectas}</td>
                  <td>{a.respIncorrectas}</td>
                </tr>
              ))}

            </tbody>
          </TableA>
        </ContainerAdmin>
        <NavBar/>
      </ContainerAll>
    </div>
  )
}

export default Clasificacion