import React, { Component } from 'react'
import DetallesDoctor from './DetallesDoctor';
import ServiceHospitales from '../services/ServiceHospitales';


export default class DoctoresComponent extends Component {
  service = new ServiceHospitales();

  state = {
    doctores: [],
    idDoc: null
  }

  cargarDoctoresHospital = () => {
    this.service.getDoctoresHospital(this.props.idHospital).then(result => {
      this.setState({
        doctores: result
      })
    })
  }

  cogerID = (id) => {
    this.setState({
      idDoc: id
    })
    console.log(this.state.idDoc);

  }

  componentDidMount = () => {
    this.cargarDoctoresHospital();
  }

  componentDidUpdate = (oldProps) => {
    if (oldProps.idHospital != this.props.idHospital) {
      this.cargarDoctoresHospital();
      this.setState({
        idDoc: null
      })
    }
  }

  render() {
    return (
      <div>
        <h1>
          Doctores del hospital {this.props.idHospital}
        </h1>
        <table className='table table-primary'>
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Especialidad</th>
              <th>Salario</th>
              <th>Hospital</th>
              <th>Boton Detalles</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.doctores.map((doc, index) => {
                return (
                  <tr key={index}>
                    <td>{doc.apellido}</td>
                    <td>{doc.especialidad}</td>
                    <td>{doc.salario}</td>
                    <td>{doc.idHospital}</td>
                    <td><button className='btn btn-info' onClick={() => { this.cogerID(doc.idDoctor) }}>Mostrar Detalles</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        {
          this.state.idDoc &&
          <DetallesDoctor id={this.state.idDoc} />
        }
      </div>
    )
  }
}
