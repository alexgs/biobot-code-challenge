import React from 'react';
import { LabelData } from '@/types';

interface Props {
  labels: LabelData[];
}

export const LabelList: React.FC<Props> = (props) => {
  if (props.labels.length === 0) {
    return null;
  }

  return (
    <pre>{JSON.stringify(props.labels, null, 2)}</pre>
  );
};
