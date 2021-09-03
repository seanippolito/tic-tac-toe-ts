import React from 'react';
import { render } from '@testing-library/react';
import {App} from './Components/App';
import {Square} from "./Components/Square";

test('renders learn react link', () => {
  const { getAllByText } = render(<App />);
  const linkElement = getAllByText(/Next Player: X/i);
  expect(linkElement[0]).toBeInTheDocument();
});

test('renders learn react link', () => {
  const { getAllByText } = render(<Square value={'O'} onClick={() => 1}/>);
  const linkElement = getAllByText(/O/i);
  expect(linkElement[0]).toBeInTheDocument();
});