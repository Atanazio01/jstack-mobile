import React from 'react';
import { act, create } from 'react-test-renderer';

jest.mock('react-native-safe-area-context', () => {
  const mockReact = require('react');
  const { View } = require('react-native');
  return {
    SafeAreaProvider: ({ children }) =>
      mockReact.createElement(View, null, children),
    SafeAreaView: ({ children, style }) =>
      mockReact.createElement(View, { style }, children),
  };
});

import App from '../index';

describe('App', () => {
  it('renders without crashing', () => {
    let renderer;
    act(() => {
      renderer = create(<App />);
    });
    expect(renderer.toJSON()).not.toBeNull();
  });
});
