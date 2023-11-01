import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timegridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useEffect, useState } from 'react'


// eslint-disable-next-line react/prop-types
function Calendario({fechaEvent}) {
  const [events, setEvents] = useState([]);
  useEffect(() => {

  },[events])
  
function handelClickEvent(arg) {
  console.log(arg);
  if (confirm('Desea elegir esta fecha'+arg.dateStr)) {
    fechaEvent(arg.dateStr)
    setEvents([...events , {title: 'New Event' , start: new Date(arg.date)}])
  }
  
}
  return (
    <div>
      <h1>Demo App</h1>
      <FullCalendar
        plugins={[dayGridPlugin , interactionPlugin , timegridPlugin ]}
        events={events}
        headerToolbar={{
          left: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay' // user can switch between the two
  }}
        footerToolbar={{
          center: 'prev,next',
        }}
        locale={'es'}
        dateClick={handelClickEvent}
        selectable={true}
        select={(e) => { console.log(e)}}
        eventContent={renderEventContent}
      />
    </div>
  )
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <div>
      <b>Hora:{eventInfo.timeText}</b>
      <br/>
      <i>{eventInfo.event.title}</i>
    </div>
  )
}
export default Calendario