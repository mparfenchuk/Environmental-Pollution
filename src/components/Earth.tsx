import dynamic from 'next/dynamic';

export default dynamic(
  () => import('./Map'),
  { ssr: false }
);