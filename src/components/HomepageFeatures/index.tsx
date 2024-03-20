import FadeInSection from './FadeInSection';

export default function HomepageFeatures(): JSX.Element {
  const lineStyle = {
    marginTop: "15px",
    marginBottom: "25px",
    height: '1px',  // Set the thickness of the line
    backgroundColor: 'black',  // Set the color of the line
    border: 'none',  // Remove default border
  };

  return (
    <>
      {/* <FadeInSection fadeDistance={350}>
        <section className="bg-gray-100 border-t border-b border-gray-300 border-solid px-4 sectionB sub-titles-b">
          <article className="flex flex-col justify-center gap-8 py-16 align-middle items-center md:flex-row">
            <div className="md:w-1/3 w-full">
              <h2 className="lp-h2 hidden font-medium tracing-tight text-5xl pb-3 text-gray-600 md:block">
                Real-Time Communication
              </h2>
              <p className="lp-para hidden font-epilogue text-xl text-gray-700 md:block">
                Developers access Twine's load-tested pub/sub mechanism through a secure API that drops into their existing JavaScript application code.
              </p>
              <h2 className="lp-h2 md:hidden font-medium tracing-tight text-5xl pb-3 text-gray-600 text-center">
                Real-Time Communication
              </h2>
              <p className="lp-para  md:hidden font-epilogue text-xl text-gray-700 text-center">
                Developers access Twine's load-tested pub/sub mechanism through a secure API that drops into their existing JavaScript application code.
              </p>
            </div>
            <h2 className="hidden md:block"></h2>
            <img
              id="graphic"
              className="md:mr-0 md:ml-0 md:max-w-100 shadow-img code-img mx-auto max-w-80"
              src="img/real-time.jpeg"
            />
          </article>
        </section>
      </FadeInSection> */}
      <FadeInSection fadeDistance={350}>
        <section className="bg-gray-100 border-t border-b border-gray-300 border-solid px-4 sectionB">
          <article className="flex flex-col justify-center gap-8 py-16 align-middle items-center md:flex-row sub-titles">
            <div className="md:w-1/3 w-full">
              <h2 className="lp-h2 hidden font-medium tracing-tight text-5xl pb-3 text-gray-600 md:block">
              Real-Time Communication
              </h2>
              <p className="lp-para hidden font-epilogue text-xl text-gray-700 md:block">
              Developers access Twine's load-tested pub/sub mechanism through a secure API that drops into their existing JavaScript application code.
              </p>
              <h2 className="lp-h2 md:hidden font-medium tracing-tight text-5xl pb-3 text-gray-600 text-center">
              Real-Time Communication
              </h2>
              <p className="lp-para  md:hidden font-epilogue text-xl text-gray-700 text-center">
              Developers access Twine's load-tested pub/sub mechanism through a secure API that drops into their existing JavaScript application code.
              </p>
            </div>
            <h2 className="hidden md:block"></h2>
            <img
              id="graphic"
              className="md:mr-0 md:ml-0 md:max-w-100 shadow-img code-img mx-auto max-w-80"
              src="img/real-time.jpeg"
            />
          </article>
        </section>
      </FadeInSection>
      <FadeInSection fadeDistance={350}>
        <section className="bg-white border-t border-b border-gray-300 border-solid px-4 sectionB">
          <article className="flex flex-col justify-center gap-8 py-16 align-middle items-center md:flex-row sub-titles">
            <img
              id="graphic"
              className="md:mr-0 md:ml-0 md:max-w-100 shadow-img code-img mx-auto max-w-80"
              src="img/connection-state.jpeg"
            />
            <div className="md:w-1/3 w-full">
              <h2 className="lp-h2 hidden font-medium tracing-tight text-5xl pb-3 text-gray-600 md:block">
                Connection State Recovery
              </h2>
              <p className="lp-para hidden font-epilogue text-xl text-gray-700 md:block">
                Reconnecting users rejoin the real-time channels they were subscribed to and receive in-order delivery of missed messages.
              </p>
              <h2 className="lp-h2 md:hidden font-medium tracing-tight text-5xl pb-3 text-gray-600 text-center">
                Connection State Recovery
              </h2>
              <p className="lp-para  md:hidden font-epilogue text-xl text-gray-700 text-center">
                Reconnecting users rejoin the real-time channels they were subscribed to and receive in-order delivery of missed messages.
              </p>
            </div>
            <h2 className="hidden md:block">
            </h2>
          </article>
        </section>
      </FadeInSection>
      <FadeInSection fadeDistance={350}>
        <section className="bg-gray-100 border-t border-b border-gray-300 border-solid px-4 sectionB">
          <article className="flex flex-col justify-center gap-8 py-16 align-middle items-center md:flex-row sub-titles">
            <div className="md:w-1/3 w-full">
              <h2 className="lp-h2 hidden font-medium tracing-tight text-5xl pb-3 text-gray-600 md:block">
                Auto-Scaling
              </h2>
              <p className="lp-para hidden font-epilogue text-xl text-gray-700 md:block">
                Twine's Dockerized business logic runs within an auto-scaling AWS Elastic Beanstalk environment, with conservative and customizable scaling triggers.
              </p>
              <h2 className="lp-h2 md:hidden font-medium tracing-tight text-5xl pb-3 text-gray-600 text-center">
                Auto-Scaling
              </h2>
              <p className="lp-para  md:hidden font-epilogue text-xl text-gray-700 text-center">
                Twine's Dockerized business logic runs within an auto-scaling AWS Elastic Beanstalk environment, with conservative and customizable scaling triggers.
              </p>
            </div>
            <h2 className="hidden md:block"></h2>
            <img
              id="graphic"
              className="md:mr-0 md:ml-0 md:max-w-100 shadow-img code-img mx-auto max-w-80"
              src="img/auto-scaling.jpeg"
            />
          </article>
        </section>
      </FadeInSection>
      {/* <FadeInSection>
        <section className="bg-white py-20 sectionA">
          <article className="flex flex-col justify-center gap-8">
            <h2 className="lp-para uppercase text-xl tracking-wide font-semibold text-gray-600 text-center mt-0">
              Supports
            </h2>
            <div className="flex flex-col justify-center gap-20 md:flex-row">
              <div className="flex flex-col items-center md:items-start">
                <p className="lp-para  font-medium tracking-tight text-5xl text-gray-600 p-override .lpPara">
                  One Command
                </p>
                <p className="lp-para  text-xl text-gray-600 p-override">
                  AWS Integration
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <p className="lp-para  font-medium tracking-tight text-5xl text-gray-600 p-override">
                  Auto-Scaling
                </p>
                <p className="lp-para  text-xl text-gray-600 p-override">
                  Multi-Room Capability
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <p className="lp-para  font-medium tracking-tight text-5xl text-gray-600 p-override">
                  Effortless UI
                </p>
                <p className="lp-para  text-xl text-gray-600 p-override">
                  Drop-in React Component
                </p>
              </div>
            </div>
          </article>
        </section>
      </FadeInSection> */}
      {/* <FadeInSection fadeDistance={350}>
        <section className="bg-white sectionA">
          <article className="max-w-7xl mx-auto flex flex-col justify-center gap-8 py-16 items-center md:flex-row-reverse sub-titles">
            <div className="md:w-1/4 w-full">
              <h2 className="lp-h2 hidden md:block font-medium tracing-tight text-5xl pb-3 text-gray-600">
                Own Your Data
              </h2>
              <img
                className="md:mr-0 md:ml-0 md:max-w-100 shadow-img code-img mx-auto max-w-80"
                src="img/data.png"
              />
              <p className="lp-para hidden md:block font-epilogue text-xl text-gray-700">
                Twine stores all of its data within the AWS account specified during the Twine deployment process.
              </p>
              <h2 className="lp-h2 md:hidden font-medium tracing-tight text-5xl pb-3 text-gray-600 text-center">
                Own Your Data
              </h2>
              <p className="lp-para  md:hidden font-epilogue text-xl text-gray-700 text-center">
                Twine stores all of its data within the AWS account specified during the Twine deployment process.
              </p>
            </div>
          </article>
        </section>
      </FadeInSection> */}
      <FadeInSection fadeDistance={350}>
        <section className="bg-white border-t border-b border-gray-300 border-solid px-4 sectionB sub-titles-b">
          <article className="md:w-1/2 w-full mx-auto flex flex-col justify-center gap-8 py-20">
            <div className="flex flex-col max-w-5xl text-center mx-auto">
              <h2 className="lp-h2 font-medium tracing-tight text-5xl pb-3 text-gray-600">
                Data Ownership
              </h2>
              <img
                id="data-logo"
                className="max-w-5xl mx-auto archi-img"
                src="img/data.png"
              />
              <p className="lp-para  hidden md:block font-epilogue text-xl text-gray-700 p-override">
                Twine stores all of its data within the AWS account specified during the Twine deployment process.
              </p>
              <p className="lp-para md:hidden font-epilogue text-xl text-gray-700 text-center">
                Twine stores all of its data within the AWS account specified during the Twine deployment process.
              </p>
            </div>
          </article>
        </section>
      </FadeInSection>
      <FadeInSection fadeDistance={350}>
        <section className="bg-gray-100 border-t border-b border-gray-300 border-solid px-4 sectionB">
          <article className="md:w-1/2 w-full mx-auto flex flex-col justify-center gap-8 py-20">
            <div className="flex flex-col max-w-5xl text-center mx-auto">
              <h2 className="lp-h2 font-medium tracing-tight text-5xl pb-3 text-gray-600">
                Deployed on AWS
              </h2>
              <img
                id="aws-logo"
                className="max-w-5xl mx-auto archi-img"
                src="img/amazon-web-services-2.svg"
              />
              <p className="lp-para  hidden md:block font-epilogue text-xl text-gray-700 p-override">
                Twine deploys on the Amazon Web Services infrastructure, leveraging the robust capabilities of AWS to ensure reliable and scalable real-time interactions.
              </p>
              <p className="lp-para md:hidden font-epilogue text-xl text-gray-700 text-center">
                Twine deploys on the Amazon Web Services infrastructure, leveraging the robust capabilities of AWS to ensure reliable and scalable real-time interactions.
              </p>
            </div>
            {/* <img
              id="aws-logo"
              className="max-w-5xl mx-auto archi-img"
              src="img/amazon-web-services-2.svg"
            /> */}
            <a
            id="case-study-2"
            href="/case-study"
            className="border border-solid px-5 text-base sm:text-lg pb-3 pt-4 rounded-full bg-primary hover:bg-primaryLight transition antialiased text-white hover:no-underline hover:text-white info-nav"
            >
            Read our Case Study
          </a>
          </article>
        </section>
      </FadeInSection>
      <FadeInSection fadeDistance={350}>
        <section id="tech-talk-container" className="bg-white border-t border-b border-gray-300 border-solid px-4 sectionB">
          <article className="md:w-1/2 w-full mx-auto flex flex-col justify-center gap-8 py-20">
            <div className="flex flex-col max-w-5xl text-center mx-auto">
              <h2 className="lp-h2 font-medium tracing-tight text-5xl pb-3 text-gray-600">
                Tech Talk
              </h2>
              <p className="lp-para  hidden md:block font-epilogue text-xl text-gray-700 p-override">
                This live presentation was given on December 8th, 2023 as a way to showcase Twine and our journey of building it.
              </p>
              <p className="lp-para md:hidden font-epilogue text-xl text-gray-700 text-center">
                This live presentation was given on December 8th, 2023 as a way to showcase Twine and our journey of building it.
              </p>
              <div id="vid-wrapper">
                <iframe 
                  id="tech-talk-vid" 
                  className="shadow-img"
                  width="640"
                  height="360" 
                  src="https://www.youtube.com/embed/CUIlZJH1Kqc?si=m-mCRu5-clKCrrpf" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
              </div>
            </div>
          </article>
        </section>
      </FadeInSection>
      <FadeInSection fadeDistance={300}>
        <section
          className="bg-white border-solid border-b border-gray-300 sectionA"
          id="team"
        >
          <article className="max-w-6xl mx-auto flex flex-col justify-center gap-8 py-20">
            <h2 className="lp-para text-center text-large tracking-wide font-semibold text-gray-600 mb-2">
              Meet Team Twine
            </h2>
            <div id="team-wrapper" className="flex flex-row md:flex-row gap-2 md:gap-8 mx-auto">
              <div className="portrait-card flex flex-col">
                <div className="">
                  <img
                    className="max-h-64 portrait-img"
                    src="img/team/leeya.jpg"
                  />
                </div>
                <p className="lp-name text-gray-800 text-lg font-semibold text-left mt-2 mb-0 p-override text-center pb-4 md:pb-0">
                  Leeya Davis
                </p>
                <p className="lp-para  text-gray-600 text-left mb-1 p-override text-center">
                  Software Engineer
                </p>
                <p className="lp-para  text-gray-600 text-left mb-1 p-override text-center">
                  Brooklyn, NY
                </p>
                <div className="flex gap-1 mx-auto mt-4">
                  <a
                    href="https://leeyadavis.dev/"
                    target="_blank"
                    className="inline-block hover:text-indigo-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-world"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M3.6 9h16.8"></path>
                      <path d="M3.6 15h16.8"></path>
                      <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                      <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/LeeyaD"
                    target="_blank"
                    className="inline-block hover:text-indigo-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-github"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/leeya-d-a8542565/"
                    target="_blank"
                    className="inline-block hover:text-indigo-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-linkedin"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                      <path d="M8 11l0 5"></path>
                      <path d="M8 8l0 .01"></path>
                      <path d="M12 16l0 -5"></path>
                      <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                    </svg>
                  </a>
                  <a
                    href="mailto:leeya463@gmail.com"
                    className="hover:text-indigo-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-mail"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                      <path d="M3 7l9 6l9 -6"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <hr style={lineStyle} />
              <div className="portrait-card flex flex-col">
                <div className="">
                  <img className="max-h-64 portrait-img" src="img/team/maddy.jpg" />
                </div>
                <p className="lp-name text-gray-800 text-lg font-semibold text-left mt-2 mb-0 p-override text-center pb-4 md:pb-0">
                  Maddy Woodrum
                </p>
                <p className="lp-para text-gray-600 text-left mb-1 p-override text-center">
                  Software Engineer
                </p>
                <p className="lp-para text-gray-600 text-left mb-1 p-override text-center">
                  New York, NY
                </p>
                <div className="flex gap-1 mx-auto mt-4">
                  <a
                    href="https://maddywoodrum.dev/"
                    target="_blank"
                    className="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-world"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M3.6 9h16.8"></path>
                      <path d="M3.6 15h16.8"></path>
                      <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                      <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/madzno"
                    target="_blank"
                    className="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-github"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/maddywoodrum/"
                    target="_blank"
                    className="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-linkedin"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                      <path d="M8 11l0 5"></path>
                      <path d="M8 8l0 .01"></path>
                      <path d="M12 16l0 -5"></path>
                      <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                    </svg>
                  </a>
                  <a
                    href="mailto:madzno12@gmail.com"
                    className="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-mail"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                      <path d="M3 7l9 6l9 -6"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <hr style={lineStyle} />
              <div className="portrait-card flex flex-col">
                <div className="">
                  <img className="max-h-64 portrait-img" src="img/team/spencer.jpg" />
                </div>
                <p className="lp-name text-gray-800 text-lg font-semibold text-left mt-2 mb-0 p-override text-center pb-4 md:pb-0">
                  Spencer Wightman
                </p>
                <p className="lp-para text-gray-600 text-left mb-1 p-override text-center">
                  Software Engineer
                </p>
                <p className="lp-para text-gray-600 text-left mb-1 p-override text-center">
                  Christchurch, NZ
                </p>

                <div className="flex gap-1 mx-auto mt-4">
                  <a
                    href="https://spencerwightman.com/"
                    target="_blank"
                    className="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-world"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M3.6 9h16.8"></path>
                      <path d="M3.6 15h16.8"></path>
                      <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                      <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/spencerwightman"
                    target="_blank"
                    className="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-github"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/spencer-wightman/"
                    target="_blank"
                    className="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-linkedin"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                      <path d="M8 11l0 5"></path>
                      <path d="M8 8l0 .01"></path>
                      <path d="M12 16l0 -5"></path>
                      <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                    </svg>
                  </a>
                  <a
                    href="mailto:spencer.wightman@gmail.com"
                    className="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-mail"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                      <path d="M3 7l9 6l9 -6"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <hr style={lineStyle} />
              <div className="portrait-card flex flex-col">
                <div className="">
                  <img className="max-h-64 portrait-img" src="img/team/chris.jpeg" />
                </div>
                <p className="lp-name text-gray-800 text-lg font-semibold text-left mt-2 mb-0 p-override text-center pb-4 md:pb-0">
                  Christopher Brum
                </p>
                <p className="lp-para text-gray-600 text-left mb-1 p-override text-center">
                  Software Engineer
                </p>
                <p className="lp-para text-gray-600 text-left mb-1 p-override text-center">
                  Portland, OR
                </p>

                <div className="flex gap-1 mx-auto mt-4">
                  <a
                    href="https://cbrum.dev"
                    target="_blank"
                    className="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-world"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M3.6 9h16.8"></path>
                      <path d="M3.6 15h16.8"></path>
                      <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                      <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/ChristopherBrum"
                    target="_blank"
                    className="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-github"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/chris-brum/"
                    target="_blank"
                    className="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-linkedin"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                      <path d="M8 11l0 5"></path>
                      <path d="M8 8l0 .01"></path>
                      <path d="M12 16l0 -5"></path>
                      <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                    </svg>
                  </a>
                  <a
                    href="mailto:christopher.brum@gmail.com"
                    className="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-mail"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                      <path d="M3 7l9 6l9 -6"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </section>
      </FadeInSection>
    </>
  );
}
