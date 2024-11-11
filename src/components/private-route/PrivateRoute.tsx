import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '@const';
import { useAppSelector } from '@hooks/useAppSelector';
import { getAuthorizationStatus } from '@store/user-process/selectors';
import Spinner from '@components/spinner/Spinner';

type PrivareRouteProps = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: PrivareRouteProps): JSX.Element => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner />;
  }

  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
