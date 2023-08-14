import { Container, TextInput, Title } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [searchValue, setSearchValue] = React.useState('');
  const [debounced] = useDebouncedValue(searchValue, 250);

  function handleLabelChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.currentTarget.value);
  }

  React.useEffect(() => {
    console.log(debounced);
  }, [debounced]);

  return (
    <>
      <Head>
        <title>Biobot Label Tracking</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container size="xs" px="xs" pt="md" className={inter.className}>
        <Title order={1}>Biobot Label Tracking</Title>
        <TextInput
          label="Please enter your label ID to get started"
          onChange={handleLabelChange}
          placeholder="Label ID"
          withAsterisk
        />
      </Container>
    </>
  );
}
