import { useState, useEffect, useCallback, useMemo, createContext } from 'react';
import { mockUsers } from '@/mock/data';
import { UserType } from '@/types/user';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContextType } from '@/types/context';
import LoadingScreen from '@/components/loading';

type Props = {
    children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<UserType | null>(null);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const signIn = useCallback(async (email: string, password: string) => {
        const foundUser = mockUsers.find(u => u.email === email && u.password === password);
        if (foundUser) {
            setUser(foundUser);
            localStorage.setItem('currentUser', JSON.stringify(foundUser));
            toast({
                title: 'Success',
                description: 'Login success',
                variant: "success",
            });
            navigate('/');
        } else {
            toast({
                title: 'Error',
                description: 'Invalid email or password',
                variant: "destructive",
            })
        }
    }, [toast, navigate]);

    const register = useCallback(async (email: string, password: string, name: string) => {
        if (mockUsers.some(u => u.email === email)) {
            toast({
                title: 'Error',
                description: 'Email Already taken',
                variant: "destructive",
            })
        }
        const newUser = { email, name, password, id: mockUsers.length + 1 };
        mockUsers.push(newUser);
        setUser(newUser);
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        toast({
            title: 'Success',
            description: 'Account created successfully',
            variant: "success",
        });
        navigate('/');
    }, [toast, navigate]);

    const logout = useCallback(() => {
        setUser(null);
        localStorage.removeItem('currentUser');
    }, []);

    const memoizedValue = useMemo(
        () => ({
            user,
            loading,
            authenticated: !!user,
            unauthenticated: !user,
            signIn,
            register,
            logout,
        }),
        [user, loading, signIn, register, logout]
    );

    if (loading) {
        return <LoadingScreen />
    }

    return (
        <AuthContext.Provider value={memoizedValue}>
            {children}
        </AuthContext.Provider>
    );
}