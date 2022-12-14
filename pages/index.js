import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios"

const Home = ({results}) =>  {

  // const [pokemon, setPokemon] = useState([])

  // useEffect(() => {
  //   axios.get("https://pokeapi.co/api/v2/pokemon").then(({ data }) => setPokemon(data?.results));
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Pokemon api list</h1>

        <p className={styles.description}>See pokemon list below</p>

        <div className={styles.grid}>
        {results.map(pokemon => <a href="https://nextjs.org/docs" className={styles.card}>
          <h3 style={{color:"white"}}>{pokemon.name}</h3>
          </a>)}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default Home

export async function getServerSideProps(context){

  const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon")

  return{
    props:{
      results: data?.results
    }
  }
}
