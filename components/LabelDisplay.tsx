import { Anchor, Button, Card, Group, Text } from '@mantine/core';
import React from 'react';

import { LabelData } from '@/types';

interface Props {
  label: LabelData;
}

export const LabelDisplay: React.FC<Props> = (props) => {
  const trackUrl = `https://www.fedex.com/fedextrack/?trknbr=${props.label.shipping_tracking_code}`;
  return (
    <Card mb="md">
      <Group position="apart">
        <div>
          <Text>
            Label:{' '}
            <Text span weight={800}>
              {props.label.label_id}
            </Text>
          </Text>
          <Text>
            Tracking number:{' '}
            <Anchor href={trackUrl} target="_blank">
              {props.label.shipping_tracking_code}
            </Anchor>
          </Text>
        </div>
        <Anchor href={trackUrl} target="_blank">
          <Button>Track</Button>
        </Anchor>
      </Group>
    </Card>
  );
};
