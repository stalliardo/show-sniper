import MiniMediaCard from "./media/MiniMediaCard"

const SearchResults = ({ data }: any) => {
    return (
        <>
            {
                data.results && data.results.length ?
                    <section className="w-full h-fit rounded-lg">
                        <h2 className="text-white text-2xl text-center sm:text-left">Search Results</h2>

                        <div className="flex items-center flex-col sm:flex-row justify-between gap-2 flex-wrap mt-4">
                            {data.results.map((d: any, index: number) => (
                                <MiniMediaCard key={index} data={d} />
                            ))}
                        </div>

                    </section> :

                Object.keys(data).length > 0 &&
                    <div className="text-xl text-center">
                        Sorry, we couldn't find any results.
                    </div>

            }
        </>
    )
}

export default SearchResults;