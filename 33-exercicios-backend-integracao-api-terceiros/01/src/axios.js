const axios = require('axios');

const instanciaAxios = axios.create({
  baseURL: 'https://companyenrichment.abstractapi.com/v1',
  params: {
    api_key: '4145721445be495fb1ed3bd028caf77b',
  },
});

module.exports = instanciaAxios;
