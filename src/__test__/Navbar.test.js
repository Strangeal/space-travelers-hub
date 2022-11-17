import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/configureStore';
import Navbar from '../components/Navbar';

describe('Navbar component testing', () => {
  test('Does the navbar match the snapshot', () => {
    const nav = render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );
    expect(nav).toMatchSnapshot();
  });

  test("Navbar component should have a heading text of 'Space Travelers' Hub' ", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );
    expect(screen.getByRole('heading')).toHaveTextContent("Space Travelers' Hub");
  });
});
