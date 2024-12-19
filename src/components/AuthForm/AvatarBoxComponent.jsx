import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Box from '@mui/material/Box';

export default function AvatarBox() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
      <Avatar sx={{ backgroundColor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
    </Box>
  );
}
