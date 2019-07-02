import { css } from 'styled-components'

import { colors, fontSizes } from '../config/theme'

const wysiwyg = css`
  /*
  The following styles are applied 
  only when we have a wysiwyg
   */
  .wysiwyg h1,
  .wysiwyg h2,
  .wysiwyg p {
    color: ${colors.black};
  }

  h1 {
    font-size: ${fontSizes[5]};
  }

  h2 {
    font-size: ${fontSizes[4]};
  }
`
export default wysiwyg
