import React, { createContext, useContext } from 'react';

const Context = createContext();

export const useStore = () => useContext(Context);
