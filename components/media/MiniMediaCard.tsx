import React from 'react'

const LabelAndP = ({ label, value, classes }: { label: string, value: string | any, classes?: string }) => {
    return (
        <div className={label !== "Genres" ? 'flex justify-between text-xl mt-4' : "text-xl mt-4"}>
            {
                label !== "Genres" ?
                    <>
                        <label className='text-gray-400'>{label}:</label>
                        <p className={classes}>{value || "-"}</p>
                    </> :
                    <>
                        <label className='text-gray-400'>{label}:</label>

                        <div className='flex'>
                            {value.map((v: any, index: number) => (
                                <p key={index} className={classes}>{v.name || "-"}{index < value.length - 1 ? ',' : ""}</p>
                            ))}
                        </div>
                    </>
            }
        </div>
    )
}

const MiniMediaCard = ({ data }: any) => {
    return (
        <div className='w-80 bg-slate-700 h-80 rounded-xl pt-2 px-4'>
            <h3 className='text-center text-xl text-blue-400 mb-6 cursor-pointer hover:text-white'>{data.title}</h3>
            <LabelAndP classes="capitalize" label="Type" value={data.type} />
            <LabelAndP label="Year" value={data.year} />
            <LabelAndP label="Genres" value={data.genres} />
        </div>
    )
}

export default MiniMediaCard