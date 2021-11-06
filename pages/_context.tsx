import { AppContext } from 'next/app';
import { createContext, useContext } from 'react';
import { io, Socket } from 'socket.io-client';

interface TypeEasyContext  {
    socket: Socket;
};

const typeEasyContext: TypeEasyContext = {
    socket: io(`http://${window.location.hostname}:3001`)
}

const AppContext = createContext(typeEasyContext);

export function AppWrapper({children} : {children: any}) {
    return (
        <AppContext.Provider value= { typeEasyContext } >
        { children }
        </AppContext.Provider>
    );
}

/** Used for getting app context in class components */
export default AppContext;

/**
 * Get the current context's value
 * @returns {TypeEasyContext}
 */
export function useAppContext(): TypeEasyContext {
    return useContext(AppContext);
}
