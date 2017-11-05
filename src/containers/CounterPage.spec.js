import React from 'react';
import {shallow} from 'enzyme';
import {CounterPage} from './CounterPage';
import CounterForm from '../components/CounterForm';

describe('<CounterPage />', () => {
  it('should contain <CounterFrom />', () => {
    const actions = {
      incrementCounter: () => {},
      decrementCounter: () => {},
    };
    const counter = 0;
    const wrapper = shallow(<CounterPage actions={actions} counter={counter}/>);
    expect(wrapper.find(CounterForm).length).toEqual(1);
  });
});