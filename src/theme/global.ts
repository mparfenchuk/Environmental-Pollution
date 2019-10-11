import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from './';

export default createGlobalStyle<{ theme: DefaultTheme }>`
  body {
    margin: 0;
    font-family: ${props => props.theme.fontFamily};
  }

  #map {
    height: 100vh;
    width: 100%;
  }
  
  .marker-cluster-default {
    background-clip: padding-box;
    border-radius: 15px;
    background-color: rgb(0,0,0,0.6)
  }
  
  .marker-cluster-default div {
    color: white;
    background-color: rgb(0,0,0);
    width: 20px;
    height: 20px;
    margin-left: 5px;
    margin-top: 5px;
    border-radius: 10px;
    font-size: 10px;
  }

  .marker-cluster-default span {
    width: 4px;
    height: 4px;
    margin-left: 8px;
    margin-top: 8px;
    border-radius: 2px;
    background-color: white;
    display: inline-block;
  }

  .marker-cluster-small {
    background-clip: padding-box;
    border-radius: 20px;
    background-color: rgb(253,228,50,0.6)
  }
  
  .marker-cluster-small div {
    background-color: rgb(253,228,50);
    width: 30px;
    height: 30px;
    margin-left: 5px;
    margin-top: 5px;
    text-align: center;
    border-radius: 15px;
    font-size: 12px;
  }

  .marker-cluster-small span {
    line-height: 30px;
  }
  
  .marker-cluster-medium {
    background-clip: padding-box;
    border-radius: 25px;
    background-color: rgb(253,154,0,0.6)
  }
  
  .marker-cluster-medium div {
    background-color: rgb(253,154,0);
    width: 40px;
    height: 40px;
    margin-left: 5px;
    margin-top: 5px;
    text-align: center;
    border-radius: 20px;
    font-size: 12px;
  }

  .marker-cluster-medium span {
    line-height: 40px;
  }
  
  .marker-cluster-large {
    background-clip: padding-box;
    border-radius: 30px;
    background-color: rgb(243,51,42,0.6)
  }
  
  .marker-cluster-large div {
    color: white;
    background-color: rgb(243,51,42);
    width: 50px;
    height: 50px;
    margin-left: 5px;
    margin-top: 5px;
    text-align: center;
    border-radius: 25px;
    font-size: 12px;
  }

  .marker-cluster-large span {
    line-height: 50px;
  }
  
  .marker-tooltip {
    margin-left: -16px;
    color: white;
    background: black;
    border: 2px solid #29d;
  }

  .marker-tooltip::before {
    border-left-color: #29d;
  }
`;