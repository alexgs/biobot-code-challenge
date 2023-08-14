import { TextInput } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import React from 'react';

export const LabelSearch: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [debounced] = useDebouncedValue(searchValue, 250);

  function handleLabelChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.currentTarget.value);
  }

  React.useEffect(() => {
    console.log(debounced);
  }, [debounced]);

  return (
    <div>
      <TextInput
        label="Please enter your label ID to get started"
        onChange={handleLabelChange}
        placeholder="Label ID"
        withAsterisk
      />
    </div>
  );
};
