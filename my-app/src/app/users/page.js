import Image from 'next/image'
import styles from '../page.module.css'
import app from '../firebase';
import { getFirestore, collection, getDocs} from 'firebase/firestore';

const db = getFirestore(app);

async function handler(){
  const docsRef = await getDocs(collection(db, 'users'));
  const users = docsRef.docs.map(doc => doc.data());
  return users;
}

export default async function Users() {
  const users = await handler();
  
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          {users.map((user) => {
            return (
              <div key={user.id}>
                <h3>{user.username}</h3>
                <p>{user.password}</p>
              </div>
            )
          })}
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' Filip Hedman'}

          </a>
        </div>
      </div>
    </main>
  )
}
