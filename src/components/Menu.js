import React, { useState, useEffect } from 'react';
import '../styles/calendartio.css';
import Swal from 'sweetalert2';
import Opciones from './Opciones';
function Menu() {

  const [selectedMonthYear, setSelectedMonthYear] = useState('');
  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const [displayedMonth, setDisplayedMonth] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const daysOfWeekNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];


  const handleGoClick = () => {
    if (selectedMonthYear) {
      const [month, year] = selectedMonthYear.split('/');
      const firstDayOfMonth = new Date(year, month - 1, 1);
      const startingDay = (firstDayOfMonth.getDay() + 6) % 7;
      const daysInMonth = new Date(year, month, 0).getDate();
      const daysInPreviousMonth = new Date(year, month - 1, 0).getDate();
      const daysInNextMonth = 7 * 6 - (startingDay + daysInMonth); // Total de celdas - días mostrados

      const days = [];
      let dayCounter = 1;

      // Rellenar con números de los días del mes anterior
      for (let i = daysInPreviousMonth - startingDay + 0; i <= daysInPreviousMonth; i++) {
        days.push(<div key={`prev-day-${i}`} className="day prev-day">{i}</div>);
      }

      // Agregar los números de los días del mes actual
      for (let day = 1; day <= daysInMonth; day++) {
        let className = "day";
        if (dayCounter === 1) {
          className += " first-day";
        }
        days.push(<div key={`day-${day}`} className={className}>{day}</div>);
        dayCounter = (dayCounter + 1) % 7;
      }

      // Agregar los números de los días del siguiente mes
      for (let day = 1; day <= daysInNextMonth; day++) {
        days.push(<div key={`next-day-${day}`} className="day next-day">{day}</div>);
        dayCounter = (dayCounter + 1) % 7;
      }

      setDaysOfWeek(days);
      // Actualizar el mes y año mostrados
      const monthName = new Date(year, month - 1).toLocaleString('default', { month: 'long' });
      setDisplayedMonth(`${monthName} ${year}`);
    }
  };
  useEffect(() => {
    if (selectedMonthYear) {
      const [month, year] = selectedMonthYear.split('/');
      const firstDayOfMonth = new Date(year, month - 1, 1);
      const startingDay = (firstDayOfMonth.getDay() + 6) % 7;
      const daysInMonth = new Date(year, month, 0).getDate();
      const daysInPreviousMonth = new Date(year, month - 1, 0).getDate();
      const daysInNextMonth = 7 * 6 - (startingDay + daysInMonth);

      const days = [];
      let dayCounter = 1;

      for (let i = daysInPreviousMonth - startingDay + 0; i <= daysInPreviousMonth; i++) {
        days.push(<div key={`prev-day-${i}`} className="day prev-day">{i}</div>);
      }

      for (let day = 1; day <= daysInMonth; day++) {
        let className = "day";
        if (dayCounter === 1) {
          className += " first-day";
        }
        days.push(<div key={`day-${day}`} className={className}>{day}</div>);
        dayCounter = (dayCounter + 1) % 7;
      }

      for (let day = 1; day <= daysInNextMonth; day++) {
        days.push(<div key={`next-day-${day}`} className="day next-day">{day}</div>);
        dayCounter = (dayCounter + 1) % 7;
      }

      setDaysOfWeek(days);

      // Actualizar el mes y año mostrados
      const monthName = new Date(year, month - 1).toLocaleString('default', { month: 'long' });
      setDisplayedMonth(`${monthName} ${year}`);
    }
  }, [selectedMonthYear]);
  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    setSelectedMonthYear(`${currentMonth}/${currentYear}`);
  }, []);

  const handlePrevMonthClick = () => {
    if (selectedMonthYear) {
      const [month, year] = selectedMonthYear.split('/');
      const prevMonth = month - 1 === 0 ? 12 : month - 1;
      const prevYear = prevMonth === 12 ? year - 1 : year;
      setSelectedMonthYear(`${prevMonth}/${prevYear}`);
    }
  };
  const handleNextMonthClick = () => {
    if (selectedMonthYear) {
      const [month, year] = selectedMonthYear.split('/');
      const nextMonth = month === '12' ? '1' : (parseInt(month) + 1).toString();
      const nextYear = month === '12' ? (parseInt(year) + 1).toString() : year;
      setSelectedMonthYear(`${nextMonth}/${nextYear}`);
    }
  };
  const handleDayClick = (day, isPreviousMonth) => {
    if (day > 0 && day <= 31) {
      let [month, year] = selectedMonthYear.split('/').map(Number);
      if (isPreviousMonth) {
        if (month === 1) {
          month = 12;
          year -= 1;
        } else {
          month -= 1;
        }
      }
      const monthName = new Date(year, month - 1).toLocaleString('default', { month: 'long' });
      const selectedDateString = `${day} ${monthName} ${year}`;
      setSelectedDate(selectedDateString);
      setSelectedMonthYear(`${month}/${year}`);
    }
  };

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
    // Aquí abriremos la alerta de SweetAlert2
    Swal.fire({
      title: 'Detalles del evento',
      html: `
        <strong>Día:</strong> ${selectedDate}<br>
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
      updateButton.addEventListener('click', handleUpdateButtonClick);
      deleteButton.addEventListener('click', handleDeleteButtonClick);
    }
  };
  
  const handleUpdateButtonClick = () => {
    Swal.fire({
      title: 'actualiza detalles del cita',
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

  const handleDeleteButtonClick = () => {
    // Aquí maneja la lógica para eliminar el evento
    Swal.close();
  };

  return (
    <>
      <Opciones />
      <div className="container1">
        <div className="left">
          <div className="calendar">
            <div className="goto-today">
              <div className="goto">
                <input
                  type="text"
                  placeholder="mm/yyyy"
                  className="date-input"
                  value={selectedMonthYear}
                  onChange={(e) => setSelectedMonthYear(e.target.value)}
                />
                <button className="goto-btn" onClick={handleGoClick}>
                  Go
                </button>
              </div>
            </div>
            <div className="month">
              <i className="fas fa-angle-left prev" onClick={handlePrevMonthClick}></i>
              <div className="date">{displayedMonth}</div>
              <i className="fas fa-angle-right next" onClick={handleNextMonthClick}></i>
            </div>
            <div className="weekdays">
              {daysOfWeekNames.map((dayName) => (
                <div key={dayName}>{dayName}</div>
              ))}
            </div>
            <div className="days">
              {daysOfWeek.map((day, index) => (
                <div key={`day-${index}`} className={day.props.className} onClick={() => handleDayClick(day.props.children)}>
                  {day.props.children}
                </div>
              ))}
            </div>


          </div>
        </div>
        <div className="right">

          <div className="today-date">
            <div className="event-day">{selectedDate || ''}</div>

          </div>
          <div className="events">
            <div class="event" onClick={handleEventClick}>
              <div class="title">
                <i class="fas fa-circle"></i>
                <h3 class="event-title">actividad </h3>
              </div>
              <div class="event-time">
                <span class="event-time">hora</span>
              </div>
            </div>
            
          </div>



          <button className="add-event" onClick={handleButtonClick}>
            <i className="fas fa-plus"></i>
          </button>

        </div>
      </div>
    </>
  );
}

export default Menu;
