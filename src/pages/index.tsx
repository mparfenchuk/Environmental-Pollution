import { NextPage } from 'next';
import styled from 'styled-components';

const Title = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 500;
  background-color: rgb(255,255,255,0.6);
  padding: 4px 12px
`;

const Description = styled.p`
  position: absolute;
  bottom: 0;
  margin: 0px 24px 24px 24px;
  z-index: 500;
  background-color: rgb(255,255,255,0.6);
  padding: 4px 12px;
  font-size: 10px;
`;

const Markers = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 24px;
  z-index: 500;
  background-color: rgb(255,255,255,0.6);
  padding: 4px 12px;
  font-size: 10px;
`;


const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  display: inline-block;
`;

const Pollution = styled(Dot)`
  background-color: rgb(0,0,0);
`;

const SmallArea = styled(Dot)`
  background-color: rgb(253,228,50);
`;

const MediumArea = styled(Dot)`
  background-color: rgb(253,154,0);
`;

const LargeArea = styled(Dot)`
  background-color: rgb(243,51,42);
`;

const Index: NextPage = () => (
  <>
    <Title>
      Environmental pollution
    </Title>
    <Markers>
      <Pollution /> - pollution<br/>
      <SmallArea /> - small area<br/>
      <MediumArea /> - medium area<br/>
      <LargeArea /> - large area
    </Markers>
    <Description>
      Pollution is the introduction of contaminants into the natural environment that cause adverse change. Pollution can take the form of chemical substances or energy, such as noise, heat or light. Pollutants, the components of pollution, can be either foreign substances/energies or naturally occurring contaminants. Pollution is often classed as point source or nonpoint source pollution.
      <sup>
        [<a href="https://en.wikipedia.org/wiki/Pollution" target="_blank">
          wiki
        </a>]
      </sup>
    </Description>
  </>
);

export default Index;