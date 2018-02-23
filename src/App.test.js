import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import Content from './Content'
import { mount } from 'enzyme';
import { render } from 'enzyme';

describe('<Foo />', () => {
  it('renders one .main-overlay', () => {
    const wrapper = render(<Content />);
    expect(wrapper.find('.main-overlay').length).toBeGreaterThan(0);
  });
  it('renders one main-overlay-mac', () => {
    const wrapper = render(<Content />);
    expect(wrapper.find('.main-overlay-mac').length).toBeGreaterThan(0);
  });
  it('renders one main-overlay-ff', () => {
    const wrapper = render(<Content />);
    expect(wrapper.find('.main-overlay-ff').length).toBeGreaterThan(0);
  });
  it('renders one main-overlay-ff', () => {
    const wrapper = mount(<Content />);
    const cta = wrapper.find('.one_third_action').forEach((node) => {
      console.log(node.prop('onClick'))
      expect(node.prop('onClick')).toEqual('javascript:onInstallAction();')
    })
    
  });
});