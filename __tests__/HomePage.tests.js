import React from 'react';
import HomePage from '../src/components/HomePage/HomePage';
import Header from '../src/components/Header/Header';
import SearchBar from '../src/components/SearchBar/SearchBar';
import EmployeeList from '../src/components/EmployeeList/EmployeeList';
import renderer from 'react-test-renderer';

describe('HomePage tests', () => {
  it('Ensure homepage has it\'s structure set correctly ', () => {
    const component = renderer.create(
      <HomePage />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();


    let testInstance = component.root;
    expect(testInstance.findByType(Header)).not.toBe(null);
    expect(testInstance.findByType(SearchBar)).not.toBe(null);
    expect(testInstance.findByType(EmployeeList)).not.toBe(null);
  });
});
