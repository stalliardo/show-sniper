"use client";

import Search from "./Search";
import SearchResults from "./SearchResults";

import { useEffect, useState } from 'react';
import Spinner from "./Spinner";
import { useSearchParams } from 'next/navigation';

function PageContainer() {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const searchParams = useSearchParams();
   
    useEffect(() => {
        const query = searchParams.get("q");
       
        if(query !== null){
            const getData = async () => {
                try {
                    setIsLoading(true);
                    const response = await fetch(`/api/media?search=${decodeURI(query)}`);
                    const data = await response.json();
                    setData(data);
                } catch (error) {
                    console.log("Error getting media data: Error: ", error);
                }
                finally {
                    setIsLoading(false);
                }
            }
            getData();
        }
    }, [])

    return (
        <>
            <div className="text-white w-full h-34 rounded-lg">
                <Search onDataSet={(data: any) => setData(data)} setIsLoading={(isLoading: boolean) => setIsLoading(isLoading)}/>
            </div>

            <div className="text-white mt-8">
                <SearchResults data={data}/>
            </div>

            {
                isLoading && <Spinner classes='mt-32' size={{height: "20", width: "20"}}/>
            }
        </>
    )
}

export default PageContainer;