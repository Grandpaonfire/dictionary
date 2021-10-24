import Head from 'next/head'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../components/Header/Header'
import Container from '@mui/material/Container';
import Definitions from '../components/Definitions/Definitions'

export default function Home() {
  const [word, setWord] =  useState("");
  const [meanings, setMeanings] =  useState([]);
  const [category, setCategory] = useState("en");

  const dictionaryApi =  async() => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );

      setMeanings(data.data);
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dictionaryApi();
    // eslint-disable-next-line
  }, [word, category])

  return (
    <div>
      <Head>
        <title>Dictionary</title>
        <meta name="description" content="Dictionary with examples and synonyms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="app">
        <Header 
          title="Dictionary"
          word={word}
          setWord={setWord}
          category={category}
          setCategory={setCategory}
        />
        <Container 
          maxWidth="md"
          className="container"
        >
          {meanings && (
            <Definitions word={word} meanings={meanings} category={category} />
          )}
        </Container>
      </main>
    </div>
  )
}
