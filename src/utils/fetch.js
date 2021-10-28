import axios from 'axios';

export const getNumber = async () => {
  try {
    const { data } = await axios.get('http://localhost:3001/number');
    return parseFloat(data.number); // what happen if forget to parseFloat()
  } catch (e) {
    // console.log('Fetch error: ', e);
    return -1;
  }
};
