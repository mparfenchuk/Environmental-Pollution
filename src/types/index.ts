import { NextComponentType, NextPageContext, NextPage } from 'next';
import { AppProps } from 'next/app';
import geojson from 'geojson';

export interface MapProps {
  clusterizedData: any, 
  zooming: (id: number) => number, 
  clusterize: (bbox:[number, number, number, number], zoom: number) => void
}

export type Feature = geojson.Feature<geojson.Point, any>

export interface FeatureLayer {
  layer: {
    feature: Feature
  }
}

type LayoutComponent = NextComponentType<NextPageContext, any, any> & {
  Layout?: any;
};

export interface LayoutProps extends AppProps {
  Component: LayoutComponent;
}

export interface AdminPage extends NextPage {
  Layout?: any
}

interface Image {
  url: string
  reference: string
  alt: string
}

export interface MyFormValues {
  lat: string
  long: string
  name: string
  definition: string
  description: string
  images: Array<Image>
}