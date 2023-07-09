/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export interface ITranslation {
  t: (key: string, data?: any) => string;
}
const LocalizationContext = React.createContext<ITranslation>({
  t: (key: string, data?: any) => {
    return data ?? key;
  },
});

export default LocalizationContext;
