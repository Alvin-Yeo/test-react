import React, { useEffect, useState } from 'react';
import { getNumber } from '../../utils/fetch';
import Form from '../Form';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [rate, setRate] = useState(0);

  useEffect(() => {
    getNumber()
      .then((res) => {
        setRate(res);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log('Unable to retrieve rate from server: ', e);
      });
  }, []);

  return (
    <React.Fragment>
      <p
        style={{
          backgroundColor: rate < 0 ? 'orange' : rate >= 0.5 ? 'green' : 'red',
          color: 'white',
        }}
      >
        Current exchange rate: {rate}
      </p>
      {isLoading && <p>Loading, please wait...</p>}
      {!isLoading && rate >= 0 && <Form rate={rate} />}
      {!isLoading && rate < 0 && (
        <p>Application error, please contact support team.</p>
      )}
    </React.Fragment>
  );
};

export default Home;
