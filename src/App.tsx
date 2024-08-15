import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  BrowseCoursesPage,
  CourseDetailsPage,
  NotFoundPage,
} from '@/routes/index';
import NavFooter from '@/layouts/NavFooter';
import Providers from './components/providers';

function App() {
  return (
    <Providers>
      <Router>
        <NavFooter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/browse/courses" element={<BrowseCoursesPage />} />
            <Route path="/browse/courses/:id" element={<CourseDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </NavFooter>
      </Router>
    </Providers>
  )
}

export default App
