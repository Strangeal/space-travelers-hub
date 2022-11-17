import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithProviders from '../../utils/testUtils';
import MissionsPage from '../MissionsPage';

describe('Testing the MissionsPage component', () => {
  beforeEach(() => {
    renderWithProviders(<MissionsPage />);
  });

  it('Checking that the missions table renders correctly: ', () => {
    const table = screen.getByTestId('missions-table');
    expect(table).toBeTruthy();
  });

  it('Checking that the 2 missions are being rendered correctly: ', () => {
    const missions = screen.getAllByTestId('mission-name');
    expect(missions.length).toBe(1);
  });

  it('Checking to see the join Mission button works: ', () => {
    const buttons = screen.getByTestId('join-mission-btn');
    fireEvent.click(buttons);
    const button1 = screen.getByTestId('leave-mission-btn');
    expect(button1.textContent).toBe('Leave mission');
  });

  it('Checking to see the leave Mission button works: ', () => {
    const button = screen.getByTestId('join-mission-btn');
    fireEvent.click(button);
    const button1 = screen.getByTestId('leave-mission-btn');
    fireEvent.click(button1);
    const newBtn = screen.getByTestId('join-mission-btn');
    expect(newBtn.textContent).toBe('Join mission');
  });
});
