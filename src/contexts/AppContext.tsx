import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export interface AppState {
  isMenuOpen: boolean;
  theme: "light" | "dark";
}

export interface AppContextValue {
  state: AppState;
  toggleMenu: () => void;
  closeMenu: () => void;
  setTheme: (theme: "light" | "dark") => void;
}

const initialState: AppState = {
  isMenuOpen: false,
  theme: "dark",
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(initialState);

  const toggleMenu = useCallback(() => {
    setState((s) => ({ ...s, isMenuOpen: !s.isMenuOpen }));
  }, []);

  const closeMenu = useCallback(() => {
    setState((s) => ({ ...s, isMenuOpen: false }));
  }, []);

  const setTheme = useCallback((theme: "light" | "dark") => {
    setState((s) => ({ ...s, theme }));
  }, []);

  const value: AppContextValue = {
    state,
    toggleMenu,
    closeMenu,
    setTheme,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used within AppProvider");
  }
  return ctx;
}
