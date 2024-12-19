import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box } from '@mui/material';

export default function Copyright() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <GitHubIcon sx={{ marginRight: 1, fontSize: 24, color: 'primary.main' }} />
      <Typography variant="body2" color="text.secondary" align="center">
        {'GitHub: '}
        <Link
          color="inherit"
          href="https://github.com/laureanodp"
          sx={{ textDecoration: 'none', color: 'primary.main', '&:hover': { color: 'secondary.main' } }}
        >
          laureanodp
        </Link>
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}
