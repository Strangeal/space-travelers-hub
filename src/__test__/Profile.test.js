import React from 'react';
import { screen } from '@testing-library/react';
import renderWithProviders from '../utils/testUtils'
import Profile from '../components/Profile';

describe('Testing the Profile component', () => {
  it('Checking that the Missions section renders correctly: ', () => {
    renderWithProviders(<Profile />);
    const missionsHeader = screen.getByText('My Missions');
    expect(missionsHeader).toBeTruthy();
  });

  it('Checking that the Rockets section renders correctly: ', () => {
    renderWithProviders(<Profile />);
    const rocketsHeader = screen.getByText('My Rockets');
    expect(rocketsHeader).toBeTruthy();
  });

  it('Checking that the Rockets section renders correctly: ', () => {
    renderWithProviders(<Profile />);
    const rocketsHeader = screen.getByText('My Rockets');
    expect(rocketsHeader).toBeTruthy();
  });

  it('Checking that no missoins are joined', () => {
    renderWithProviders(<Profile />);
    const missionsMsg = screen.getByText('No Missions Joined');
    expect(missionsMsg).toBeTruthy();
  });

  it('Checking that no missoins are joined', () => {
    renderWithProviders(<Profile />);
    const rocketsMsg = screen.getByText('No Missions Joined');
    expect(rocketsMsg).toBeTruthy();
  });
});
