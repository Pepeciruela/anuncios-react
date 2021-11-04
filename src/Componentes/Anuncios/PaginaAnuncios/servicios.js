import cliente from '../../../api/clientes';

export const traerAnuncios = () => {
    const url = '/api/v1/adverts';
    return cliente.get(url);
}

export const crearAnuncio = (name, sale, price, tags, photo) => {
    const url = '/api/v1/adverts';
    return cliente.post(url, name, sale, price, tags, photo);
}
