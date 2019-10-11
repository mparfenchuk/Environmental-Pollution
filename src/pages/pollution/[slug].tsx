import { NextPage, NextPageContext } from 'next';
import { NextSeo } from 'next-seo';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';

import CloseButton from '../../components/CloseButton';
import Error from '../_error';

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

const Title = styled.h1`
  margin-left: 24px;
  margin-right: 24px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Markdown = styled.p`
  white-space: pre-line;
  margin: 24px;
`

const Page: NextPage<{
  pollution: any, 
  errorCode?: number | undefined 
}> = ({ 
  pollution, 
  errorCode 
}) => {
  if(errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <>
      <NextSeo title={pollution.name} description={pollution.definition} />
      <Block>
        <CloseButton />
        <Title>{pollution.name}</Title>
        {pollution.images.length > 0 
          && <Image 
          src={pollution.images[0].url} 
          alt={pollution.images[0].alt}
          />}
        <Markdown>
          {pollution.description.replace(/<[/]?p>/g, '')}
        </Markdown>
      </Block>
    </>
  )
};
 
Page.getInitialProps = async ({ res, query }: NextPageContext) => {
  const { slug } = query;

  const result = 
    await fetch(`${process.env.API_URL}/pollution/${slug}`, { 
      method: 'GET' 
    });

  const pollution = await result.json();
  const errorCode = pollution === null ? 404 : undefined
  return { 
    pollution,
    errorCode
  };
};

export default Page;