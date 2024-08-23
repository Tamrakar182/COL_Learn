import { useAuth } from '@/context';
import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = () => {
    const { unauthenticated } = useAuth();

    if (unauthenticated) {
        return <Navigate to="/sign-in" />;
    }

    return <Outlet />;
};

export default AuthGuard;