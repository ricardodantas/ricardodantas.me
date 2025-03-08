import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBluesky, faDev, faGithub, faLinkedin, faMastodon, faMedium, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { NextSeo } from 'next-seo';
import Script from 'next/script';


export default function Home() {

  const bio = "Full Stack developer with 20+ years of experience offering web development insights and tips for building successful international careers. Specializing in scalable, reliable, and user-friendly web applications. Available to help other developers with their careers and business organizations solve complex problems using cutting-edge technology.";
  const email = "me@ricardodantas.me";
  const name = "Ricardo Dantas";
  const jobTitle = "Full Stack Developer";
  const photo = {
    url: "https://gravatar.com/avatar/6f88081999347d3b6536f963ce2059d5?size=1024"
  };
  return (
    <>
      <Script src="https://cdn.splitbee.io/sb.js" async />
      <NextSeo
        additionalLinkTags={[
          {
            rel: 'icon',
            href: `${photo.url}?w=100&h=1000&q=90&fm=webp`,
          },
        ]}
        title={`${name} | ${jobTitle}`}
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

          <div className="w-60 h-60 rounded-full border-4 dark:border-emerald-400 border-black shadow bg-cover bg-no-repeat" style={{ backgroundImage: `url(${photo.url}?w=800&h=750&q=90&fm=webp)` }}></div>

          <div className="mt-7">
            <h1 className="text-center mb-5 font-semibold text-4xl dark:text-emerald-400">{name}</h1>
            <p className="text-xl text-center font-light dark:text-gray-500 mb-5">{jobTitle}</p>
          </div>


          <div className="flex flex-row items-center justify-center p-3 ">
            <div className="w-14 px-3 hover:text-emerald-400 transition duration-500">
              <a href={`mailto:${email}`} title='E-mail'>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
            <div className="w-11 px-2 hover:text-emerald-400 transition duration-500">
              <a rel="me" href="https://mastodon.social/@ricardodantas" target="_blank" title="Mastodon"><FontAwesomeIcon icon={faMastodon} /></a>
            </div>
            <div className="w-11 px-2 hover:text-emerald-400 transition duration-500">
              <a rel="me" href="https://bsky.app/profile/ricardodantas.me" target="_blank" title="BlueSky"><FontAwesomeIcon icon={faBluesky} /></a>
            </div>
            <div className="w-11 px-2 hover:text-emerald-400 transition duration-500">
              <a rel="me" href="https://x.com/ricardodantas" target="_blank" title="X"><FontAwesomeIcon icon={faXTwitter} /></a>
            </div>
            <div className="w-11 px-2 hover:text-emerald-400 transition duration-500">
              <a rel="me" href="https://github.com/ricardodantas" target="_blank" title="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
            <div className="w-11 px-2 hover:text-emerald-400 transition duration-500">
              <a rel="me" href="https://www.linkedin.com/in/rdantas" target="_blank" title="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            <div className="w-11 px-2 hover:text-emerald-400 transition duration-500">
              <a rel="me" href="https://dev.to/ricardodantas" target="_blank" title="dev.to"><FontAwesomeIcon icon={faDev} /></a>
            </div>
            <div className="w-11 px-2 hover:text-emerald-400 transition duration-500">
              <a rel="me" href="https://ricardodantas.medium.com" target="_blank" title="Medium"><FontAwesomeIcon icon={faMedium} /></a>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
