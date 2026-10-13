import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import DetallesDoctor from './DetallesDoctor';


export default class DoctoresComponent extends Component {
  url = Global.urlApiDoctores;

  state = {
    doctores: [],
    idDoc: null
  }

  cargarDoctoresHospital = () => {
    let request = "api/doctores/doctoreshospital/" + this.props.idHospital;
    axios.get(this.url + request).then((respuesta) => {
      console.log(respuesta.data);
      this.setState({
        doctores: respuesta.data
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
