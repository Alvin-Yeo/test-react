import axios from 'axios';
import { getNumber } from '../fetch';

const mockResponse = {
  data: {
    number: 0.123,
  },
};

// jest.mock('axios');

// axios {
//   get: jest.fn(),
//   post: jest.fn(),
//   put: jest.fn(),
//   delete: jest.fn(),
//   ...
// }

describe('Test calling api', () => {
  it('should return a random number (greater than 0, but less than 1) if api endpoint is working', async () => {
    // Test with actual api endpoint

    // step 2: act
    const result = await getNumber();
    // step 3: assert

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(1);

    // ====================================================
    // // Mock axios.get function with jest.fn()
    // // step 1: arrange / setup
    // axios.get = jest.fn().mockResolvedValue(mockResponse); // () => Promise.resolve(value)
    // // step 2: act
    // const result = await getNumber();
    // // step 3: assert
    // expect(result).toBe(0.123);
    // ====================================================
    // // Mock entire axios module with jest.mock()
    // // step 1: arrange / setup
    // console.log('>>>>> axios with jest.mock(): ', axios);
    // axios.get.mockResolvedValue(mockResponse);
    // // step 2: act
    // const result = await getNumber();
    // // step 3: assert
    // expect(axios.get).toHaveBeenCalledTimes(1);
    // expect(result).toBe(0.123);
    // ====================================================
    // // Mock axios.get with spyOn
    // // step 1: arrange / setup
    // const mockAxiosGetFn = jest.spyOn(axios, 'get');
    // mockAxiosGetFn.mockResolvedValue(mockResponse);
    // // step 2: act
    // const result = await getNumber();
    // // step 3: assert
    // expect(axios.get).toHaveBeenCalledTimes(1);
    // expect(result).toBe(0.123);
  });

  it('should return -1 if api endpoint is not working', async () => {
    // // step 1: arrange / setup
    // axios.get = jest.fn().mockRejectedValue({}); // () => Promise.reject(value)
    // // step 2: act
    // const result = await getNumber();
    // // step 3: assert
    // expect(result).toBe(-1);
  });
});
