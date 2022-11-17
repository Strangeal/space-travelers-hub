import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/configureStore';
import NotFound from '../components/NotFound';

describe('Not found page testing', () => {
  test('Does not found match the snapshot', () => {
    const notFound = render(
      <BrowserRouter>
        <Provider store={store}>
          <NotFound />
        </Provider>
      </BrowserRouter>,
    );
    expect(notFound).toMatchSnapshot();
  });

  test('Header component should have a heading text of 404', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <NotFound />
        </Provider>
      </BrowserRouter>,
    );
    expect(screen.getByRole('heading')).toHaveTextContent('404');
  });
});
