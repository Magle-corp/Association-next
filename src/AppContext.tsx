// Use.
import { createContext, ReactNode, useContext } from 'react';
import { useFetch } from './useFetch';

interface Props {
  children: ReactNode;
}

// @ts-ignore
const AppContext = createContext();

export function AppWrapper({ children }: Props) {
  const homepage = useFetch('/page-d-accueil');
  const identity = useFetch(`/identite`);

  let sharedState = {
    homepage,
    identity,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
