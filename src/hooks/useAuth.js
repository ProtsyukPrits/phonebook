import {
  selectUser,
  selectIsRefreshing,
  selectIsLoggedIn,
} from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return { user, isLoggedIn, isRefreshing };
};
