export async function GET(request: Request) {
    const responseData = {
        error : false,
        message : "some message goes here for get method",
        data : []
    }
    const responseOptions = {
        status : 200
    }
    return Response.json(responseData, responseOptions)
}

export async function POST(request: Request) {
    const responseData = {
        error : false,
        message : "some message goes here for post method",
        data : []
    }
    const responseOptions = {
        status : 200
    }
    return Response.json(responseData, responseOptions)
}