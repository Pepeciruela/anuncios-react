import cliente, {autorizacionHeader, borrarAutorizacionHeader} from '../../../api/clientes';
import storage from '../../../utilidades/storage';

export const login = credenciales => {
    return cliente.post('/api/auth/login', credenciales).then(({accessToken}) => {
        autorizacionHeader(accessToken);
        storage.set('auth', accessToken);
    });
};

export const loginTemporal = credenciales => {
    return cliente.post('/api/auth/login', credenciales).then(({accessToken}) => {
        autorizacionHeader(accessToken);
    });
};

export const logout = () => Promise.resolve().then(() => {
    borrarAutorizacionHeader();
    storage.remove('auth');
});
