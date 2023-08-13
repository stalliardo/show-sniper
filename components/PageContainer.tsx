"use client";

import Search from "./Search";
import SearchResults from "./SearchResults";

import { useState } from 'react';
import Spinner from "./Spinner";

function PageContainer() {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return (
        <>
            <div className="text-white bg_colour w-full h-34 rounded-lg p-6">
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