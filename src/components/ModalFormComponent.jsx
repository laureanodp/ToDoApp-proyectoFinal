import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export default function ModalForm({ 
  open, 
  handleClose, 
  handleConfirm, 
  title, 
  children 
}) {
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
        <Box component="form" noValidate autoComplete="off" marginTop={4}>
          <Grid container spacing={2}>
            {children}
          </Grid>
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginTop: 2 
            }}
          >
            <Button variant="contained" color="primary" onClick={handleConfirm}>
              Confirmar
            </Button>
            <Button variant="outlined" color="error" onClick={handleClose}>
              Cancelar
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

ModalForm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
