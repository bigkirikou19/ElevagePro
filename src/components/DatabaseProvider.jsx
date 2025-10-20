// DatabaseProvider.jsx
import React, { createContext, useState } from "react";

export const DatabaseContext = createContext();

export function DatabaseProvider({ children }) {
  const [data, setData] = useState([]);
  return (
    <DatabaseContext.Provider value={{ data, setData }}>
      {children}
    </DatabaseContext.Provider>
  );
}
// DatabaseProvider.jsx
import React, { createContext, useState } from "react";

export const DatabaseContext = createContext();

export function DatabaseProvider({ children }) {
  const [data, setData] = useState([]);
  return (
    <DatabaseContext.Provider value={{ data, setData }}>
      {children}
    </DatabaseContext.Provider>
  );
}
