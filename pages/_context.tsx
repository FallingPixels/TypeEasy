import { createContext, useContext } from 'react';
import { io } from 'socket.io-client';
import socket from './_socket';
const AppContext = createContext({});

export function AppWrapper({children} : {children: any}) {
    let globalContext = {
        socket: socket
    };
    return (
        <AppContext.Provider value= { globalContext } >
        { children }
        </AppContext.Provider>
    );
}

export default AppContext;

export function useAppContext() {
    return useContext(AppContext);
}
