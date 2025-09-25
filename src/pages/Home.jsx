import {
  Container,
  Typography,
  Paper,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
  Alert,
} from '@mui/material';
import { CheckCircle as CheckIcon } from '@mui/icons-material';
import useContent from '../hooks/useContent';

const Home = () => {
  const { content, loading, error } = useContent();

  if (loading) {
    return (
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md">
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      </Container>
    );
  }

  const homeContent = content?.home;

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 2 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {homeContent?.title || 'Bienvenido'}
        </Typography>
        
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h6" color="text.secondary" paragraph>
            {homeContent?.description}
          </Typography>
          
          {homeContent?.features && (
            <>
              <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Características principales:
              </Typography>
              <List>
                {homeContent.features.map((feature, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </>
          )}
        </Paper>

        <Paper elevation={1} sx={{ p: 3, bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h6" align="center">
            {content?.app?.subtitle}
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Home;