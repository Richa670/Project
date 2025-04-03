import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Page = () => {
  const navigate = useNavigate();
  const savedContent = localStorage.getItem('savedContent') || 'No content saved';
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>Preview</h2>
      <div 
        style={{ 
          border: '1px solid #eee',
          padding: '20px',
          minHeight: '300px',
          backgroundColor: '#f9f9f9'
        }}
        dangerouslySetInnerHTML={{ __html: savedContent }}
      />
      <Button 
        variant="contained" 
        onClick={() => navigate(-1)}
        sx={{ mt: 2 }}
      >
        Back to Editor
      </Button>
    </div>
  );
};

export default Page;