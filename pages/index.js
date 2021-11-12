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

        <div className="flex flex-col items-center justify-center">

            <div className="w-60 h-60 rounded-full border-4 dark:border-purple-600 border-black shadow bg-cover bg-no-repeat" style={{backgroundImage: `url(${person.photo.url}?w=800&h=750&q=90&fm=webp)`}}></div>

            <div className="mt-7">
              <h1 className="text-center mb-1 font-semibold text-4xl dark:text-purple-600">{person.name}</h1>
              <p className="text-xl text-center font-extralight	 dark:text-gray-500 mb-3">{ person.jobTitle }</p>
            </div>


            <div className="flex flex-row items-center justify-center p-3 ">
              {allSocialMedias.map(socialMedia => (
                <div className="w-11 px-2 hover:text-purple-600 transition duration-500" key={socialMedia.name}>
                  <a href={socialMedia.url} target="_blank" title={socialMedia.name}>
                    <ReactSVG src={socialMedia.icon.url} className="fill-current"/>
                  </a>
                </div>
              ))}
              <div className="w-14 px-3 hover:text-purple-600 transition duration-500">
                <a href={`mailto:${person.email}`} >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>


        </div>



        <div className="bg-black dark:bg-purple-600 w-full dark:text-white py-10 mt-20">
          <div className="container md:max-w-3xl px-5 md:px-0 md:mx-auto">
            <div className="" id="revue-embed">
              <h2 className="text-white text-center text-2xl mb-10">Subscribe to my newsletter</h2>
              <form action="https://newsletter.ricardo.im/add_subscriber" method="post" id="revue-form" name="revue-form" target="_blank">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center items-center">
                  <input className="border-2  border-white dark:text-purple-600 leading-relaxed bg-white rounded-md outline-none w-full py-2 px-3 text-xl revue-form-field" placeholder="Your email address..." type="email" required="required" name="member[email]" id="member_email" />
                  <input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" className="cursor-pointer bg-white dark:text-purple-600 w-full md:w-auto py-2 leading-relaxed px-3 text-xl rounded-md" />
                </div>
              </form>
            </div>
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
