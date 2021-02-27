import Head from "next/head";
import Link from "next/link";
import Login from "../components/Login";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Task New Direction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <img src="/nd_RZ_LOGO.png" alt="New Direction" className="h-4 ml-1" />
        <h1 className="text-6xl font-bold text-error">
          Software, die begeistert!
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Login />
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-4 border-t">
        <a
          className="flex items-center justify-center"
          href="https://www.linkedin.com/in/km-elhosseny/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" Kareem Hosseny"}
          <img src="/LinkedIn_Logo.svg" alt="My Account" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
