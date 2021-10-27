import cliente from '../../../api/clientes';

const anunciosBaseUrl = '/api'

export const traerAnuncios = () => {
    const url = `${anunciosBaseUrl}/v1/adverts`;
    return cliente.get(url);
}
