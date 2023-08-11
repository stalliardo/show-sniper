import MiniMediaCard from "./media/MiniMediaCard"
import jsonData from '../private/responses/harry.json'; // <- TODO - remove

console.log("jsonData = ", jsonData.result); // <- TODO - remove

const SearchResults = ({ data }: any) => {

    return (
        <>
            {
                jsonData.result.length ?
                    <section className="bg_colour w-full h-fit rounded-lg p-8">
                        <h2 className="text-white text-3xl">Search Results</h2>

                        <div className="flex justify-between gap-28 flex-wrap mt-8">
                            {jsonData.result.map((d: any, index) => (
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