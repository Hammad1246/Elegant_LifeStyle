"use client"
import { createContext, useContext, useState } from "react";

const FurnitureContext = createContext();

export function FurnitureProvider({ children }) {
  const [selectedFurniture, setSelectedFurniture] = useState(null);

  return (
    <FurnitureContext.Provider value={{ selectedFurniture, setSelectedFurniture }}>
      {children}
    </FurnitureContext.Provider>
  );
}

export function useFurniture() {
  return useContext(FurnitureContext);
}
