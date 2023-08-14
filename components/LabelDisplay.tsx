import React from 'react';
import { LabelData } from '@/types';

interface Props {
  label: LabelData;
}

export const LabelDisplay: React.FC<Props> = (props) => {
  return (
    <div>Hello Label {props.label.label_id}</div>
  )
}
