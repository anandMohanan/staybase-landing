export const GET = async (req: Request) => {
    try {
        const response = await fetch("https://api.fillout.com/v1/api/forms/7CMioREfD6us/submissions",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.FILLOUT_API_KEY}`
                }
            });
        const data = await response.json();

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        return new Response(JSON.stringify(error), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}
