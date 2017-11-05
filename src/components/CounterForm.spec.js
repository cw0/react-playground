import React from 'react';
import { shallow } from 'enzyme';
import CounterForm from './CounterForm';

describe('<CounterForm />', () => {
  it('should contain a button', () => {
    const incrementCounter = () => {};
    const decrementCounter = () => {};
    const counter = 0;
    const wrapper = shallow(<CounterForm
      incrementCounter={incrementCounter}
      decrementCounter={decrementCounter}
      counter={counter}
    />);
    const expectedIncrementButton = '<button type="button" id="btn-increment-counter">Increment</button>';
    const expectedDecrementButton = '<button type="button" id="btn-decrement-counter">Decrement</button>';
    
    expect(wrapper.find('#btn-increment-counter').html()).toEqual(expectedIncrementButton);
    expect(wrapper.find('#btn-decrement-counter').html()).toEqual(expectedDecrementButton);
  });  
});