import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDasboardPage from '../../components/ExpenseDasboardPage';

test('should render ExpenseDasboardPage correctly', () => {
    const wrapper = shallow(<ExpenseDasboardPage />);
    expect(wrapper).toMatchSnapshot();
});