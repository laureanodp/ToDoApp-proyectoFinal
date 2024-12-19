import  { useState } from 'react';
import AvatarBox from '../components/AuthForm/AvatarBoxComponent';
import CardWrapper from '../components/AuthForm/CardWrapperComponent';
import { FormFields } from '../components/AuthForm/FormFieldsComponent';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();
   const { login} = useAuth();
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  // Maneja los cambios de los campos
  const handleFieldChange = (fieldName, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); // Detener el comportamiento predeterminado
    await login(formValues.email, formValues.password);
    navigate("/BoardList")
  };

  const fields = [
    { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email', autoFocus: true },
    { name: 'password', label: 'Contraseña', type: 'password', required: true, autoComplete: 'current-password' },
  ];

  return (
  
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CardWrapper>
            <AvatarBox />
            <Typography component="h1" variant="h5" align="center" sx={{ marginBottom: 3 }}>
              Bienvenido
            </Typography>
            <Box component="form" sx={{ width: '100%' }} onSubmit={handleSubmit} noValidate>
              <FormFields fields={fields} onFieldChange={handleFieldChange} />
              <Button type="submit" fullWidth variant="contained" color="primary" sx={{ marginTop: 3, marginBottom: 2 }}>
                Iniciar sesión
              </Button>
              <Grid container>
                <Grid item>
                  <Link variant="body2" onClick={()=>{navigate("/SignUp")}}>
                    {"¿No tienes una cuenta? Regístrese"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </CardWrapper>
        </Box>
      </Container>
   
  );
}