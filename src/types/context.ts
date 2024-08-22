import { UserType } from '@/types/user';

export type AuthContextType = {
  user: UserType | null;
  loading: boolean;

  authenticated: boolean;
  unauthenticated: boolean;

  signIn: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
};

export type DropdownContextType = {
  state: boolean;
  open: () => void;
  timedOpen: () => void;
  close: () => void;

  coursesDropdown: boolean;
  handleCourses: (value: boolean) => void;

  tests: boolean;
  handleTests: (value: boolean) => void;
};
