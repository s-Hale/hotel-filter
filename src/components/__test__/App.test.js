import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../App.jsx';
import Buttons from '../Buttons.jsx';
import Cards from '../Cards.jsx';
import Checkboxes from '../Checkboxes.jsx';
import Stars from '../Stars.jsx';

Enzyme.configure({ 'adapter': new Adapter() });

describe('App', () => {
  it('renders a single App element', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('App').exists()).toEqual(true);
  });
  it('renders a Buttons component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('Buttons').exists()).toEqual(true);
  });
  it('renders a Cards component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('Cards').exists()).toEqual(true);
  });
  it('renders a Checkboxes component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('Checkboxes').exists()).toEqual(true);
  });
  it('renders multiple Checkbox components', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('Checkbox').exists()).toEqual(true);
    expect(wrapper.find('Checkbox')).toHaveLength(8);
  });
});

describe('Buttons', () => {
  it('renders three buttons', () => {
    const wrapper = shallow(<Buttons />);
    expect(wrapper.find('button')).toHaveLength(3);
  })
  it('GIVEN Asc button is pressed, correct onClick is called', () => {
    const mockEvent = {
      target: { innerText : 'rating asc' }
    }
    const sortAsc = jest.fn();
    const sortDesc = jest.fn();
    const wrapper = shallow(<Buttons
      sortByRatingDesc={sortDesc}
      sortByRatingAsc={sortAsc}
      />);
    wrapper.find('.rating-button-asc').simulate('click', mockEvent);
    expect(sortAsc).toHaveBeenCalled();
    expect(sortDesc).not.toHaveBeenCalled();
    expect(sortAsc.mock.calls.length).toEqual(1);
  })
    it('GIVEN Desc button is pressed, correct onClick is called', () => {
    const mockEvent = {
      target: { innerText : 'rating desc' }
    }
    const sortAsc = jest.fn();
    const sortDesc = jest.fn();
    const wrapper = shallow(<Buttons
      sortByRatingDesc={sortDesc}
      sortByRatingAsc={sortAsc}
      />);
    wrapper.find('.rating-button-desc').simulate('click', mockEvent);
    expect(sortDesc).toHaveBeenCalled();
    expect(sortAsc).not.toHaveBeenCalled();
    expect(sortDesc.mock.calls.length).toEqual(1);
  })
})

describe('Cards', () => {
  let props;
  beforeEach(() => {
    props = {
     'data':[{
        name: "testdata",
        starRating: 5,
        facilities: ["test", "test"]},
        {
        name: "testdata",
        starRating: 3,
        facilities: ["test", "test"]
      }]
    };
  });
  it('renders a card for each result in state', () => {
    const wrapper = shallow(<Cards {...props} />);
    expect(wrapper.find('.card')).toHaveLength(2);
  });
  it('each card contains correct properties', () => {
    const wrapper = shallow(<Cards {...props} />);
    expect(wrapper.find('.hotel-name')).toHaveLength(2);
    expect(wrapper.find('.facilities-wrapper')).toHaveLength(2);
  });
  it('renders a star component from the rating number prop', () => {
    const wrapper = mount(<Cards {...props} />);
    expect(wrapper.find('.star')).toHaveLength(8);
  });
});

describe('Checkboxes', () => {
  let props;
  beforeEach(() => {
    props = {
     data: []
    };
  });
  it('renders a checkbox for each desired facility', () => {
    const wrapper = shallow(<Checkboxes
      selectedFacilities={props.data}
    />);
    expect(wrapper.find('.checkbox')).toHaveLength(8);
  })
});

describe('Reset', () => {
  let props;
  beforeEach(() => {
    props = {
      filter: jest.fn()
    };
  });
  it('GIVEN reset is clicked, calls reset function', () => {
    const mockEvent = {
      target: { innerText: 'reset' }
    }
    const reset = jest.fn();
    const wrapper = shallow(<Buttons
      filterByFacility={props.filter}
      handleReset={reset}
    />);
    wrapper.find('.reset-button').simulate('click', mockEvent);
    expect(reset).toHaveBeenCalled();
  });
});

// check reset updates then resets state

// describe('Filtering', () => {
//   let props;
//   beforeEach(() => {
//     props = {
//       filter: jest.fn(),
//       data:[]
//     };
//   });
//   it('selecting a box should call onSelect function', () => {
//     const mockEvent = {
//     target: { checked: true }
//   }
//     const filter = jest.fn();
//     const wrapper = mount(<Checkboxes
//       selectedFacilities={props.data}
//       handleSelection={filter}
//     />);
//     wrapper.find('.checkbox').at(0).simulate('click', mockEvent);
//     expect(filter).toHaveBeenCalled();
//   })
// });

// check filter shows only selected

// check does not show unselected



