import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; 
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

const ProtectedRoute = ({ children }) => {
    const { authTokens } = useAuth();
  
    if (!authTokens) {
      return <Navigate to="/auth" replace />;
    }
  
    return children; 
  };  

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
