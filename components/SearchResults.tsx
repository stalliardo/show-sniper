import MiniMediaCard from "./media/MiniMediaCard"

const SearchResults = ({ data }: any) => {
    return (
        <>
            {
                data.results && data.results.length ?
                    <section className="bg_colour w-full h-fit rounded-lg p-8">
                        <h2 className="text-white text-3xl">Search Results</h2>

                        <div className="flex justify-between gap-2 flex-wrap mt-8">
                            {data.results.map((d: any, index: number) => (
                                <MiniMediaCard key={index} data={d}/>
                            ))}
                        </div>

                    </section> :
                    <></>
            }
        </>
    )
}

export default SearchResults;