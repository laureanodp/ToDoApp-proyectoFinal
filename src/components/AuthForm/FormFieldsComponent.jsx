import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';

export function FormFields({ fields, onFieldChange }) {
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    //console.log('Change detected on:', name, 'New value:', fieldValue); // Debug
    if (onFieldChange) {
      onFieldChange(name, fieldValue); // Propagar cambios al componente padre
    }
  };
  return (
    <Grid container spacing={2}>
      {fields.map((field, index) => (
        <Grid item xs={12} key={index}>
          {field.type === 'text' || field.type === 'email' || field.type === 'password' ? (
            <TextField
              variant="outlined"
              required={field.required || false}
              fullWidth
              label={field.label}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              autoFocus={field.autoFocus || false}
              onChange={handleChange} // Conecta al callback
            />
          ) : null}

          {field.type === 'checkbox' && (
            <FormControlLabel
              control={
                <Checkbox
                  name={field.name}
                  color="primary"
                  onChange={handleChange} // Conecta al callback
                />
              }
              label={field.label}
            />
          )}
        </Grid>
      ))}
    </Grid>
  );
}

FormFields.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['text', 'email', 'password', 'checkbox']).isRequired,
      required: PropTypes.bool,
      autoComplete: PropTypes.string,
      autoFocus: PropTypes.bool,
    })
  ).isRequired,
  onFieldChange: PropTypes.func.isRequired,
};

