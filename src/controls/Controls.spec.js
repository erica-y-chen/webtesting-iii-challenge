// Test away!


// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
// - the closed toggle button is disabled if the gate is closed
// - the locked toggle button is disabled if the gate is open


import React from 'react';
import {render, fireEvent} from 'react-testing-library'; 
import 'react-testing-library/cleanup-after-each';
import "jest-dom/extend-expect";
import Controls from './Controls.js';

describe('<Controls />', () => {

    it('runs the tests', () => {
        render(<Controls />)

    })

    it('provide buttons to toggle the `closed` and `locked` states.', () => {
        const { getByTestId } = render(<Controls locked={true} />);
            const closed = getByTestId('closed');
            const locked = getByTestId('locked');

            expect(locked).toHaveTextContent('Close Gate')
    })


    it('buttons text changes to reflect the state the door will be in if clicked', () => {
        const { getByTestId } = render(<Controls locked={true} />);
            const closed = getByTestId('closed');
            fireEvent.click(closed);

            expect(closed).toHaveTextContent('Unlock Gate')
    })

    it('the closed toggle button is disabled if the gate is closed', () => {
        const { getByTestId } = render(<Controls closed={true} />);
            const closed = getByTestId('closed');

            expect(closed).toHaveProperty("disabled");
    })

    it('the locked toggle button is diabled if the gate is open', () => {
        const { getByTestId } = render(<Controls closed={false} />);
            const locked = getByTestId('locked');

            expect(locked).toHaveProperty("disabled");
    })

})



// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
// - the closed toggle button is disabled if the gate is closed
// - the locked toggle button is disabled if the gate is open