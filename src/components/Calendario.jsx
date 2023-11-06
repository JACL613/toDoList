import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timegridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

// eslint-disable-next-line react/prop-types
function Calendario ({ fechaEvent, setClose }) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer
      toast.onmouseleave = Swal.resumeTimer
    }
  })
  const [events, setEvents] = useState([])
  const state = useSelector(state => state.notas)
  useEffect(() => {
    const newEvents = state.map(nota => {
      const newState = { title: nota.name, start: new Date(nota.finishDate), allDay: true }

      // setEvents(newState)
      return newState
    })
    setEvents(newEvents)
    console.log(newEvents)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handelClickEvent (arg) {
    console.log(arg)

    Swal.fire({
      title: `Quiere seleccionar esta fecha ${arg.dateStr}?`,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'Cancelar'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        if (arg.allDay === true) {
          // Si el evento se seleciona sin fecha se programa a las 00:00
          setClose(false)
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
          //  Swal.fire("Se Guardo!",arg.dateStr.concat('T00:00'), "success");
          return fechaEvent(arg.dateStr.concat('T00:00'))
        }
        fechaEvent(arg.dateStr.slice(0, 16))
        setClose(false)

        Swal.fire('Se Guardo!', arg.dateStr.slice(0, 16), 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    // if (confirm('Desea elegir esta fecha'+arg.dateStr)) {

    //   // setEvents([...events , {title: 'New Event' , start: new Date(arg.date)}])
    // }
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
        dateClick={handelClickEvent}
        selectable={true}
        select={(e) => { console.log(e) }}
        eventContent={renderEventContent}
      />
    </>
  )
}

// a custom render function
function renderEventContent (eventInfo) {
  return (
    <div>
      <b>Hora:{eventInfo.timeText}</b>
      <br/>
      <i>{eventInfo.event.title}</i>
    </div>
  )
}
export default Calendario
