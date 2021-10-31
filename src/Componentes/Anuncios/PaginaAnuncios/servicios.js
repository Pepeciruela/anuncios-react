import cliente from '../../../api/clientes';

export const traerAnuncios = () => {
    const url = '/api/v1/adverts';
    return cliente.get(url);
}
