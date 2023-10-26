// PremiumContext.js

import React, { createContext, useContext } from 'react';

const PremiumContext = createContext();

export const PremiumProvider = ({ value, children }) => {
  return <PremiumContext.Provider value={value}>{children}</PremiumContext.Provider>;
};

export const usePremium = () => {
  return useContext(PremiumContext);
};
