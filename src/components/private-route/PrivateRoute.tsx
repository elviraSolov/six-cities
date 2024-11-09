import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '@const';
import { useAppSelector } from '@hooks/useAppSelector';
import { getAuthorizationStatus } from '@store/user-process/selectors';

type PrivareRouteProps = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: PrivareRouteProps): JSX.Element => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
