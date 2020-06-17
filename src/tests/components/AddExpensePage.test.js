const add = (a, b) => a + b;

test('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
});
// import React from 'react';
// import { shallow } from 'enzyme';
// import { AddExpensePage } from '../../components/AddExpensePage';
// import expenses from '../fixtures/expenses';

// let addExpense, history, wrapper;

// beforeEach(() => {
//   addExpense = jest.fn();
//   history = { push: jest.fn() };
//   wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
// });

// test('should render AddExpensePage correctly', () => {
//   expect(wrapper).toMatchSnapshot();
// });

// test('should handle onSubmit', () => {
//   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
//   expect(history.push).toHaveBeenLastCalledWith('/');
//   expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
// });
