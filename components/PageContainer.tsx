"use client";

import Search from "./Search";
import SearchResults from "./SearchResults";

import { useState } from 'react';

function PageContainer() {
    const [data, setData] = useState([]);

    return (
        <>
            <div className="text-white bg_colour w-full h-34 rounded-lg p-6">
                <Search onDataSet={(data: any) => setData(data)}/>
            </div>

            <div className="text-white mt-8">
                <SearchResults data={data}/>
            </div>
        </>
    )
}

export default PageContainer;