import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  NotFound,
  Courses,
  CourseDetail,
} from '@/routes/index';
import NavFooter from '@/layouts/NavFooter';
import Providers from './components/providers';

function App() {
  return (
    <Providers>
      <Router>
        <NavFooter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courseDetail" element={<CourseDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </NavFooter>
      </Router>
    </Providers>
  )
}

export default App
