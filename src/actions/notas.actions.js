import { addNote, deleteNote, saveAddNotes, updateNote } from "../reducer/notas.reducer"

export const actionSaveAllNotes = (data) =>{
    console.log('action',data);
    return dispatch => {
        dispatch(saveAddNotes(data))
    }
}
export const actionCreateNote = (data) =>{
    console.log('action',data);
    return dispatch => {
        dispatch(addNote(data))
    }
}
export const actionDeleteNote = (data) => {
    return dispatch => {
        dispatch(deleteNote(data))
    }
}
export const actionUpdateNote = (data) => {
    return dispatch => {
        dispatch(updateNote(data))
    }
}

