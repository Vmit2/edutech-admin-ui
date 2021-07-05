import PropTypes from 'prop-types';
import React from 'react';
import SplashScreen from './components/SplashScreen';
import {
  useSessionInitializer,
} from './hooks/initializers';

function AppInitializer({ children }) {
  const { hasLoadedSession } = useSessionInitializer();

  const isLoading = !hasLoadedSession;

  if (isLoading) {
    return <SplashScreen />
  }

  return children;
}

AppInitializer.propTypes = {
  children: PropTypes.any,
}

export default AppInitializer;
