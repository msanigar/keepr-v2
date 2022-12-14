import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <a
          href=""
          className="relative block rounded-sm border-t-4 border-pink-600 p-8 pb-24 shadow-xl"
        >
          <h3 className="text-4xl font-bold">100+</h3>
          <p className="mt-4 text-lg font-medium text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, provident.
          </p>

          <span className="absolute bottom-8 right-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-pink-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </span>
        </a>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Netlify{' '}
          <span className={styles.logo}>
            <Image
              src="/netlify.svg"
              alt="Netlify Logo"
              width={20}
              height={20}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
