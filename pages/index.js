import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faLinkedin,
	faInstagram,
	faMedium,
	faGoodreads,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faRssSquare } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Ricardo Dantas | Full Stack Developer</title>
				<link rel="icon" href="/favicon.ico" />
				<script
					dangerouslySetInnerHTML={{
						__html: `
						<script async src="https://www.googletagmanager.com/gtag/js?id=UA-124612577-1"></script>
						<script>
							window.dataLayer = window.dataLayer || []; function gtag()
							{dataLayer.push(arguments)}
							gtag('js', new Date()); gtag('config', 'UA-124612577-1');
						</script>
						`,
					}}
				></script>
			</Head>

			<main className={styles.main}>
				<img
					className={styles.photo}
					src={
						"https://www.gravatar.com/avatar/742396bc8754671336d09ee4ac530f5a?s=280"
					}
				/>
				<h1 className={styles.title}>Ricardo Dantas</h1>

				<p className={styles.description}>Full Stack Developer</p>

				<ul className={styles.socialMedia}>
					<li>
						<a href={`https://www.linkedin.com/in/rdantas`} target="_blank">
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</li>
					<li>
						<a href={`https://github.com/ricardodantas`} target="_blank">
							<FontAwesomeIcon icon={faGithub} />
						</a>
					</li>
					<li>
						<a href={`https://twitter.com/ricardodantas`} target="_blank">
							<FontAwesomeIcon icon={faTwitter} />
						</a>
					</li>
					<li>
						<a href={`https://medium.com/@ricardodantas`} target="_blank">
							<FontAwesomeIcon icon={faMedium} />
						</a>
					</li>
					<li>
						<a
							href={`https://www.goodreads.com/user/show/77647522-ricardo-dantas`}
							target="_blank"
						>
							<FontAwesomeIcon icon={faGoodreads} />
						</a>
					</li>
					<li>
						<a href={`mailto:ricardodantas@gmail.com`}>
							<FontAwesomeIcon icon={faEnvelope} />
						</a>
					</li>
				</ul>
			</main>

			{/* <footer className={styles.footer}></footer> */}
		</div>
	);
}
