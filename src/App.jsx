import { Routes, Route, Navigate } from 'react-router-dom';


import { Blogpage } from './pages/Blogpage';
import { Createpost } from './pages/Createpost';
import { Editpost } from './pages/Editpost';
import { Singlepage } from './pages/Singlepage';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Blogpage />} />
        <Route path="posts/:id" element={<Singlepage />} />
        <Route path="posts/:id/edit" element={<Editpost />} />
        <Route path="posts/new" element={<Createpost />} />
    </Routes>
  );
}

export default App;
