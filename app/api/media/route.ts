// export const GET = async (request: Request) => {
//     const { searchParams } = new URL(request.url);
//     const searchQuery = searchParams.get("search");
    
//     const url = `https://streaming-availability.p.rapidapi.com/search/title?title=${searchQuery}&country=gb&show_type=all&output_language=en`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': process.env.X_RAPID_API_KEY as string, 
//             'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST as string
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const data = await response.json();

//         return new Response(JSON.stringify(data) ,{status: 200} );
//     } catch (error) {
//         return new Response("Could not load the media", { status: 200});
//     }
// } 

  export const GET = async (request: Request) => {

    const { searchParams } = new URL(request.url);
      const serachQuery = searchParams.get("search");

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
        }
      };
      const url = `https://api.themoviedb.org/3/search/movie?query=${serachQuery}&include_adult=false&language=en-US&page=1`;

      try {
        const response = await fetch(url, options);
        const data = await response.json();

        return new Response(JSON.stringify(data), { status: 200 });

      } catch (error) {
        
        return new Response("Could not retrieve the media", {status: 500});
      }

  }