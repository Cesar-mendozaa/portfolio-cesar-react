"use strict";

// Importacion de modulos
import React, { createContext, useContext, useEffect, useState } from "react";

// Creacion del contexto
const ThemeContext = createContext();

// Definicion del hook
export const useTheme = () => useContext(ThemeContext);

// Tema del navegador
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  // Referencia en el body
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Intercambiar temas
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Encapsular la App en el tema aplicado
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
