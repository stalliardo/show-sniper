const AboutPage = () => {
  return (
    <section className="text-white w-[80%] mx-auto p-1 sm:p-3 pb-10">
      <h1 className="text-4xl text-center text-blue-500">About Film Sniper</h1>
      <p className="text-lg my-4">Welcome to Film Sniper, a platform I've created to help you find streaming availability and pricing information for your favorite films!</p>

      <h2 className="text-3xl text-blue-300">My Mission</h2>
      <p className="text-lg my-4">
        At Film Sniper, my mission is to make it easier for users to discover where their favorite films are available for streaming and rental. I understand how frustrating it can be to search through multiple platforms to find the right movie. My platform simplifies this process by providing a consolidated view of streaming options and pricing details.
      </p>

      <h2 className="text-3xl text-blue-300">How it Works</h2>
      <p className="text-lg my-4">
        I leverage the power of APIs like the TMDB API and Streaming Availability API to gather real-time data about films. My user-friendly interface allows you to search for your desired content and quickly see which streaming services offer it, along with the rental and purchase prices.
      </p>

      <h2 className="text-3xl text-blue-300">Technologies Used</h2>
      <ul className="ml-8 text-lg my-4">
        <li className="list-disc">
          <span className="font-bold">Next.js:</span>
          <p>My site is built using the Next.js framework, which provides a seamless and efficient user experience.</p>
        </li>
        <li className="list-disc">
          <span className="font-bold">Vercel:</span>
          <p>I've deployed my app using Vercel, a reliable platform that ensures fast and secure hosting.</p>
        </li>
        <li className="list-disc">
          <span className="font-bold">TMDB API:</span>
          <p>I rely on the TMDB API to fetch comprehensive data about films, including images, descriptions, and more.</p>
        </li>
        <li className="list-disc">
          <span className="font-bold">Streaming Availability API:</span>
          <p>My platform queries the Streaming Availability API to determine where your chosen content is available for streaming or rental.</p>
        </li>
      </ul>

      <h2 className="text-3xl text-blue-300">Note About API Usage</h2>
      <p className="text-lg my-4">
        Please be aware that some of the features of my platform depend on third-party APIs. The TMDB API and Streaming Availability API offer a certain number of requests per day. If you encounter issues with the availability of data, it might be due to reaching the API's request limit. I'm constantly working to optimize my service, but keep in mind that external factors might affect its functionality.

        <br/><br/>Thank you for using Film Sniper. I hope you enjoy discovering new films with ease!
      </p>
    </section>
  )
}

export default AboutPage