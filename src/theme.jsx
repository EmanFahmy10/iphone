import { createContext, useState,  useMemo } from "react";

// Context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

// Custom hook to manage color mode and theme
// eslint-disable-next-line react-refresh/only-export-components
export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const toggleColorMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
  };

  const theme = useMemo(() => ({
    mode,
    backgroundColor: mode === "light" ? "bg-white" : "bg-gray-800",
    textColor: mode === "light" ? "text-gray-800" : "text-white",
    // Define more Tailwind CSS classes as needed
  }), [mode]);

  return { theme, toggleColorMode };
};
