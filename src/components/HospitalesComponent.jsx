import React, { Component } from 'react'
import ServiceHospitales from '../services/ServiceHospitales'

export default class HospitalesComponent extends Component {
    service = new ServiceHospitales();

    state = {
        hospitales: []
    }

    loadHosptiales = () => {
        this.service.getHospitales().then(result => {
            this.setState({
                hospitales: result
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
                {
                    this.state.hospitales &&
                    (<table className='table table-warning'>
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
                    </table>)
                }

            </div>
        )
    }
}
