import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("contains foul button", () => {
  const myDoc = render(<App />)
  myDoc.getByText(/foul/i);
})

test("contains hit button", () => {
  const myDoc = render(<App/>);
  myDoc.getByText(/foul/i);
})

test("contains ball button", () => {
  const myDoc = render(<App/>);
  myDoc.queryAllByTitle(/ball/i);
})

test("contains strike button", () => {
  const myDoc= render(<App/>);
  myDoc.queryAllByTitle(/strike/i);
})

