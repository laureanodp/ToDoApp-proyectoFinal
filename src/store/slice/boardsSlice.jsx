import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

// Obtener todos los tableros
export const fetchBoards = createAsyncThunk(
  'boards/fetchBoards',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/boards');
      
      return response.data; // Se asume que `data` contiene los tableros
      
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Crear un tablero
export const createBoard = createAsyncThunk(
  'boards/createBoard',
  async (boardData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/boards', boardData);
      return response.data; // Se asume que `data` contiene el tablero creado
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Editar un tablero
export const updateBoard = createAsyncThunk(
  'boards/updateBoard',
  async ({ boardId, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/boards/${boardId}`, updatedData);
      return response.data; // Se asume que `data` contiene el tablero actualizado
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Eliminar un tablero
export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (boardId, { rejectWithValue }) => {
    try {
      await axios.delete(`/boards/${boardId}`);
      return boardId; // Devuelve el ID del tablero eliminado
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const boardsSlice = createSlice({
  name: 'boards',
  initialState: {
    boards: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // Obtener tableros
      .addCase(fetchBoards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBoards.fulfilled, (state, action) => {
        state.loading = false;
        state.boards = action.payload;
      })
      .addCase(fetchBoards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Crear tablero
      .addCase(createBoard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.boards.push(action.payload);
      })
      .addCase(createBoard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Editar tablero
      .addCase(updateBoard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBoard.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.boards.findIndex(
          (board) => board._id === action.payload._id
        );
        if (index !== -1) {
          state.boards[index] = action.payload;
        }
      })
      .addCase(updateBoard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Eliminar tablero
      .addCase(deleteBoard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.boards = state.boards.filter(
          (board) => board._id !== action.payload
        );
      })
      .addCase(deleteBoard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default boardsSlice.reducer;
