import '../assets/css/calendario.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timegridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import Swal from 'sweetalert2'
import { Toast } from '../assets/functions/helpers'

// eslint-disable-next-line react/prop-types
function Calendario ({ fechaEvent, setClose, events = [], editable = false }) {
  function handelClickEvent (arg) {
    Swal.fire({
      title: `Quiere seleccionar esta fecha ${arg.dateStr}?`,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if (arg.allDay === true) {
          // Si el evento se seleciona sin fecha se programa a las 00:00
          setClose(false)
          Toast.fire({
            icon: 'success',
            title: `Se guardo la fecha: ${arg.dateStr}`
          })
          return fechaEvent(arg.dateStr.concat('T00:00'))
        }
        fechaEvent(arg.dateStr.slice(0, 16))
        setClose(false)

        Swal.fire('Se Guardo!', arg.dateStr.slice(0, 16), 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timegridPlugin]}
        events={events}
        timeZone='UTC'
        headerToolbar={{
          left: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay' // user can switch between the two
        }}
        footerToolbar={{
          center: 'prev,next'
        }}
        locale={'es'}
        dateClick={editable ? handelClickEvent : null}
        selectable={!editable}
        select={(e) => { console.log(e) }}
        eventContent={renderEventContent}
      />
    </>
  )
}

// a custom render function
function renderEventContent (eventInfo) {
  return (
    <div className='acortar'>
      <b>Hora:{eventInfo.timeText}</b>
      <br/>
      <i >{eventInfo.event.title}</i>
    </div>
  )
}
export default Calendario
