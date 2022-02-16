import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders learn react link', () => {
  const renders = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // screen.debug(renders)
    screen.debug();
  expect(renders.getByText(/HELLO/i)).toBeInTheDocument();
});
