import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class DetallesDoctor extends Component {
    url = Global.urlApiDoctores;

    state = {
        doctor: null,
    }

    
    mostrarDetalles = () => {
        let request = "api/doctores/" + this.props.id;
        axios.get(this.url + request).then((respuesta) => {
            console.log(respuesta.data);
            this.setState({
                doctor: respuesta.data
            })
        })
    }

    componentDidMount = () => {
        this.mostrarDetalles();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.id != this.props.id) {
            this.mostrarDetalles();
        }
    }

    render() {
        return (
            <div>
                <h1>Detalles del Doctor</h1>
                {
                    this.state.doctor &&
                            <ul className='list-group'>
                                <li className='list-group-item'>Apellido: {this.state.doctor.apellido}</li>
                                <li className='list-group-item'>Especialidad: {this.state.doctor.especialidad}</li>
                                <li className='list-group-item'>Salario: {this.state.doctor.salario}</li>
                                <li className='list-group-item'>Hospital: {this.state.doctor.idHospital}</li>
                            </ul>
                }
            </div>
        )
    }
}
