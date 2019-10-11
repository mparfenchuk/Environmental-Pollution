import Router from 'next/router';
import styled from 'styled-components';

import { FaWindowClose } from 'react-icons/fa';

const Close = styled.span`
  position: absolute;
  right: 0;
  margin: 4px;
  cursor: pointer;
  font-size: 22px;
  display: flex;
`

export default () => (
  <Close 
    role="button" 
    onClick={() => Router.push('/', '/')}
  >
    <FaWindowClose />
  </Close>
);