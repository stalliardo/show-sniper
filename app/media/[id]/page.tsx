"use client";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

const Media = ({ params }: { params: { id: string } }) => {

  const [data, setData] = useState([]);
  const { id } = params;
  const searchParams = useSearchParams();

  const imageUrl = searchParams.get("imageUrl");

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
    <>
      <div className="text-white">Media + {id}</div>
      <Image src={`https://image.tmdb.org/t/p/w200/${imageUrl}`} width={160} height={100} alt="poster" className='mx-auto rounded cursor-pointer' />
    </>

  )
}

export default Media;