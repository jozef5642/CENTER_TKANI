import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createContext } from 'react';
import UserStore from './library/store/UserStore';
import TkanStore from './library/store/TkanStore';

interface ContextValue {
  user: UserStore;
  tkans: TkanStore;
}

export const Context = createContext<ContextValue | null>(null)

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      tkans: new TkanStore(),
    }}>
    <App />
    </Context.Provider>
  </StrictMode>,
)

