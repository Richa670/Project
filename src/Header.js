import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Select, 
  MenuItem, 
  FormControl, 
  ToggleButtonGroup, 
  ToggleButton,
  IconButton,
  Box
} from '@mui/material';
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  StrikethroughS,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  FormatListNumbered,
  FormatListBulleted,
  InsertLink,
  Code,
  Subscript,
  Superscript
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Component = () => {
  const [fontSize, setFontSize] = useState('10');
  const [fontFamily, setFontFamily] = useState('Arial');
  const [heading, setHeading] = useState('Heading 1');
  const [formatting, setFormatting] = useState([]);
  const [alignment, setAlignment] = useState('left');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleFormatChange = (event, newFormats) => {
    setFormatting(newFormats);
  };

  const handleAlignmentChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleSave = () => {
    // In a real app, you might save to a database or state management
    localStorage.setItem('savedContent', content);
    navigate('/preview');
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>sample</div>
      <Box sx={{ flexGrow: 1,display: 'flex', direction:'row', gap: 2  }} />
      <Button variant="contained" size="small" onClick={handleSave}  color="success" 
      sx={{ mr:1 }}>Save</Button>
      <Button variant="contained" size="small" onClick={handleSave}  color="success"
       sx={{ mr: 2 }}> Save and Preview </Button>
      <Button variant="contained" size="small" onClick={handleSave} color='grey.100'
      sx={{ mr: 1 }}> Close</Button>
      <Box/>
      </div>


      <AppBar position="static" color="default" elevation={0}>
        <Toolbar variant="dense">
          {/* Font Family Selector */}
          <FormControl size="small" sx={{ mr: 1, minWidth: 120 }}>
            <Select
              value={fontFamily}
              onChange={(e) => setFontFamily(e.target.value)}
            >
              <MenuItem value="Arial">Arial</MenuItem>
              <MenuItem value="Times New Roman">Times New Roman</MenuItem>
              <MenuItem value="Courier New">Courier New</MenuItem>
              <MenuItem value="Georgia">Georgia</MenuItem>
              <MenuItem value="Verdana">Verdana</MenuItem>
              <MenuItem value="Impact">Impact</MenuItem>
              <MenuItem value="Comic Sans MS">Comic Sans</MenuItem>
              <MenuItem value="serif">Serif</MenuItem>
              <MenuItem value="sans-serif">Sans-serif</MenuItem>
              <MenuItem value="monospace">Monospace</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ mr: 1, minWidth: 60 }}>
            <Select
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              displayEmpty
            >
              <MenuItem value="10">10 pt</MenuItem>
              <MenuItem value="12">12 pt</MenuItem>
              <MenuItem value="14">14 pt</MenuItem>
              <MenuItem value="16">16 pt</MenuItem>
              <MenuItem value="18">18 pt</MenuItem>
              <MenuItem value="20">20 pt</MenuItem>
              <MenuItem value="24">24 pt</MenuItem>
              <MenuItem value="32">32 pt</MenuItem>
              <MenuItem value="48">48 pt</MenuItem>
            </Select>
          </FormControl>
          
          <FormControl size="small" sx={{ mr: 1, minWidth: 100 }}>
            <Select
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              displayEmpty
            >
              <MenuItem value="Heading 1">Heading 1</MenuItem>
              <MenuItem value="Heading 2">Heading 2</MenuItem>
              <MenuItem value="Heading 3">Heading 3</MenuItem>
              <MenuItem value="Paragraph">Paragraph</MenuItem>
            </Select>
          </FormControl>
          
          <ToggleButtonGroup
            value={formatting}
            onChange={handleFormatChange}
            size="small"
            sx={{ mr: 1 }}
            exclusive={false}
          >
            <ToggleButton value="bold">
              <FormatBold fontSize="small" />
            </ToggleButton>
            <ToggleButton value="italic">
              <FormatItalic fontSize="small" />
            </ToggleButton>
            <ToggleButton value="underline">
              <FormatUnderlined fontSize="small" />
            </ToggleButton>
            <ToggleButton value="strikethrough">
              <StrikethroughS fontSize="small" />
            </ToggleButton>
          </ToggleButtonGroup>
          
          <ToggleButtonGroup 
            value={alignment}
            onChange={handleAlignmentChange}
            size="small" 
            sx={{ mr: 1 }}
            exclusive
          >
            <ToggleButton value="left">
              <FormatAlignLeft fontSize="small" />
            </ToggleButton>
            <ToggleButton value="center">
              <FormatAlignCenter fontSize="small" />
            </ToggleButton>
            <ToggleButton value="right">
              <FormatAlignRight fontSize="small" />
            </ToggleButton>
          </ToggleButtonGroup>
          
          <ToggleButtonGroup size="small" sx={{ mr: 1 }} exclusive>
            <ToggleButton value="listNumbered">
              <FormatListNumbered fontSize="small" />
            </ToggleButton>
            <ToggleButton value="listBulleted">
              <FormatListBulleted fontSize="small" />
            </ToggleButton>
          </ToggleButtonGroup>
          
          <IconButton size="small" sx={{ mr: 1 }}>
            <InsertLink fontSize="small" />
          </IconButton>
          
          <ToggleButtonGroup size="small" sx={{ mr: 1 }} exclusive>
            <ToggleButton value="subscript">
              <Subscript fontSize="small" />
            </ToggleButton>
            <ToggleButton value="superscript">
              <Superscript fontSize="small" />
            </ToggleButton>
          </ToggleButtonGroup>
          
          <IconButton size="small">
            <Code fontSize="small" />
          </IconButton>
          </Toolbar>
          </AppBar>
          

      <div style={{ padding: '20px' }}>
        <textarea 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ 
            width: '95%', 
            minHeight: '490px',
            border: '2px solid #ccc',
            padding: '20px',
            fontSize: `${fontSize}pt`,
            fontFamily: fontFamily,
            textAlign: alignment
          }}
          placeholder="Type your content here..."
        />
       
  
      </div>
    </div>
  );
};

export default Component;