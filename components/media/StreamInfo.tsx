import { MediaData } from '@types'
import Image from 'next/image';

interface StreamInfoProps {
    data: MediaData;
}

const StreamInfo = ({data} : StreamInfoProps) => {

    let imgSrc: string = "/prime.jpg"

    switch(data.service) {
        case "apple": {
            imgSrc = "/apple.jpg";
            break;
        }
        case "netflix": {
            imgSrc = "/netflix.jpg";
            break;
        }
    }

    const handleOpenSteamingSite = () => {
        window.open(data.link, "_blank")
    }

    return (
        <div className='group'>
            {/* <p>{data.service}</p> */}
            <Image src={imgSrc} width={80} height={80} alt="service provider logo"/>
            <p className='text-blue-400'> {data.quality ? data.quality : ""}  {data.price?.amount ? `£${data.price?.amount}` : ""}</p>
            <div className='opacity-0 mt-2 group-hover:opacity-100 transition-opacity duration-500 hover:text-blue-500  cursor-pointer' onClick={handleOpenSteamingSite}>
               Watch now
            </div>
        </div>
    )
}

export default StreamInfo;