import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';

export default function CardItem({ title, description, createdAt, onEdit, onView, onDelete }) {
  const formattedDate = new Date(createdAt).toLocaleDateString();

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Descripción: {description}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {`Creado el: ${formattedDate}`}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', padding: 1 }}>
        <Grid container spacing={1} justifyContent="flex-end" sx={{ position: 'absolute', bottom: 8, right: 8 }}>
          <Grid item>
            <IconButton
              onClick={onDelete}
              color='error'
              size='small'
            >
               <DeleteIcon />
            </IconButton>
            <IconButton
              onClick={onEdit}
              color='primary'
              size='small'
            >
               <EditIcon />
            </IconButton>
            <IconButton
              onClick={onView}
              color='success'
              size='small'
            >
              <OpenInNewIcon />
              Abrir
            </IconButton>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
  onDelete : PropTypes.func.isRequired,
};
