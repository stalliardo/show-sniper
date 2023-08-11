


export const getShows = async (title: string) => {
    const url = `https://streaming-availability.p.rapidapi.com/search/title?title=${title}&country=gb&show_type=all&output_language=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.X_RAPID_API_KEY as string, 
            'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST as string
        }
    };

    try {
        const response = await fetch(url, options);
        return response.json();
    } catch (error) {
        console.error(error);
    }
}