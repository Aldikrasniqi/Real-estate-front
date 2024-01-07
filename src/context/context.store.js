import React, { createContext, useContext } from 'react';
import useProperty from '../hooks/useProperty';
const PropertyContext = createContext();

export function usePropertyContext() {
  return useContext(PropertyContext);
}

export function PropertyProvider(props){
    const property = useProperty();
    if (!property) return null;

    return (
        <PropertyContext.Provider value={property}>
            {props.children}
        </PropertyContext.Provider>
    )
}

