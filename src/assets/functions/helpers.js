import Swal from 'sweetalert2'

export const newEvents = (notas) => {
  const eventos = notas.map(nota => {
    const newState = { title: nota.name, start: new Date(nota.finishDate), allDay: true }

    // setEvents(newState)
    return newState
  })
  return eventos
}
export const Toast = Swal.mixin({
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
