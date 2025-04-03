import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header'; 
import Page from './Content'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/preview" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;