import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>  
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400;1,600;1,800&display=swap" rel="stylesheet"/> 
        <title>Henry Mesias | Front End Developer</title>
        <meta name="description" content="Henry Mesias | Front End Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="mainWrapper">
          <div className="headshot">

          </div>
          <div className="content">
            <h1 className="content-headingOne mt-3 c-blueLight">Henry Mesias</h1>
            <p className="content-story">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur consectetur placeat modi mollitia blanditiis, rerum ea earum sunt consequatur? Quibusdam natus delectus accusantium, perspiciatis consectetur doloremque odio! Laboriosam, minima eat? </p>
            <p className="content-story mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur consectetur placeat modi mollitia blanditiis, rerum ea earum sunt consequatur? Quibusdam natus delectus accusantium, perspiciatis consectetur doloremque odio! Laboriosam, minima eat? </p>

            <div className="content-projects mt-3 mb-3">
              <h2 className="content-headingTwo c-blueLight">projects</h2>
              <ul className="content-list mt-2">
                <li className="content-item mb-2">
                  <div className="content-item-wrapper">
                    <p className="content-item-title"><a href="#FIXME" className="content-item-link">Example Project Link</a></p>
                    <p className="content-item-description c-gray">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui fuga fugit laborum cum debitis. Expedita ipsum in et praesentium, quas at exercitationem quod cupiditate aperiam ipsa maiores eum, pariatur nostrum? </p>
                  </div>
                </li>
                <li className="content-item mb-2">
                  <div className="content-item-wrapper">
                    <p className="content-item-title"><a href="#FIXME" className="content-item-link">Example Project Link</a></p>
                    <p className="content-item-description c-gray">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui fuga fugit laborum cum debitis. Expedita ipsum in et praesentium, quas at exercitationem quod cupiditate aperiam ipsa maiores eum, pariatur nostrum? </p>
                  </div>
                </li>
              </ul>
              
            </div>

            <div className="content-experience mt-3 mb-3">
              <h2 className="content-headingTwo c-blueLight">Experience</h2>
            </div>

            <div className="content-tools mt-3 mb-3">
              <h2 className="content-headingTwo c-blueLight">Tools</h2>
            </div>

            <footer className={styles.footer}>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by{' '}
                <span className={styles.logo}>
                  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
              </a>
            </footer>
          </div>
        </div>
      </main>
    </div>
  )
}
