"use client";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import mockedData from '../../../private/responses/harry.json';
import { MediaData } from '@types';

const Media = ({ params }: { params: { id: string } }) => {

  const [data, setData] = useState([]);
  const { id } = params;
  const searchParams = useSearchParams();

  const imageUrl = searchParams.get("imageUrl");

  const tempData = mockedData.result[11]

  console.log("tmep data = ", tempData);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/api/media/${id}`);
        const data = await response.json();

        console.log("%cdata", "color:red", data);

        setData(data);
      } catch (error) {
        console.log("Error getting the data for the given title");
      }
    }

    getData();
  }, [])

  return (
    <div className="text-white flex border border-red-700">

      <div className='ml-14'>
        <Image src={`https://image.tmdb.org/t/p/w500/${imageUrl}`} width={300} height={300} alt="poster" className='mx-auto rounded-lg' />
      </div>

      <div className='border border-blue-100 w-[80%] pl-10 pt-2'>
        <h2 className='text-2xl blue_gradient'>{tempData.title} - ({tempData.year})</h2>
        <h3 className='mt-4 text-xl'>Streaming Information:</h3>
        <div className='mt-2 border border-emerald-200 p-4 flex justify-between'>
          {
            tempData.streamingInfo.gb?.map((streamData: MediaData) => (
              <div>
                <p>{streamData.service}</p>
                <p className='text-yellow-400'>{streamData.streamingType} {streamData.price?.amount ? `£${streamData.price?.amount}` : ""}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default Media;