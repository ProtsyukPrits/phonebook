import Avatar from 'avataaars';
import { generateRandomAvatarOptions } from '..//..//avatar';

const Avatars = () => {
  return (
    <>
      <Avatar
        style={{ width: '50px', height: '50px' }}
        avatarStyle="Circle"
        {...generateRandomAvatarOptions()}
      />
    </>
  );
};

export default Avatars;
