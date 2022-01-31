import { Trans } from '@lingui/macro';
import React, { PropsWithChildren } from 'react';

export type AllPropsRequired<Object> = {
  [Property in keyof Object]-?: Object[Property];
};

interface ILabel {
  color?: string;
}

export default function Label({ color = 'red', children }: PropsWithChildren<ILabel>) {
  return (
    <>
      <span>
        <Trans>Label</Trans>
      </span>
      <br />
      <span style={{ color }}>{children}</span>
    </>
  );
}
