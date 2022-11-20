import { BigHead } from '@bigheads/core';
import { getRandomOptions } from 'utils/bigheads';

const Avatars = () => {
  return (
    <div style={{ width: '50px' }}>
      <BigHead {...getRandomOptions()} />
    </div>
  );
};
export default Avatars;
