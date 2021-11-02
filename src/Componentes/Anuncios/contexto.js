import React from 'react';

const ContextoRegistro = React.createContext()

export const ContextoRegistroProvider = ContextoRegistro.Provider;
export const ContextoRegistroConsumer = ContextoRegistro.Consumer;

export default ContextoRegistro;