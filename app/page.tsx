import PageContainer from '@components/PageContainer';

export default async function Home() {
  return (
    <section className='max-w-7xl flex flex-col mx-auto h-[400px] px-4'>
      <h1 className='text-white text-3xl text-center'>Welcome to <span className='blue_gradient'>Show Sniper</span></h1>
      <p className='text-gray-200 text-center mt-3 max-w-5xl mx-auto mb-10'>
        Discover Streaming Options with Show Sniper – Uncover where to watch your favorite movies and shows across different platforms. Find out availability, pricing, and more for an enhanced streaming experience.
      </p>

      <PageContainer />
    </section>
  )
}
