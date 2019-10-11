import { NextPage } from 'next';
import styled from 'styled-components';

import CloseButton from '../components/CloseButton';

const Block = styled.div`
  position: absolute;
  top: 24px;
  bottom: 24px;
  left: 24px;
  right: 24px;
  z-index: 500;
  background-color: rgb(0,0,0,0.8);
  color: white;
  overflow: scroll;
  max-width: 460px;
  max-height: 600px;
`;

const Text = styled.p`
  margin: 24px;
`

const Error: NextPage<{ statusCode: number | undefined }> = ({ statusCode }) => (
  <Block>
    <CloseButton />
    <Text>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </Text>
  </Block>
);

Error.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode };
}

export default Error;