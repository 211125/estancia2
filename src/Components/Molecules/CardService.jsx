import React from 'react'
import '../../assets/Styles/CardService.css'
import img from "../.././assets/Images/doctor1.png"
import Swal from 'sweetalert2';
function CardService() {
  const handleButtonClick = () => {
    Swal.fire({
      title: 'Ingresar detalles del paciente',
      html:
        '<input id="patientName" class="swal2-input" placeholder="Nombre del paciente">' +
        '<input id="motherLastName" class="swal2-input" placeholder="Apellido materno">' +
        '<input id="fatherLastName" class="swal2-input" placeholder="Apellido paterno">' +
        '<div style="margin-top: 10px; font-weight: bold;">Fecha de nacimiento:</div>' +
        '<input id="birthdate" class="swal2-input" type="date">' +
        '<input id="cellPhone" class="swal2-input" placeholder="Teléfono celular">' +
        '<input id="homePhone" class="swal2-input" placeholder="Teléfono de casa">' +
        '<input id="gender" class="swal2-input" placeholder="Género">' +
        '<input id="email" class="swal2-input" placeholder="Correo electrónico">' +
        '<div style="margin-top: 10px; font-weight: bold;">Fecha de la cita:</div>' +
        '<input id="consultationDate" class="swal2-input" type="date">' +
        '<div style="margin-top: 10px; font-weight: bold;">Hora de la cita:</div>' +
        '<input id="consultationTime" class="swal2-input" type="time">' +
        '<input id="officeName" class="swal2-input" placeholder="Nombre de la oficina">' +
        '<input id="referrer" class="swal2-input" placeholder="Quien recomienda">' +
        '<input id="consultationReason" class="swal2-input" placeholder="Motivo de la consulta">',
      showCancelButton: true,
      confirmButtonText: 'Crear',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const patientName = document.getElementById('patientName').value;
        const motherLastName = document.getElementById('motherLastName').value;
        const fatherLastName = document.getElementById('fatherLastName').value;
        const birthdate = document.getElementById('birthdate').value;
        const cellPhone = document.getElementById('cellPhone').value;
        const homePhone = document.getElementById('homePhone').value;
        const gender = document.getElementById('gender').value;
        const email = document.getElementById('email').value;
        const consultationDate = document.getElementById('consultationDate').value;
        const consultationTime = document.getElementById('consultationTime').value;
        const officeName = document.getElementById('officeName').value;
        const referrer = document.getElementById('referrer').value;
        const consultationReason = document.getElementById('consultationReason').value;

        // Perform validation to check if any input is empty
        if (
          !patientName ||
          !motherLastName ||
          !fatherLastName ||
          !birthdate ||
          !cellPhone ||
          !homePhone ||
          !gender ||
          !email ||
          !consultationDate ||
          !consultationTime ||
          !officeName ||
          !referrer ||
          !consultationReason
        ) {
          Swal.showValidationMessage('Por favor, complete todos los campos.');
        }

        return {
          patientName,
          motherLastName,
          fatherLastName,
          birthdate,
          cellPhone,
          homePhone,
          gender,
          email,
          consultationDate,
          consultationTime,
          officeName,
          referrer,
          consultationReason
        };
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        const {
          patientName,
          motherLastName,
          fatherLastName,
          birthdate,
          cellPhone,
          homePhone,
          gender,
          email,
          consultationDate,
          consultationTime,
          officeName,
          referrer,
          consultationReason
        } = result.value;

        // Perform further actions with the patient details
        console.log('Nombre del paciente:', patientName);
        console.log('Apellido materno:', motherLastName);
        console.log('Apellido paterno:', fatherLastName);
        console.log('Fecha de nacimiento:', birthdate);
        console.log('Teléfono celular:', cellPhone);
        console.log('Teléfono de casa:', homePhone);
        console.log('Género:', gender);
        console.log('Correo electrónico:', email);
        console.log('Fecha de la cita:', consultationDate);
        console.log('Hora de la cita:', consultationTime);
        console.log('Nombre de la oficina:', officeName);
        console.log('Quien recomienda:', referrer);
        console.log('Motivo de la consulta:', consultationReason);
      }
    });
  };
  const handleEventClick = () => {
    Swal.fire({
      title: 'Detalles del evento',
      html: `
        <strong>Día:</strong> s<br>
        <strong>Nombre del paciente:</strong> Nombre del paciente<br>
        <strong>Apellido materno:</strong> Apellido materno<br>
        <strong>Apellido paterno:</strong> Apellido paterno<br>
        <strong>Fecha de nacimiento:</strong> Fecha de nacimiento<br>
        <strong>Teléfono celular:</strong> Teléfono celular<br>
        <strong>Teléfono de casa:</strong> Teléfono de casa<br>
        <strong>Género:</strong> Género<br>
        <strong>Correo electrónico:</strong> Correo electrónico<br>
        <strong>Fecha de la cita:</strong> Fecha de la cita<br>
        <strong>Hora de la cita:</strong> Hora de la cita<br>
        <strong>Nombre de la oficina:</strong> Nombre de la oficina<br>
        <strong>Quien recomienda:</strong> Quien recomienda<br>
        <strong>Motivo de la consulta:</strong> Motivo de la consulta<br>
        <button class="swal2-confirm swal2-styled" id="updateButton">Actualizar</button>
        <button class="swal2-confirm swal2-styled" id="deleteButton">Eliminar</button>
      `,
      showCancelButton: false,
      showConfirmButton: false,
      allowOutsideClick: true,
    });

    // Agregamos event listeners a los botones de actualizar y eliminar
    const updateButton = document.getElementById('updateButton');
    const deleteButton = document.getElementById('deleteButton');

    if (updateButton && deleteButton) {
      updateButton.addEventListener('click', handleButtonClick);
      deleteButton.addEventListener('click', handleDeleteButtonClick);
    }
  };
  const handleDeleteButtonClick = () => {
    // Aquí maneja la lógica para eliminar el evento
    Swal.close();
  };
  return (
    <div className='cardService' onClick={handleEventClick}>
      <div className='box-service'>
        <img src={img} alt="" />
      </div>
      <h4>nombre completo</h4>
      <p>Fecha de la cita:</p>
      <p>Hora de la cita:</p>

    </div>
  )
}

export default CardService