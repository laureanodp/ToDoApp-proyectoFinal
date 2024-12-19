import KanbanBoard from '../../components/BoardForm/KanbanBoardComponent';
import ModalForm from '../../components/ModalFormComponent';
import { useEffect, useState, useCallback } from 'react';
import { useTasks } from '../../hooks/useTasks';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

export default function TableroKanban() {
  const { id: boardId } = useParams();
  const { tasks, loading, error, getTasks, updateTask, removeTask, addTask } = useTasks();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getTasks(boardId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 

  const handleTaskUpdate = (taskId, status) => {
    updateTask(boardId, taskId, { status });
  };

  const handleModal = useCallback((task = null, isDelete = false) => {
    setModalData(task);
    setIsDeleteMode(isDelete);
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
    setModalData(null);
    setIsDeleteMode(false);
  }, []);

  const handleConfirmModal = () => {
   
    if (isDeleteMode && modalData) {
      removeTask(boardId, modalData._id);
    } else if (modalData && modalData._id) {
      updateTask(boardId, modalData._id, modalData);
    } else {
      addTask(boardId, modalData);

    }
    handleCloseModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModalData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
  <Box>
      <KanbanBoard 
        tasks={tasks} 
        onTaskStatusChange={handleTaskUpdate} 
        loading={loading} 
        error={error} 
        onAddTask={() => handleModal(null)}
        onEditTask={(task) => handleModal(task)}
        onDeleteTask={(task) => handleModal(task, true)}
        onNavigate={()=>{navigate('/BoardList')}}
      />
      <ModalForm 
        open={modalOpen} 
        handleClose={handleCloseModal} 
        handleConfirm={handleConfirmModal} 
        title={isDeleteMode ? 'Eliminar Tarea' : modalData ? 'Editar Tarea' : 'Nueva Tarea'}
      >
        {isDeleteMode ? (
          <Box>
            <p>¿Estás seguro de que quieres eliminar la tarea {modalData?.title}?</p>
          </Box>
        ) : (
          <Box>
            <TextField
              label="Título de la Tarea"
              name="title"
              value={modalData?.title || ''}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Descripción"
              name="description"
              value={modalData?.description || ''}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={4}
            />
          </Box>
        )}
      </ModalForm>
    </Box>
  );
}
