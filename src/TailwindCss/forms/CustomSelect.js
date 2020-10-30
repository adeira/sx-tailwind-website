// @flow

import * as React from 'react';
import { tailwind } from '@adeira/sx-tailwind';

export default function CustomSelect(): React.Node {
  return (
    <div className={tailwind('inline-block relative w-64')}>
      <select
        className={tailwind(
          'block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline',
        )}
      >
        <option>Really long option that will likely overlap the chevron</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      <div className={tailwind('absolute inset-y-0 right-0 flex items-center px-2 text-gray-700')}>
        <svg
          className={tailwind('fill-current h-4 w-4')}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}