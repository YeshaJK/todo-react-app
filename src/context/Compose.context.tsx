import React, { FC, ReactNode } from 'react';

interface IComposeContext {
  components?: FC<{ children?: ReactNode }>[];
  children?: ReactNode;
}

const ComposeContext: FC<IComposeContext> = ({ components = [], children }) => {
  return (
    <>
      {components.reduceRight<ReactNode>((acc, Comp) => {
        return <Comp>{acc}</Comp>;
      }, children ?? null)}
    </>
  );
};

export default ComposeContext;
