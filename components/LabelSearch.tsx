import { TextInput } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import React from 'react';

import { LabelData } from '@/types';

import { DetailContainer } from './DetailContainer';

// TODO If desired, this could be rendered as a [true autocomplete
//   component][1], but I think that this satisfies the requirements to be
//   intuitive, visually appealing, and performant.
//   [1]: https://mantine.dev/core/autocomplete/

export const LabelSearch: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [labels, setLabels] = React.useState<LabelData[]>([]);
  const [debounced] = useDebouncedValue(searchValue, 250);

  function handleLabelChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.currentTarget.value);
  }

  React.useEffect(() => {
    async function fetchSearchResults() {
      const response = await fetch(`/api/labels/search?id=${debounced}`)
        .then((res) => res.json())
        .catch((e) => console.error(e)); // TODO Improve error handling
      setLabels(response);
    }

    if (debounced.length > 0) {
      void fetchSearchResults();
    } else {
      setLabels([]);
    }
  }, [debounced]);

  return (
    <div>
      <TextInput
        label="Please enter your label ID to get started"
        mb="md"
        onChange={handleLabelChange}
        placeholder="Label ID"
        withAsterisk
      />
      <DetailContainer labels={labels} search={searchValue} />
    </div>
  );
};
