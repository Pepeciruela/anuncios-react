import cliente from '../../../api/clientes';

export const traerAnuncios = () => {
    const url = '/api/v1/adverts';
    return cliente.get(url);
}

export const crearAnuncio = (name, sale, price, tags) => {
    const url = '/api/v1/adverts';
    return cliente.post(url, name, sale, price, tags);
}

export const traerAnuncio = (id) => {

    const url = `/api/v1/adverts/${id}`;
    return cliente.get(url);

}

export const borrarAd = (id) => {
    const url = `/api/v1/adverts/${id}`;
    return cliente.delete(url);
}
