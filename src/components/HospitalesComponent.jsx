import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class HospitalesComponent extends Component {
    url = Global.urlApiHospitales2;

    state = {
        hospitales: []
    }

    loadHosptiales = () => {
        let request = "api/hospitales";

        axios.get(this.url + request).then((respuesta) => {
            console.log("Leyendo hospitales");
            this.setState({
                hospitales: respuesta.data
            })

        })
    }

    componentDidMount = () => {
        this.loadHosptiales();
    }

    render() {
        return (
            <div>
                <h1>Componente Hospitales</h1>
                <table className='table table-warning'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Direccion</th>
                            <th>Telefono</th>
                            <th>Camas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.hospitales.map((hospital, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{hospital.idHospital}</td>
                                        <td>{hospital.nombre}</td>
                                        <td>{hospital.direccion}</td>
                                        <td>{hospital.telefono}</td>
                                        <td>{hospital.camas}</td>
                                    </tr>


                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
