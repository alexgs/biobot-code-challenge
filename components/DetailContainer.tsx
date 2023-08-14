import { Text } from '@mantine/core';
import React from 'react';

import { LabelData } from '@/types';

import { LabelList } from './LabelList';

interface Props {
  labels: LabelData[];
  search: string;
}

export const DetailContainer: React.FC<Props> = (props) => {
  // The user hasn't entered anything to search on
  if (props.search.length === 0) {
    return null;
  }

  // The user entered a search value, but there are no results
  if (props.labels.length === 0) {
    return (
      <Text>No results found.</Text>
    )
  }

  // The user entered a search value, and there are results
  return <LabelList labels={props.labels} />;
};
