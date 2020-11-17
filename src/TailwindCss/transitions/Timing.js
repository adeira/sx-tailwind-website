// @flow

import type { Node } from 'react';
import { tailwind } from '@adeira/sx-tailwind';

export default function Timing(): Node {
  return (
    <>
      <button
        className={tailwind(
          'transition duration-700 ease-in transform hover:scale-125 bg-blue-500 text-white font-bold py-2 px-4 mr-8 rounded',
        )}
        type="button"
      >
        Hover me
      </button>

      <button
        className={tailwind(
          'transition duration-700 ease-out transform hover:scale-125 bg-blue-500 text-white font-bold py-2 px-4 mr-8 rounded',
        )}
        type="button"
      >
        Hover me
      </button>

      <button
        className={tailwind(
          'transition duration-700 ease-in-out transform hover:scale-125 bg-blue-500 text-white font-bold py-2 px-4 mr-8 rounded',
        )}
        type="button"
      >
        Hover me
      </button>
    </>
  );
}