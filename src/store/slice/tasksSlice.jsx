import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios'; // Axios ya configurado con el token

// Obtener tareas de un tablero
export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (boardId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/tasks/${boardId}`);
      console.log(response.data)
      return response.data; // Retorna las tareas del backend
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Crear una nueva tarea
export const createTask = createAsyncThunk(
  'tasks/createTask',
  async ({ boardId ,taskData }, { rejectWithValue }) => {
    try {
      console.log(taskData)
      const response = await axios.post(`/tasks`, {boardId, ...taskData});
      return response.data; // Retorna la tarea creada
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Editar una tarea existente
export const editTask = createAsyncThunk(
  'tasks/editTask',
  async ({  taskId, taskData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/tasks/${taskId}`, taskData);
      return response.data; // Retorna la tarea actualizada
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Eliminar una tarea
export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async ({ boardId, taskId }, { rejectWithValue }) => {
    try {
      await axios.delete(`/tasks/${taskId}`);
      return { boardId, taskId }; // Retorna los identificadores eliminados
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Slice de tareas
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [], // Lista de tareas
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Obtener tareas
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
        
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Crear tarea
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })

      // Editar tarea
      .addCase(editTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex((task) => task._id === action.payload._id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })

      // Eliminar tarea
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task._id !== action.payload.taskId);
      });
  },
});

export default tasksSlice.reducer;
