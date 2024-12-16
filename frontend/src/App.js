import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import AddNote from './pages/AddNote/AddNote';
import EditNote from './pages/EditNote/EditNote';
import ViewNote from './pages/ViewNote/ViewNote';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-note' element={<AddNote />} />
          <Route path='/edit-note/:id' element={<EditNote />} />
          <Route path='/view-note/:id' element={<ViewNote />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;