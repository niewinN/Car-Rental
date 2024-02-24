import axios from 'axios';

const fetchCompanyData = async (nip) => {
    const BASE_URL = 'https://wl-api.mf.gov.pl/api/search/nip/';
    const DATE = new Date().toISOString().split('T')[0]; 

    try {
        const response = await axios.get(`${BASE_URL}${nip}?date=${DATE}`);
        
        if (response.status === 200) {
            return response.data.result;
        } else {
            throw new Error('Invalid response status');
        }
    } catch (error) {
        console.error('Error fetching company data:', error);
        throw error;
    }
};

export default fetchCompanyData;

