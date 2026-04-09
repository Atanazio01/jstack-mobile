import React from 'react';
import { act, create } from 'react-test-renderer';
import { Button as AndroidButton } from '../index.android';
import { Button as IosButton } from '../index.ios';
import { Button as DefaultButton } from '../index';

describe('Button', () => {
  it('renders the default Button without crashing', () => {
    let renderer;
    act(() => {
      renderer = create(<DefaultButton />);
    });
    expect(renderer.toJSON()).not.toBeNull();
  });

  it('renders the Android Button with correct background color', () => {
    let renderer;
    act(() => {
      renderer = create(<AndroidButton />);
    });
    const json = renderer.toJSON();
    expect(json).not.toBeNull();
    expect(json.props.style.backgroundColor).toBe('green');
  });

  it('renders the iOS Button with correct background color', () => {
    let renderer;
    act(() => {
      renderer = create(<IosButton />);
    });
    const json = renderer.toJSON();
    expect(json).not.toBeNull();
    expect(json.props.style.backgroundColor).toBe('blue');
  });

  it('renders the Android Button with correct label', () => {
    let renderer;
    act(() => {
      renderer = create(<AndroidButton />);
    });
    const json = renderer.toJSON();
    expect(json.children[0].children[0]).toBe('Button Android');
  });

  it('renders the iOS Button with correct label', () => {
    let renderer;
    act(() => {
      renderer = create(<IosButton />);
    });
    const json = renderer.toJSON();
    expect(json.children[0].children[0]).toBe('Button IOS');
  });
});
