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

export async function PUT(request: Request) {
    const responseData = {
        error : false,
        message : "some message goes here for put method",
        data : []
    }
    const responseOptions = {
        status : 200
    }
    return Response.json(responseData, responseOptions)
}

export async function DELETE(request: Request) {
    const responseData = {
        error : false,
        message : "some message goes here for delete method",
        data : []
    }
    const responseOptions = {
        status : 200
    }
    return Response.json(responseData, responseOptions)
}

export async function PATCH(request: Request, params:{params : {id:number}}) {
    console.log(params.params.id)
    const responseData = {
        error : false,
        message : "some message goes here for patch method",
        data : []
    }
    const responseOptions = {
        status : 200
    }
    return Response.json(responseData, responseOptions)
}