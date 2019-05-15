
import React from 'react';
import {render} from 'react-testing-library'; 
import 'react-testing-library/cleanup-after-each';
import "jest-dom/extend-expect";
import Display from './Display.js';

describe('<Display />', () => {

    it('runs the tests', () => {
        render(<Display />)
        // expect(true).toBe(true);
    })
    // it("should render", () => {
    //     render(<h1>hi</h1>);
    //   });


    it('should display if gate is open/closed', () => {

    const { getByText, getByTestId } = render(<Display locked={false} closed ={false}/>);
        // const locked = getByText('locked');
        // const closed = getByTestId('closed');
        const locked = getByTestId("locked");
        const closed = getByTestId("closed");
        expect(locked).toHaveTextContent('Unlocked')
        expect(closed).toHaveTextContent('Open')
    })

    it('displays closed if the closed prop is true and open if otherwise', () => {
        const { getByTestId } = render(<Display closed={true}/>);

        const closed = getByTestId("closed");
        expect(closed).toHaveTextContent('Closed');
    })

    it('displays locked if the locked prop is true and unlocked if otherwise', () => {
        const { getByTestId } = render(<Display locked={true}/>);

        const locked = getByTestId("locked");
        expect(locked).toHaveTextContent('Locked');
    })

    it('when locked or closed use the red-led class', () => {
        const { getByTestId } = render(<Display locked={true}/>);

        const locked = getByTestId('locked');
        expect(locked).toHaveClass("red-led");
    })

    it('when unlocked or open use the green-led class', () => {
        const { getByTestId } = render(<Display locked={false}/>);

        const locked = getByTestId('locked');
        expect(locked).toHaveClass("green-led");
    })
});

// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class