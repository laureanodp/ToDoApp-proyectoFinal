import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// eslint-disable-next-line react/prop-types
export default function CardWrapper({ children }) {
  return (
    <Card sx={{ width: '110%', boxShadow: 5, borderRadius: 2, padding: 3 }}>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
