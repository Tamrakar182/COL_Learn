import { useAuth } from '@/context';
import { Navigate, Outlet } from "react-router-dom";

const LoginGuard = () => {
    const { authenticated } = useAuth();

    if (authenticated) {
        return <Navigate to="/dashboard" />;
    }

    return <Outlet />;
};

export default LoginGuard;