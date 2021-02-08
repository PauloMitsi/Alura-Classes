export const removeDatasRepetidas = (data) => {
    const datasUnicas = [];

    data.forEach((datas) => {
        if (datasUnicas.indexOf(datas.dataFormatada) === -1) {
            datasUnicas.push(datas.dataFormatada);
        }
    });
    return datasUnicas;
};

export const ordenaData = (data) => {
    data.sort((a, b) => {
        const primeiraData = moment(a, 'DD/MM/YYYY').format('DDMMYYYY');
        const segundaData = moment(b, 'DD/MM/YYYY').format('DDMMYYYY');

        return primeiraData - segundaData;
    });
};
