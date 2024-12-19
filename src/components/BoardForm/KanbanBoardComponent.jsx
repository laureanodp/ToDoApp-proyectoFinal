import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Typography, Grid, Box, CircularProgress, Alert, Button, IconButton } from '@mui/material';
import TaskCard from './TaskCardComponent';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const KanbanBoard = ({ tasks, onTaskStatusChange, loading, error, onAddTask, onEditTask, onDeleteTask, onNavigate }) => {
  const columns = {
    'To Do': tasks.filter((task) => task.status === 'To Do'),
    'In Progress': tasks.filter((task) => task.status === 'In Progress'),
    'Done': tasks.filter((task) => task.status === 'Done'),
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination || source.droppableId === destination.droppableId) return;

    const taskId = result.draggableId;
    const newStatus = destination.droppableId;
    onTaskStatusChange(taskId, newStatus);
  };

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Box sx={{ padding: 3, marginTop: 2, borderRadius: 2 }}>
          <IconButton
        variant="contained"
        sx={{
          position: 'absolute',
          top: 70, // Ajusta según la altura de tu AppBar
          left: 40,
          zIndex: 10, // Asegura que esté encima del AppBar
        }}
        onClick={onNavigate}
      >
        <ArrowBackIosNewIcon/> Volver
      </IconButton>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container spacing={2}>
          {Object.entries(columns).map(([columnId, columnTasks]) => (
            <Grid item xs={12} md={4} key={columnId}>
              <Droppable droppableId={columnId}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={{
                      padding: 18,
                      boxShadow: '0px 1px 5px rgba(54, 50, 50, 0.46)',
                      minHeight: 400,
                      borderRadius: 6,
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="h6" style={{ marginBottom: 16 }}>
                        {columnId}
                      </Typography>
                      {columnId === 'To Do' && (
                        <Button variant="contained" color="primary" size="small" onClick={onAddTask}>
                          Nueva Tarea
                        </Button>
                      )}
                    </Box>
                    {columnTasks.map((task, index) => (
                      <TaskCard 
                        key={task._id} 
                        item={task} 
                        index={index} 
                        onEdit={() => onEditTask(task)}
                        onDelete={() => onDeleteTask(task)}
                      />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Grid>
          ))}
        </Grid>
      </DragDropContext>
    </Box>
  );
};

KanbanBoard.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  onTaskStatusChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  onAddTask: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default KanbanBoard;
