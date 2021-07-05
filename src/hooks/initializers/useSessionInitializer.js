import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadSession, logout } from '../../redux/actions/authActions';
import AuthService from '../../services/api/AuthService';
import { useAuthState } from '../redux/useAuthState';

export function useSessionInitializer() {
  const dispatch = useDispatch()
  const { hasLoadedSession } = useAuthState();

  useEffect(() => {
    AuthService.setApiClientInterceptor({
      onLogout: () => dispatch(logout()),
    })

    dispatch(loadSession())
  }, [dispatch])

  return { hasLoadedSession }
}
