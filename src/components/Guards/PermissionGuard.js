import PropTypes from 'prop-types';
import { usePermissionGuard } from '../../hooks/guards';

function PermissionGuard({ permissions, fallback, children }) {
  const { hasPermission } = usePermissionGuard(...permissions)

  if (!hasPermission) {
    return fallback
  }

  return children;
}

PermissionGuard.propTypes = {
  permissions: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  fallback: PropTypes.element,
  children: PropTypes.node.isRequired,
}

PermissionGuard.defaultProps = {
  fallback: null,
}

export default PermissionGuard
