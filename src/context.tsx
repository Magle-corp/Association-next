// Use.
import { createContext, useContext, ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
}

// @ts-ignore
const AppContext = createContext();

/**
 * Custom React context.
 *
 * @param children
 *   React Node children.
 */
export function AppWrapper({ children }: Props) {
  const [contactFormSubState, setContactFormSubState] = useState<number>(0);

  // States shared over the application.
  let sharedState = {
    contactFormSubState,
    setContactFormSubState,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
