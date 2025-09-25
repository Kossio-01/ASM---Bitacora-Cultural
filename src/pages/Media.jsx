import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
  CircularProgress,
  Alert,
  Chip,
} from '@mui/material';
import { PlayArrow as PlayIcon, Image as ImageIcon } from '@mui/icons-material';
import useContent from '../hooks/useContent';

const Media = () => {
  const { content, loading, error } = useContent();

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg">
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      </Container>
    );
  }

  const mediaContent = content?.media;

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 2 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {mediaContent?.title || 'Media'}
        </Typography>
        
        <Typography variant="h6" color="text.secondary" paragraph>
          {mediaContent?.description}
        </Typography>

        <Box
          sx={{
            mt: 2,
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          {mediaContent?.items?.map((item) => (
            <Card key={item.id} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  sx={{
                    height: 200,
                    bgcolor: 'grey.300',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {item.type === 'video' ? (
                    <PlayIcon sx={{ fontSize: 60, color: 'grey.600' }} />
                  ) : (
                    <ImageIcon sx={{ fontSize: 60, color: 'grey.600' }} />
                  )}
                </CardMedia>
                
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ mb: 1 }}>
                    <Chip
                      label={item.type}
                      size="small"
                      color={item.type === 'video' ? 'secondary' : 'primary'}
                    />
                  </Box>
                  <Typography gutterBottom variant="h6" component="h2">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                
                <CardActions>
                  <Button size="small" color="primary">
                    Ver {item.type === 'video' ? 'Video' : 'Imagen'}
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>

        {!mediaContent?.items?.length && (
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="h6" color="text.secondary">
              No hay contenido multimedia disponible
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Media;