import React from 'react';
import { LabelData } from '@/types';
import { LabelDisplay } from './LabelDisplay';

interface Props {
  labels: LabelData[];
}

export const LabelList: React.FC<Props> = (props) => {
  if (props.labels.length === 0) {
    return null;
  }

  const content = props.labels.map((label) => (
    <LabelDisplay key={label.id} label={label} />
  ));

  return <>{content}</>;
};
