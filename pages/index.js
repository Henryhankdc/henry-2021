import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>  
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400;1,600;1,800&display=swap" rel="stylesheet"/> 
        <title>Henry Mesias | Front End Engineer</title>
        <meta name="description" content="Henry Mesias | Front End Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="mainWrapper">
          <div className="headshot">

          </div>
          <div className="content">
            <h1 className="content-headingOne mt-3 c-blueLight">Henry Mesias</h1>
            <p className="content-story">I started building on the web to create pages for my friends bands and shows in the local DIY music scene. After working for a <Link href="https://www.waba.org"><a> bicycle advocacy non-profit in Washington, D.C.</a></Link> and <Link href="https://www.senditcourier.ca"><a>founding a bike messenger co-op in Toronto</a></Link>, I came back to writing code.</p>
             
            <p className="content-story mt-2">Web development has provided me the opportunity to combine my DIY attitude with exeprience in other fields such as non-profit work and entrepreneurship to bring a new level of creativity and purpose to any project I work on.</p>

            <p className="content-story mt-2">I'm constantly challenging myself and learning new skills. Above everything else, keeping a postive attitude and fostering good relationships with colleagues plays a primary role in how I work.</p>

            <div className="content-projects mt-3 mb-3">
              <h2 className="content-headingTwo c-blueLight">Projects</h2>
              <ul className="content-list mt-2">
                <li className="content-item mb-2">
                  <div className="content-item-wrapper">
                    <p className="content-item-title"><a href="https://www.panfoundation.org/" className="content-item-link">Pan Foundation</a></p>
                    <p className="content-item-description c-white">Website to build for an organization whose mission is to help uninsured patients get the medication they need.</p>
                    <ul className="content-toolsList mt-2">
                      <li className="content-toolsItem">PHP</li>
                      <li className="content-toolsItem">React</li>
                      <li className="content-toolsItem">SCSS</li>
                      <li className="content-toolsItem">WordPress</li>
                    </ul>
                  </div>
                </li>
                <li className="content-item mb-2">
                  <div className="content-item-wrapper">
                    <p className="content-item-title"><a href="https://yellowstone.npca.org/" className="content-item-link">Yellow Stone Live</a></p>
                    <p className="content-item-description c-white">Promotional site for a collaboration between National Geographic and the National Parks Conservation Association.</p>
                    <ul className="content-toolsList mt-2">
                      <li className="content-toolsItem">JavaScript</li>
                      <li className="content-toolsItem">Nunjucks</li>
                      <li className="content-toolsItem">SCSS</li>
                    </ul>
                  </div>
                </li>
              </ul>
              
            </div>

            <div className="content-experience mt-3 mb-3">
              <h2 className="content-headingTwo c-blueLight">Experience</h2>
              <ul className="content-list mt-2">
                <li className="content-item">Software Engineer @ <a href="https://www.threespot.com/">Threespot</a> </li>
                <li className="content-item">Front End Developer @ <a href="https://jakegroup.com/">Jake Group</a> </li>
                <li className="content-item">Founder @ <a href="http://www.senditcourier.ca/">Send It Courier</a> </li>
              </ul>
            </div>

            <div className="content-tools mt-3 mb-3">
              <h2 className="content-headingTwo c-blueLight">Tools</h2>
              <p className="content-tools-description mt-2">React, Laravel, MiddleMan, Nunjucks, JavaScript,Node.js, PHP, HTML, CSS, SCSS, SQL, Shopify, WordPress, NextJS, Gatsby, Jekyll, Photoshop, Sketch, Figma, Asana, Trello, Wrike, GitHub, GitLab, BitBucket</p>
            </div>

            <footer className="mt-5 pt-4">&copy;{(new Date().getFullYear())} - henryhank
            </footer>
          </div>
        </div>
      </main>
    </div>
  )
}
