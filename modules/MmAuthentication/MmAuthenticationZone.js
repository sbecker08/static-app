"use client";

import React, { useState } from 'react';

const MmAuthenticationContext = React.createContext(null);

function MmAuthenticationZone({ children }){

    const [user, setUser] = useState({ firstName: 'Shaun', lastName: 'Becker' })

    return (
        <MmAuthenticationContext.Provider value={{ user }}>
            {children}
        </MmAuthenticationContext.Provider>
    );
}

export { MmAuthenticationZone, MmAuthenticationContext };