import { useState, useEffect } from 'react';

const useContent = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/content.json');
        if (!response.ok) {
          throw new Error(`Failed to load content: ${response.statusText}`);
        }
        const data = await response.json();
        setContent(data);
      } catch (err) {
        setError(err.message);
        console.error('Error loading content:', err);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  return { content, loading, error };
};

export default useContent;