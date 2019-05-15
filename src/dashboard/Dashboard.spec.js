// Test away

import React from 'react';
import {render} from 'react-testing-library'; 
import 'react-testing-library/cleanup-after-each';
import "jest-dom/extend-expect";
import Dashboard from './Dashboard.js';
import Display from '../display/Display.js';
import Controls from '../controls/Controls.js';

describe('<Dashboard />', () => {

    it('shows the controls and display', () => {
        render(<Display />)
        render(<Controls />)
    })


})


