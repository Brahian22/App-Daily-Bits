import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar';
import { ContainerAll } from '../styles/StyleHome'
import { ContainerSign, StyleH2 } from '../styles/StyleSingUp'

export default class Perfil extends Component {
    constructor() {
        super();
        this.state = {
            nombreS: "",
            correoS: ""
        }
    }
    componentDidMount() {
        this.getPerfil()
    }

    getPerfil() {
        let perfilUser = JSON.parse(localStorage.getItem("PerfilUser"));
        perfilUser = perfilUser !== null ? perfilUser : [];

        perfilUser.forEach(perf => {
            const { nombre, correo } = perf;
            this.setState({
                nombreS: nombre,
                correoS: correo,
            })

        });

    }
    render() {


        return (
            <div>
                <ContainerAll>
                    <ContainerSign style={{color:"#fff"}}>
                        <StyleH2>Perfil</StyleH2>
                        <div className="w-5 my-4">
                            <img style={{ width: '35%' }} src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1648686020/Daily%20Bits/icono_dailybits_cgyaon.png" alt="avatar" />
                        </div>
                        <div>
                            <h3 style={{color:"#fff"}}>{this.state.nombreS}</h3>
                            <h5 style={{color:"#fff"}}>{this.state.correoS}</h5>
                        </div>
                        <Link to='/registro' className="fw-bold fs-5" style={{ color: "var(--red)", textDecoration: "none" }}> Cerrar sesion</Link>
                    </ContainerSign>
                <NavBar/>
                </ContainerAll>
            </div>
        )
    }
}