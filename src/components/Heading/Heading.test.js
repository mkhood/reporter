import React from 'react';
import { render } from 'react-testing-library';
import Heading from './Heading';

describe('Heading Component', () => {
    it('Heading is rendered', () => {
        const { getByText } = render(<Heading>Sample text</Heading>)
    });
});