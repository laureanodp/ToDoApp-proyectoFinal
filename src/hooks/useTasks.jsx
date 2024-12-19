import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, createTask, editTask, deleteTask } from '../store/slice/tasksSlice';

export const useTasks = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);

  const getTasks = (boardId) => {
    dispatch(fetchTasks(boardId));
  };

  const addTask = (boardId, taskData) => {
    dispatch(createTask({ boardId, taskData }));
  };

  const updateTask = (boardId, taskId, taskData) => {
    dispatch(editTask({ boardId, taskId, taskData }));
  };

  const removeTask = (boardId, taskId) => {
    dispatch(deleteTask({ boardId, taskId }));
  };

  return {
    tasks,
    loading,
    error,
    getTasks,
    addTask,
    updateTask,
    removeTask,
  };
};
