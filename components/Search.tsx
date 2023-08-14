import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface SearchProps {
    onDataSet: (data: any) => void;
    setIsLoading: (data: boolean) => void;
}

const Search = ({ onDataSet, setIsLoading }: SearchProps) => {

    const [searchText, setSearchText] = useState<string>("");
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        if(searchText.length >= 3) setButtonDisabled(false);
        else setButtonDisabled(true);
    }, [searchText]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            setIsLoading(true);

            const response = await fetch(`/api/media?search=${searchText}`);
            const data = await response.json();
            router.replace(`?q=${searchText}`)
            
            onDataSet(data);
        } catch (error) {
            console.log("an error happened + error: ", error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='w-full sm:bg_colour rounded'>
            <form className='flex items-center flex-col sm:flex-row' onSubmit={handleSubmit}>
                <input type='text' placeholder='Harry Potter etc' className='w-full sm:w-2/3 rounded p-2 bg-slate-600 sm:bg-slate-600 sm:mr-20' value={searchText} onChange={(e) => setSearchText(e.target.value)}/>

                <button type='submit' className='slate_btn border border-green-400 w-full mt-3 sm:w-1/3 sm:mt-0' disabled={buttonDisabled}>Search</button>
            </form>
        </div>
    )
}

export default Search