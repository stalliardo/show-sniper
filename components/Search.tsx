import React, { useEffect, useState } from 'react'

const Search = () => {

    const [searchText, setSearchText] = useState<string>("");
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

    useEffect(() => {
        if(searchText.length >= 3) setButtonDisabled(false);
        else setButtonDisabled(true);
    }, [searchText]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("sub called");
    }

    return (
        <div className='w-full bg-slate-800 p-4 rounded'>
            <form className='flex items-center flex-col sm:flex-row' onSubmit={handleSubmit}>
                <input type='text' placeholder='Game of Thrones, Harry Potter etc' className='w-full sm:w-2/3  rounded p-2 bg-slate-900 sm:mr-20' value={searchText} onChange={(e) => setSearchText(e.target.value)}/>

                <button type='submit' className='slate_btn w-full mt-3 sm:w-1/3 sm:mt-0' disabled={buttonDisabled}>Search</button>
            </form>
        </div>
    )
}

export default Search