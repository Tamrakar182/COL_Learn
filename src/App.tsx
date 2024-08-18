import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  BrowsePage,

  BrowseCoursesPage,
  CourseDetailsPage,

  BrowseTestPage,
  TestDetailsPage,
  TestPage,
  TestResultPage,

  SignInPage,
  RegisterPage,

  NotFoundPage,
} from '@/routes/index';
import NavFooter from '@/layouts/NavFooter';
import SimpleNav from '@/layouts/SimpleNav';
import Providers from './components/providers';

function App() {
  return (
    <Providers>
      <Router>
        <Routes>
          <Route element={<NavFooter />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/browse" element={<BrowsePage />} />

            <Route path="/browse/courses" element={<BrowseCoursesPage />} />
            <Route path="/browse/courses/:id" element={<CourseDetailsPage />} />

            <Route path="/browse/tests" element={<BrowseTestPage />} />
            <Route path="/browse/tests/:id" element={<TestDetailsPage />} />
            <Route path="/browse/tests/:id/result" element={<TestResultPage />} />

            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route element={<SimpleNav />}>
            <Route path="/browse/tests/:id/start" element={<TestPage />} />
          </Route>
        </Routes>
      </Router>
    </Providers>
  )
}

export default App
