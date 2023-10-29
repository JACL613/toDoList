import {createSlice} from '@reduxjs/toolkit';
const notesReducer = createSlice({
    name: 'notas',
    initialState: [],
    reducers:{
        addNote(state, action){
            // Agrega una nota al estado

            window.localStorage.setItem('notas',[...state , action.payload])
            return [...state, action.payload]
        },
        deleteNote(state, action){
            // Elimina una nota del estado
            console.log('reducer',action.payload);
            console.log(state.filter(nota => nota.id !== action.payload.id));
            return state.filter(nota => nota.id !== action.payload.id)
        },
        updateNote(state, action){
            // Actualiza una nota del estado
            return state.map(nota => nota.id === action.payload.id?action.payload:nota)
        }
        
    }
})
export const { addNote, deleteNote, updateNote } = notesReducer.actions
export default notesReducer.reducer