export const GET = async (request: Request, {params}: {params: {id: string}}) => {
    const TMDBID = params.id;
    
    const url = `https://streaming-availability.p.rapidapi.com/get?output_language=en&tmdb_id=movie/${TMDBID}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.X_RAPID_API_KEY as string, 
            'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST as string
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        
        return new Response(JSON.stringify(data) ,{status: 200} );
    } catch (error) {
        return new Response("Could not load the media", { status: 200});
    }
} 