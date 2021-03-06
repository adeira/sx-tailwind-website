// @flow strict

import type { Node } from 'react';

export default function Plastic(): Node {
  return (
    <button
      sxt="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      type="button"
    >
      Button
    </button>
  );
}

export const code = `<button sxt="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Button
</button>
`;
