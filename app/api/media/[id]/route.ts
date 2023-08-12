export const GET = async (request: Request, {params}: {params: {id: string}}) => {
    const TMDBID = params.id;

    console.log("id = ", TMDBID);
    
    const url = `https://streaming-availability.p.rapidapi.com/search/title?title=${TMDBID}&country=gb&show_type=all&output_language=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.X_RAPID_API_KEY as string, 
            'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST as string
        }
    };

    // TODO use the passed TMDB id

    // try {
    //     const response = await fetch(url, options);
    //     const data = await response.json();

    //     return new Response(JSON.stringify(data) ,{status: 200} );
    // } catch (error) {
    //     return new Response("Could not load the media", { status: 200});
    // }
} 