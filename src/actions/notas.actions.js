import { addNote, deleteNote, saveAddNotes, updateNoteState, editNote, filterNote } from '../reducer/notas.reducer'

export const actionSaveAllNotes = (data) => {
  console.log('action', data)
  return dispatch => {
    dispatch(saveAddNotes(data))
  }
}
export const actionCreateNote = (data) => {
  console.log('action', data)
  return dispatch => {
    dispatch(addNote(data))
  }
}
export const actionDeleteNote = (data) => {
  return dispatch => {
    dispatch(deleteNote(data))
  }
}
export const actionUpdateNoteState = (data) => {
  return dispatch => {
    dispatch(updateNoteState(data))
  }
}
export const actionEditNote = (data) => {
  return dispatch => {
    dispatch(editNote(data))
  }
}
export const actionFilterNote = (data) => {
  return dispatch => {
    dispatch(filterNote(data))
  }
}
