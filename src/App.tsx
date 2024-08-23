import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  BrowsePage,

  BrowseCoursesPage,
  CourseDetailsPage,

  BrowseTestPage,
  TestDetailsPage,
  TestQuizPage,
  TestResultPage,

  SignInPage,
  RegisterPage,
  ChangePasswordPage,
  ForgotPage,
  VerifyPage,

  DashboardPage,

  NotFoundPage,
} from '@/routes/index';
import NavFooter from '@/layouts/NavFooter';
import SimpleNav from '@/layouts/SimpleNav';
import Providers from './components/providers';
import AuthGuard from './guards/AuthGuard';
import LoginGuard from './guards/LoginGuard';

function App() {
  return (
    <Router>
      <Providers>
        <Routes>
          <Route element={<NavFooter />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/browse" element={<BrowsePage />} />

            <Route path="/browse/courses" element={<BrowseCoursesPage />} />
            <Route path="/browse/courses/:id" element={<CourseDetailsPage />} />

            <Route path="/browse/tests" element={<BrowseTestPage />} />
            <Route path="/browse/tests/:id" element={<TestDetailsPage />} />
            <Route path="/browse/tests/:id/result" element={<TestResultPage />} />

            <Route element={<LoginGuard />}>
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot" element={<ForgotPage />} />
              <Route path="/verify" element={<VerifyPage />} />
              <Route path="/change-password" element={<ChangePasswordPage />} />
            </Route>

            <Route element={<AuthGuard />}>
              <Route path="/dashboard" element={<DashboardPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route element={<SimpleNav />}>
            <Route path="/browse/tests/:id/start" element={<TestQuizPage />} />
          </Route>
        </Routes>
      </Providers>
    </Router>
  )
}

export default App
