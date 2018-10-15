import * as React from 'react';
import Spinner from '../Spinner/Spinner';

interface ILoadableComponentProps {
  isLoading: boolean;
  children: any;
}

const LoadableComponent = ({ isLoading, children }: ILoadableComponentProps) => {
  return isLoading ? <Spinner /> : children;
};

export default LoadableComponent;
