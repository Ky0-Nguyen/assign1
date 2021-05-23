import React from 'react';
import LoadingComponent from 'shared/LoadingComponent';

export default function CustomLoadable(opts: { loader: () => Promise<{ default: React.ComponentType<any>; }>; }) {
  const LazyComponent = React.lazy(opts.loader);

  return (props: any) => (
    <React.Suspense fallback={<LoadingComponent />}>
      <LazyComponent {...props} />
    </React.Suspense>
  );
}