import React, { type ReactNode, createContext, useContext, useState } from 'react';

// Types for the context values
export type FontThemeContextType = {
    selectedFont: string;
    setSelectedFont: (font: string) => void;
    isDarkTheme: boolean;
    toggleDarkTheme: () => void;
}

// Context
export const FontThemeContext = createContext<FontThemeContextType |undefined>(undefined);

// Custom hook that can be used by Header component
export const useFontThemeContext = (): FontThemeContextType => {
    const context = useContext(FontThemeContext);

    if (!context) {
        throw new Error('useFontThemeContext must be used within a FontThemeProvider');
      }
      return context;      
}

type FontThemeProviderProps = {
    children: ReactNode;
  };

export const FontThemeProvider = ({ children }: FontThemeProviderProps) => {  
  const [selectedFont, setSelectedFont] = useState("serif");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    setIsDarkTheme(prevState => !prevState);
  }

  const values: FontThemeContextType = {
    selectedFont,
    setSelectedFont,
    isDarkTheme,
    toggleDarkTheme
  }; 

  return (
    <FontThemeContext.Provider value={values}>
        {children}
    </FontThemeContext.Provider>
  );
}