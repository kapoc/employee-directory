import React from 'react';
import EmployeeListItem from '../src/components/EmployeeListItem/EmployeeListItem';
import renderer from 'react-test-renderer';


describe('EmployeeListItem tests', () => {
  it('renders user list item if it is set to visible', () => {
    const component = renderer.create(
      <EmployeeListItem key={1}
                 visible={true} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();


    let testInstance = component.root;
    expect(testInstance.findByType('li')).not.toBe(null);
  });
});
