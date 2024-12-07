import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { getPerson } from '../libs/api';
import { ReactSVG } from 'react-svg';
import { NextSeo } from 'next-seo';
import Script from 'next/script';


export default function Home({ person }) {
  const allSocialMedias = person.socialMediaCollection?.items || [];
  const { bio, keywords, jobTitle, name, photo, email} = person;
  return (
    <>
      <Script src="https://cdn.splitbee.io/sb.js" async />
      <NextSeo
        additionalLinkTags={[{
            rel: 'icon',
            href: `${photo.url}?w=100&h=1000&q=90&fm=webp`,
          }
        ]}
        title={`${name} | ${jobTitle}` }
        description={bio}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://ricardodantas.me',
          title: `${name} | ${jobTitle}`,
          description: bio,
          images: [
            {
              url: `${photo.url}?w=800&h=600&q=100&fm=webp`,
              width: 800,
              height: 600,
              alt: name,
            }
          ],
        }}
        twitter={{
          handle: '@ricardodantas',
          site: '@ricardodantas',
          cardType: 'summary_large_image',
        }}
      />

      <main className="bg-gray-100 dark:bg-gray-900 dark:text-gray-500 h-screen flex flex-col items-center justify-center overflow-hidden">

        {/* <div className="py-3 text-center bg-emerald-400 w-full fixed top-0 text-black">🚀 Get curated content about web development, updates on what I am building and career advices. <a href="/newsletter" className="font-bold">Subscribe to my newsletter!</a> </div> */}

        <div className="flex flex-col items-center justify-center">

            <div className="w-60 h-60 rounded-full border-4 dark:border-emerald-400 border-black shadow bg-cover bg-no-repeat" style={{backgroundImage: `url(${photo.url}?w=800&h=750&q=90&fm=webp)`}}></div>

            <div className="mt-7">
              <h1 className="text-center mb-5 font-semibold text-4xl dark:text-emerald-400">{name}</h1>
              <p className="text-xl text-center font-light dark:text-gray-500 mb-5">{ jobTitle }</p>
            </div>


          <div className="flex flex-row items-center justify-center p-3 ">
            <div className="w-14 px-3 hover:text-emerald-400 transition duration-500">
                <a href={`mailto:${email}`} >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
              {allSocialMedias.map(socialMedia => (
                <div className="w-11 px-2 hover:text-emerald-400 transition duration-500" key={socialMedia.name}>
                  <a href={socialMedia.url} rel="me" target="_blank" title={socialMedia.name}>
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
