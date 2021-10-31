import cliente, {autorizacionHeader} from '../../../api/clientes';
import storage from '../../../utilidades/storage';

export const login = credenciales => {
    return cliente.post('/api/auth/login', credenciales).then(({accessToken}) => {
        autorizacionHeader(accessToken);
        storage.set('auth', accessToken);
    });
};