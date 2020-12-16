import NavItem from './NavItem';
import { render } from '@testing-library/react';
import React from 'react';
import { motion } from 'framer-motion';

describe('Testing navigation items', () => {
  it('Is rendering proper link names', () => {
    const { debug, getByText } = render(
      <NavItem />
    );
    debug();
  });
});
