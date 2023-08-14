import { Container, Title } from '@mantine/core';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import React from 'react';
import { LabelSearch } from '../../components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Biobot Label Tracking</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container size="xs" px="xs" pt="md" className={inter.className}>
        <Title order={1}>Biobot Label Tracking</Title>
        <LabelSearch />
      </Container>
    </>
  );
}
