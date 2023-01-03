import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { getPerson } from '../libs/api';
import { ReactSVG } from 'react-svg';

export default function Home({ person }) {
  const allSocialMedias = person.socialMediaCollection?.items || [];
  return (
    <>
      <Head>
        <title>{person.name} | { person.jobTitle}</title>
        <link rel="icon" href={`${person.photo.url}?w=100&h=1000&q=90&fm=webp`} />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>

      <main className="bg-gray-100 dark:bg-gray-900 dark:text-gray-500 h-screen flex flex-col items-center justify-center overflow-hidden">

        <div className="py-3 text-center bg-emerald-400 w-full fixed top-0 text-black">🚀 Get curated content about web development, updates on what I am building and career advices. <a href="/newsletter" className="font-bold">Subscribe my newsletter!</a> </div>

        <div className="flex flex-col items-center justify-center">

            <div className="w-60 h-60 rounded-full border-4 dark:border-emerald-400 border-black shadow bg-cover bg-no-repeat" style={{backgroundImage: `url(${person.photo.url}?w=800&h=750&q=90&fm=webp)`}}></div>

            <div className="mt-7">
              <h1 className="text-center mb-5 font-semibold text-4xl dark:text-emerald-400">{person.name}</h1>
              <p className="text-xl text-center font-light dark:text-gray-500 mb-5">{ person.jobTitle }</p>
            </div>


          <div className="flex flex-row items-center justify-center p-3 ">
            <div className="w-14 px-3 hover:text-emerald-400 transition duration-500">
                <a href={`mailto:${person.email}`} >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
              {allSocialMedias.map(socialMedia => (
                <div className="w-11 px-2 hover:text-emerald-400 transition duration-500" key={socialMedia.name}>
                  <a href={socialMedia.url} target="_blank" title={socialMedia.name}>
                    <ReactSVG src={socialMedia.icon.url} className="fill-current"/>
                  </a>
                </div>
              ))}
            </div>
        </div>

      </main>
    </>
  );
}


export async function getStaticProps({ preview = false }) {
  const person = await getPerson(preview);
  return {
    props: { preview, person },
  };
}
