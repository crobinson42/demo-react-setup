import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import { add } from 'lodash'

it('Renders without blowing up', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('Matches the snapshot', () => {
  const tree = renderer
    .create(<App />)
    .toJSON()

  expect(tree).toMatchSnapshot();
})

it('Knows the window location', () => {
  Object.defineProperty(window.location, 'href', {
    writable: true,
    value: 'http://test.com?param=123'
  });

  console.log(window.location.href)
})


it('To import a mock', () => {
  expect(add(1,2)).toEqual(3)
})
