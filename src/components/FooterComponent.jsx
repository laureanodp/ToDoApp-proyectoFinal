import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from './CopyrightComponent';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        ToDo App
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
        Trabajo Final del Curso MERN Stack - Polo Tecnológico de la Provincia de La Rioja
      </Typography>
      <Copyright />
    </Box>
  );
}
