"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { MediaData } from '@types';
import StreamInfo from '@components/media/StreamInfo';
import Link from 'next/link';
import Spinner from '@components/Spinner';

const StreamInfoItemHandler = (type: string, data: any) => {
  let ui: any = [];

  data.forEach((streamData: MediaData, index: number) => {
    if (streamData.streamingType === type) ui.push(<StreamInfo key={index} data={streamData} />)
  })

  if (ui.length) return ui;
  else return <div>None found</div>
}

const Media = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<any>([]);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const { id } = params;
  const searchParams = useSearchParams();
  const router = useRouter();

  const imageUrl = searchParams.get("imageUrl");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/api/media/${id}`);
        const data = await response.json();

        setData(data.result);
      } catch (error) {
        console.log("Error getting the data for the given title");
      } finally {
        setHasLoaded(true);
      }
    }

    getData();
  }, [])

  if (hasLoaded) {
    if (data && Object.keys(data.streamingInfo).length > 0 && Object.keys(data.streamingInfo).includes("gb")) {
      return (
        <div className="text-white flex flex-col sm:flex-row relative">
          <div className='sm:absolute w-[140px] ml-3 mb-10 mt-[-20px] sm:right-4 sm:top-2 slate_btn' onClick={() => { router.back()}}>
            Back to Search
          </div>
          <div className='sm:ml-14 mx-auto'>
            <Image src={`https://image.tmdb.org/t/p/w500/${imageUrl}`} width={300} height={300} alt="poster" className='mx-auto rounded-lg' />
          </div>

          <div className='w-[80%] pl-10 pt-2'>
            <h2 className='text-2xl blue_gradient'>{data.title} {data.year && - (data.year)}</h2>
            <h3 className='mt-2 text-lg text-gray-400'>Included with subscription:</h3>
            <div className='p-4 pl-6 flex flex-wrap gap-10'>
              {
                StreamInfoItemHandler("subscription", data.streamingInfo.gb)
              }
            </div>

            <h3 className='mt-2 pt-2 text-lg text-gray-400  border-t border-blue-100'>Rental price:</h3>
            <div className='p-4 pl-6 flex flex-wrap gap-10'>
              {
                StreamInfoItemHandler("rent", data.streamingInfo.gb)
              }
            </div>

            <h3 className='mt-2 pt-2 text-lg text-gray-400  border-t border-blue-100'>Purhcase price:</h3>
            <div className='p-4 pl-6 flex flex-wrap gap-10'>
              {
                StreamInfoItemHandler("buy", data.streamingInfo.gb)
              }
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <>
          <div className='sm:text-4xl text-center text-white mt-32'>No data found for this title</div>
          <div className='mx-auto w-1/3 flex justify-center'>
              <button className='slate_btn text-white border-none w-[200px] mt-8' onClick={() => { router.back()}}>Back</button>
          </div>
        </>
      )
    }
  
} else return <Spinner classes='mt-32' size={{height: "20", width: "20"}}/>
}

export default Media;