import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { CopyBlock, dracula } from "react-code-blocks";

const DataFetching = ({ posts }) => {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <CopyBlock
          text={`import Head from 'next/head'
          import Image from 'next/image'
          import styles from '../styles/Home.module.scss'
          
          const DataFetching = ({ posts }) => {
          
            return (
              <div className={styles.container}>
                <main className={styles.main}>
                  <ul>
                    {posts && posts.data.map((item, index) => {
                      return (<li key={index}>{item.first_name}</li>)
                    })}
                  </ul>
                </main>
              </div>
            )
          }
          
          export async function getStaticProps() {
            const res = await fetch("https://reqres.in/api/users?page=1");
            const posts = await res.json();
            return {
              props: {
                posts,
              },
              revalidate: 30,
            };
          }
          
          export default DataFetching;`}
          language='jsx'
          showLineNumbers='true'
          wrapLines
          theme={dracula}
        />
        <ul>
          {posts && posts.data.map((item, index) => {
            return (<li key={index}>{item.first_name}</li>)
          })}
        </ul>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://reqres.in/api/users?page=1");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
    revalidate: 30,
  };
}

export default DataFetching;