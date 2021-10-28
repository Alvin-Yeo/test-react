import { fireEvent, render, screen } from '@testing-library/react';
import Form from './';

beforeEach(() => {
  console.log = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

test('Filling in the form and submit it', () => {
  // step 1: arrange / setup
  render(<Form />); // missing props

  // step 2 & 3: act & assert

  // fill in trading amount field
  const amtInputField = screen.getByLabelText(/trading amount/i);
  fireEvent.change(amtInputField, { target: { value: '100' } });
  expect(amtInputField).toHaveValue('100');

  // fill in remark field
  const remarkTextarea = screen.getByPlaceholderText(/enter remark here.../i);
  fireEvent.change(remarkTextarea, { target: { value: 'abc' } });
  expect(remarkTextarea).toHaveValue('abc');

  // click on submit button
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));
  expect(console.log).toHaveBeenCalledTimes(2);
});
