import PropTypes from 'prop-types'

// Children proptypes
export const childrenProps = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
])
