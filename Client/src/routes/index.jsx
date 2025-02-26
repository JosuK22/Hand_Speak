import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from '../pages/SplashPage/SplashPage';
import AuthenticationPage from '../pages/Authentication/index';
//import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from '../contexts/AuthContext';
import Modes from '../pages/Dashboard/ModeSelection/index'; // Modes component
import Dashboard from '../pages/Dashboard/Dashboard';
import Communication from '../pages/Dashboard/ModeSelection/Communication/communication'; // Communication component
import Automation from '../pages/Dashboard/ModeSelection/Automation/Automation'; // Automation component

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          
          {/* Public Routes */}
          <Route path="/" element={<SplashPage />} />
          <Route path="/auth" element={<AuthenticationPage />} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={
            //<ProtectedRoute>
              <Dashboard />
            //</ProtectedRoute>
          } />

          {/* Parent route for modes (communication and automation) */}
          <Route path="/modes" element={<Modes />}>
            <Route path="communication" element={<Communication />} />
            <Route path="automation" element={<Automation />} />
          </Route>

        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRoutes;
