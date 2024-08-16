import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  BrowseCoursesPage,
  CourseDetailsPage,

  BrowseTestPage,
  TestDetailsPage,

  SignInPage,
  RegisterPage,

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

            <Route path="/browse/tests" element={<BrowseTestPage />} />
            <Route path="/browse/tests/:id" element={<TestDetailsPage />} />

            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </NavFooter>
      </Router>
    </Providers>
  )
}

export default App
