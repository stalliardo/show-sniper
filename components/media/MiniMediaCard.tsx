
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const LabelAndP = ({ label, value, classes }: { label: string, value: string | any, classes?: string }) => {
    return (
        <div className={label !== "Genres" ? 'flex justify-between text-md mt-4' : "text-md mt-4"}>

            <label className='text-gray-400'>{label}:</label>
            <p className={classes}>{value || "-"}</p>
        </div>
    )
}


const MiniMediaCard = ({ data }: any) => {
    const router = useRouter();

    const handleMediaClicked = () => {
        console.log("media clocked = ", data);
        router.push(`/media/${data.id}?imageUrl=${data.poster_path}`)
    }

    return (
        <div className='w-60 bg-slate-700 h-auto rounded-xl py-2 px-4 mb-12'>
            {
                data.poster_path ?
                    <Image src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} width={160} height={100} alt="poster" className='mx-auto rounded cursor-pointer' onClick={handleMediaClicked}/>
                    :
                    <Image src={"/sniper.svg"} width={160} height={100} alt="not found" className='mx-auto h-[230px] cursor-pointer' onClick={handleMediaClicked}/>
            }
            <div>
                <h3 className='text-center text-xl text-blue-400 mb-6 cursor-pointer hover:text-white' onClick={handleMediaClicked}>{data.title}</h3>
                <LabelAndP label="Released" value={data.release_date} />
                <LabelAndP label="Rating" value={parseFloat(data.vote_average).toFixed(1)} />
            </div>
        </div>
    )
}

export default MiniMediaCard