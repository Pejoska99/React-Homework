
import  { createContext, useState } from 'react';

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

const defaultContextValues: ThemeContextType = {
    theme: 'light',
    toggleTheme: () => {}
};

export const ThemeContext = createContext<ThemeContextType>(defaultContextValues);

interface ThemeProviderProps {
    children: React.ReactNode;
}
export const ThemeProvider = ({ children }: ThemeProviderProps ) => {
    
       const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    );
};
