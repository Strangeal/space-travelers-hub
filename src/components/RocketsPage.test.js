import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import RocketsPage from './RocketsPage';

describe('Rocket page testing', () => {
  test('Does Rocket match the snapshot', () => {
    const rocket = render(
      <BrowserRouter>
        <Provider store={store}>
          <RocketsPage />
        </Provider>
      </BrowserRouter>,
    );
    expect(rocket).toMatchSnapshot();
  });
});
