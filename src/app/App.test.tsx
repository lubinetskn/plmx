import {MemoryRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import React from 'react';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('Header', () => {
  test('"How it works" link points to the correct page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const submitButton = screen.getByRole('button', {name: /войти/i});
    userEvent.click(submitButton);

    screen.debug();
  });
});
