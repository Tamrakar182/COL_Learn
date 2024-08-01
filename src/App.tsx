import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  NotFound
} from '@/routes/index';
import NavFooter from '@/layouts/NavFooter';

function App() {
  return (
    <Router>
      <NavFooter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </NavFooter>
    </Router>
  )
}

export default App
