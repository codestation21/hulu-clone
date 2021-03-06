import Head from 'next/head';
import Header from 'section/Header';
import Nav from 'section/Nav';
import Result from 'section/Result';
import Request from 'utilis/Request';

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu Next Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Result result={results} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${Request[genre]?.url || Request.fetchTrending.url}`)
    .then((res) => res.json());

  return {
    props: {
      results: request.results
    }
  }
}
