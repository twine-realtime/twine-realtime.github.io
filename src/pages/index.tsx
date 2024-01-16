import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import FadeInSection from '../components/HomepageFeatures/FadeInSection';

function HomepageHeader() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-arbiterBlue to-arbiterPink flex flex-col justify-center sm:flex-col p-6 items-center gap-8 scroll-mt-40"
    >
      <article className="px-4 text-white antialiased py-8 md:py-10 pb-14 relative font-sans border-solid border-t-1 border-gray-700 border-r-0 border-l-0 border-b-0 max-w-full">
        <FadeInSection fadeDistance={500}>
          <h1 className="leading-[48px] mb-2 text-white font-main text-4xl md:text-5xl tracking-tighter font-medium max-w-4xl mx-auto text-center md:leading-tight">
            <strong><i>Twine</i></strong> is an open-source, auto-scaling, drop-in RaaS (Real-time as a Service)
          </h1>
          <p id="sub-title" className="text-xl leading-normal md:text-2xl mx-auto text-center max-w-6xl text-gray-300 mt-1 md:mt-2 md:leading-10">
          Designed to reliably abstract away the complexity of real-time communication<br></br>for modern web applications
            <br />{' '}
          </p>
          <div className="flex flex-col-reverse md:flex-row justify-center p-6 items-center gap-2 mt-8 w-full">
            <a
              id="case-study"
              href="/case-study"
              className="border border-solid px-5 text-base sm:text-lg pb-3 pt-4 rounded-full bg-primary hover:bg-primaryLight transition antialiased text-white hover:no-underline hover:text-white info-nav"
              >
              Read our Case Study
            </a>
            <a
              id="tech-talk"
              href="#tech-talk-container"
              className="border border-solid px-5 text-base sm:text-lg pb-3 pt-4 rounded-full bg-primary hover:bg-primaryLight transition antialiased text-white hover:no-underline hover:text-white info-nav"
            >
              Watch our Tech Talk
            </a>
          </div>
        </ FadeInSection>
      </article>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Framework`}
      description="The easiest way to integrate video conferencing"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}