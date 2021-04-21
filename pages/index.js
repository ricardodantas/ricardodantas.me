import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { getPerson } from '../libs/api';
import { ReactSVG } from 'react-svg';

export default function Home({ person }) {
	const allSocialMedias = person.socialMediaCollection?.items || [];
	return (
		<div className={styles.container}>
			<Head>
				<title>{person.name} | { person.jobTitle}</title>
				<link rel="icon" href={`${person.photo.url}?w=100&h=1000&q=90&fm=webp`} />
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=UA-124612577-1"
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `

							window.dataLayer = window.dataLayer || []; function gtag()
							{dataLayer.push(arguments)}
							gtag('js', new Date()); gtag('config', 'UA-124612577-1');
              `,
					}}
				/>
			</Head>

			<main className={styles.main}>

				<img
					className={styles.photo}
					src={`${person.photo.url}?w=800&h=800&q=90&fm=webp`}
				/>

				<h1 className={styles.title}>{person.name}</h1>

				<p className={styles.description}>{ person.jobTitle }</p>

				<ul className={styles.socialMedia}>
					{allSocialMedias.map(socialMedia => (
						<li key={socialMedia.name}>
							<a href={socialMedia.url} target="_blank">
								<ReactSVG src={socialMedia.icon.url} className={styles.socialMediaIcon} wrapper={'span'}/>
							</a>
						</li>
					))}
					<li>
						<a href={`mailto:${person.email}`}>
							<FontAwesomeIcon icon={faEnvelope} className={ styles.emailIcon} />
						</a>
					</li>
				</ul>
			</main>

			{/* <footer className={styles.footer}></footer> */}
		</div>
	);
}


export async function getStaticProps({ preview = false }) {
	const person = await getPerson(preview);
	return {
		props: { preview, person },
	};
}
