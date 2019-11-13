import React from 'react';
import SearchBar from '../src/components/SearchBar/SearchBar';
import renderer from 'react-test-renderer';
import { fireEvent } from '@testing-library/react'


describe('SearchBar tests', () => {
  it('search bar should be rendered with no value', () => {
    const component = renderer.create(
      <SearchBar />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    let testInstance = component.root;

    const mockChange = jest.fn()
    const input = testInstance.find(node => node.type === 'input');

    expect(input).not.toBe(null);
    expect(input.value).toEqual(undefined);
  });
});
