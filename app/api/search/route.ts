export const GET = async (request: Request) => {
    const { searchParams } = new URL(request.url);
    const searchQuery = searchParams.get("query");

    console.log("query = ", searchQuery);

    try {

        const data = [
            {name: "test", age: 32}
        ]

        return new Response(JSON.stringify(data), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 