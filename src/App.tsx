import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  BrowsePage,

  BrowseCoursesPage,
  CourseDetailsPage,
  CourseModulePage,
  CourseUnitPage,
  CourseModuleCompletePage,

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
  EditProfilePage,

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
            <Route path="/browse/courses/:courseId/module/:moduleId" element={<CourseModulePage />} />
            <Route
              path="/browse/courses/:courseId/module/:moduleId/unit/:unitId"
              element={<CourseUnitPage />}
            />
            <Route
              path="/browse/courses/:courseId/module/:moduleId/complete"
              element={<CourseModuleCompletePage />}
            />

            <Route path="/browse/tests" element={<BrowseTestPage />} />
            <Route path="/browse/tests/:id" element={<TestDetailsPage />} />
            <Route path="/browse/tests/:id/result" element={<TestResultPage />} />

            {/* login guard so users cannot navigate to these pages when logged in */}
            <Route element={<LoginGuard />}>
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot" element={<ForgotPage />} />
            </Route>

            {/* this is outside login guard since this is reused to change password when logged in */}
            <Route path="/verify" element={<VerifyPage />} />
            <Route path="/change-password" element={<ChangePasswordPage />} />

            {/* auth guard so users cannot navigate to these pages when not logged in */}
            <Route element={<AuthGuard />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/dashboard/profile/edit" element={<EditProfilePage />} />
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
