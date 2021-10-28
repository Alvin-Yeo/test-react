import React, { useState } from 'react';

const Form = ({ rate }) => {
  const [amount, setAmount] = useState('');
  const [remark, setRemark] = useState('');

  // console.log('>>>> rate: ', rate);

  const submitForm = (e) => {
    e.preventDefault();
    console.log('Submitted ammount: ', amount);
    console.log('Submitted remark: ', remark);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="amt">Trading Amount</label>
      <br />
      <input
        id="amt"
        name="amt"
        placeholder="0"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <br />
      <textarea
        name="remark"
        placeholder="Enter remark here..."
        value={remark}
        onChange={(e) => setRemark(e.target.value)}
      ></textarea>
      <br />
      <br />
      <button type="submit" disabled={rate < 0.5}>
        Submit
      </button>
    </form>
  );
};

export default Form;
