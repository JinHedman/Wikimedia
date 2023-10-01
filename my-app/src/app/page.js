import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import Navbar from './navbar/page.js';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.body}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  )
}
