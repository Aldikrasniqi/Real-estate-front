import { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    isOpen: false,

    type: 'success',

    message: '',
  });
  return (
    <AlertContext.Provider
    value={{
        ...alert,
        onOpen: (type, message) => setAlert({ isOpen: true, type, message }),
        onClose: () => setAlert({isOpen: false, type: '', message: '', }),
    }}>
    {children}
    </AlertContext.Provider>
 )
};

export const useAlertContext = () => useContext(AlertContext);