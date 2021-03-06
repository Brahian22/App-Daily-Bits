import React, { useState } from 'react'
import axios from 'axios';
import { urlUser } from '../helpers/url';
import { ContainerAll } from '../styles/StyleHome';
import { ButtonS, ContainerSign, Input, InputAdmin, StyleH2 } from '../styles/StyleSingUp';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const SignUp = () => {


    const navigate = useNavigate()

    const [usuario, setUsuario] = useState({
        nombre: "",
        correo: "",
        contraseña: "",
        isAdmin: false,
    })

    const { nombre, correo, contraseña, isAdmin } = usuario;

    const postData = () => {
        axios.post(urlUser, usuario)
            .then(response => {
                console.log(response);
                Swal.fire(
                    'Good job!',
                    'Registro exitoso!',
                    'success'
                )
                navigate('/registro')
            }
            )
            .catch(error => console.log(error))
        sendLocalStorage()
    }


    const sendLocalStorage = () => {
        let persons = [];
        const key = JSON.parse(localStorage.getItem("userRegistro"));
        if (key !== null) {
            key.push(usuario)
            localStorage.setItem("userRegistro", JSON.stringify(key));
        } else {
            persons.push(usuario)
            localStorage.setItem("userRegistro", JSON.stringify(persons));
        }

    }

    const handleChanged = ({ target }) => {
        setUsuario({
            ...usuario,
            [target.name]: target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <ContainerAll>
                <ContainerSign>
                    <form id="formulario" onSubmit={handleSubmit}>
                        <StyleH2>Registrate</StyleH2>
                        <hr />
                        <div>
                            <Input
                                id="inputNombre"
                                type="text"
                                placeholder="Nombre"
                                name="nombre" value={nombre}
                                onChange={handleChanged} />
                        </div>
                        <div>
                            <Input id="inputEmail"
                                type="email"
                                name="correo"
                                placeholder="Correo"
                                value={correo}
                                onChange={handleChanged} />
                        </div>
                        <div>
                            <Input
                                id="inputContraseña"
                                type="password"
                                placeholder="Contraseña"
                                name="contraseña"
                                value={contraseña}
                                onChange={handleChanged} />
                        </div>
                        <div>
                            <InputAdmin id="inputIsAdmin" name="isAdmin" value={isAdmin} onChange={handleChanged} disabled />
                        </div>

                        <div>
                            <ButtonS className='btn' onClick={() => postData()} id="btnRegistro">Crear cuenta</ButtonS>
                        </div>
                    </form>
                </ContainerSign>
            </ContainerAll>
        </div>
    )
}

export default SignUp;