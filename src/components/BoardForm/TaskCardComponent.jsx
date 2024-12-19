import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { IconButton, Paper, Typography, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskCard = ({ item, index, onEdit, onDelete }) => {
  return (
    <Draggable draggableId={item._id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
            opacity: snapshot.isDragging ? 0.9 : 1,
            cursor: 'grab',
            marginBottom: 8,
          }}
        >
          <Paper
            style={{
              padding: 16,
              borderRadius: 8,
              transition: 'background-color 0.2s, box-shadow 0.5s',
            }}
          >
            <Typography gutterBottom variant="h6" component="h2">
              Titulo: {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Descripción: {item.description}
            </Typography>
            <Typography variant="caption" color="textSecondary" >
              Creado el: {new Date(item.createdAt).toLocaleDateString()}
            </Typography>
            <Stack direction="row" spacing={1} justifyContent="flex-end">
              <IconButton size="small" color="error" aria-label="delete task" onClick={onDelete}>
                <DeleteIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" color="primary" aria-label="edit task" onClick={onEdit}>
                <EditIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Paper>
        </div>
      )}
    </Draggable>
  );
};

TaskCard.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskCard;

/*import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { IconButton, Paper, Typography, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskCard = ({ item, index }) => {
  return (
    <Draggable draggableId={item._id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
            opacity: snapshot.isDragging ? 0.9 : 1,
            cursor: 'grab',
            marginBottom: 8,
          }}
        >
          <Paper
            style={{
              padding: 16,
              borderRadius: 8,
              transition: 'background-color 0.2s, box-shadow 0.5s',
            }}
          >
            <Typography variant="body1" style={{ marginBottom: 8 }}>
              {item.title}
            </Typography>
            <Typography variant="caption" color="textSecondary" style={{ display: 'block', marginBottom: 16 }}>
              Created: {new Date(item.createdAt).toLocaleDateString()}
            </Typography>
            <Stack direction="row" spacing={1} justifyContent="flex-end">
              <IconButton size="small" color="error" aria-label="delete task">
                <DeleteIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" color="primary" aria-label="edit task">
                <EditIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Paper>
        </div>
      )}
    </Draggable>
  );
};

TaskCard.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default TaskCard;
/*import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { IconButton, Paper, Typography, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskCard = ({ item, index }) => {
  return (
    <Draggable draggableId={item._id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
            opacity: snapshot.isDragging ? 0.9 : 1,
            cursor: 'grab',
            marginBottom: 8,
          }}
        >
          <Paper
            style={{
              padding: 16,
              borderRadius: 8,
              transition: 'background-color 0.2s, box-shadow 0.5s',
            }}
          >
            <Typography variant="body1" style={{ marginBottom: 8 }}>
              {item.title}
            </Typography>
            <Typography variant="caption" color="textSecondary" style={{ display: 'block', marginBottom: 16 }}>
              Created: {new Date(item.createdAt).toLocaleDateString()}
            </Typography>
            <Stack direction="row" spacing={1} justifyContent="flex-end">
              <IconButton size="small" color="error" aria-label="delete task">
                <DeleteIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" color="primary" aria-label="edit task">
                <EditIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Paper>
        </div>
      )}
    </Draggable>
  );
};

TaskCard.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default TaskCard;

/*import PropTypes from 'prop-types';
import { Draggable } from "react-beautiful-dnd";
import { IconButton, Paper, Typography, Stack } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskCard = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
            opacity: snapshot.isDragging ? 0.9 : 1,
            cursor: "grab",
            marginBottom: 8,
          }}
        >
          <Paper
            style={{
              padding: 16,
              borderRadius: 8,
              transition: "background-color 0.2s, box-shadow 0.5s",
            }}
          >
            <Typography variant="body1" style={{ marginBottom: 8 }}>
              {item.Task}
            </Typography>
            <Typography variant="caption" color="textSecondary" style={{ display: "block", marginBottom: 16 }}>
              Due: {new Date(item.Due_Date).toLocaleDateString()}
            </Typography>
            <Stack direction="row" spacing={1} justifyContent="flex-end">
              <IconButton size="small" color="error" aria-label="delete task">
                <DeleteIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" color="primary" aria-label="edit task">
                <EditIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Paper>
        </div>
      )}
    </Draggable>
  );
};

TaskCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    Task: PropTypes.string.isRequired,
    Due_Date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default TaskCard;*/