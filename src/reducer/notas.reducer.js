import {createSlice} from '@reduxjs/toolkit';
const notesReducer = createSlice({
    name: 'notas',
    initialState: [],
    reducers:{
        saveAddNotes (state,action) {

            window.localStorage.setItem('notas',[...action.payload])
            return [...action.payload]
        },
        addNote(state, action){
            // Agrega una nota al estado

            window.localStorage.setItem('notas',[...state , action.payload])
            return [...state, action.payload]
        },
        deleteNote(state, action){
            // Elimina una nota del estado
            console.log('reducer',action.payload);
            console.log(state.filter(nota => nota._id !== action.payload.id));
            return state.filter(nota => nota._id !== action.payload.id)
        },
        updateNote(state, action){
            // Actualiza una nota del estado
            
            return state.map(nota => nota._id === action.payload._id?{...action.payload}:nota)
        }
        
    }
})
export const { saveAddNotes, addNote, deleteNote, updateNote } = notesReducer.actions
export default notesReducer.reducer