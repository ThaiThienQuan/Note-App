import { createContext, useState } from "react";
const ThemeContext = createContext({ theme: 'light', themeHandle: () => {} });
export const ThemeProvider = ({ children }) => {
  const [theme, settheme] = useState(`light`);
  const themeHandle = () => {
    settheme((prev) => (prev == `light` ? `dark` : `light`));
  };
  return (
    <ThemeContext.Provider value={{ theme, themeHandle }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
