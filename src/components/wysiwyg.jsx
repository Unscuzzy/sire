import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import wysiwyg from '../utils/wysiwyg'

const HTML = styled.div`
  ${wysiwyg}
`

const Wysiwyg = ({ __html }) => <HTML dangerouslySetInnerHTML={{ __html }} />

Wysiwyg.propTypes = {
  __html: PropTypes.string.isRequired
}

export default Wysiwyg
