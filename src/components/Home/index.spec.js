import { render, screen } from '@testing-library/react';
import Home from './';
import { server, rest } from '../../testServer';

test('Home component renders with form with rate < 0.5', async () => {
  // step 1: arrange / setup
  // get ready your mock data for server response
  server.use(
    rest.get('http://localhost:3001/number', (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ number: 0.123 }));
    })
  );

  // step 2: act
  // render component in virtual dom
  render(<Home />);

  // step 3: assert
  // screen.debug();
  expect(await screen.findByText(/0.123/i)).toBeInTheDocument();
  expect(await screen.findByText(/0.123/i)).toHaveStyle({
    backgroundColor: 'red',
  });
  expect(screen.getByText(/trading amount/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /submit/i })).toBeDisabled();
});

test('Home component renders with form with rate >= 0.5', async () => {
  // step 1: arrange / setup
  // get ready your mock data for server response
  server.use(
    rest.get('http://localhost:3001/number', (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ number: 0.789 }));
    })
  );

  // step 2: act
  // render component in virtual dom
  render(<Home />);

  // step 3: assert
  // screen.debug();
  expect(await screen.findByText(/0.789/i)).toBeInTheDocument();
  expect(await screen.findByText(/0.789/i)).toHaveStyle({
    backgroundColor: 'green',
  });
  expect(screen.getByText(/trading amount/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /submit/i })).toBeEnabled();
});

test('Home component renders with error message after failed to recieve data from server', async () => {
  // step 1: arrange / setup
  // get ready your mock data for server response
  server.use(
    rest.get('http://localhost:3001/number', (req, res, ctx) => {
      return res(ctx.status(400), ctx.json({}));
    })
  );

  // step 2: act
  // render component in virtual dom
  render(<Home />);

  // step 3: assert
  // screen.debug();
  expect(await screen.findByText(/application error/i)).toBeInTheDocument();
});
