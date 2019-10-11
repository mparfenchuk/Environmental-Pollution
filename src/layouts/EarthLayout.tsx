import styled from 'styled-components';

import Earth from '../components/Earth';

const Wrapper = styled.div`
  position: relative;
`

const EarthLayout: React.FC = ({ children }) => (
  <Wrapper>
    {children}
    <Earth />
  </Wrapper>
);

export default EarthLayout;