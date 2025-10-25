export class ApiError extends Error {
    status: number
    message: string

    constructor({status, message}: {status: number, message: string}) {
        super(message);
        this.status = status;
        this.message = message;
    }

}





// export class AxiosErrors extends Error {
//     status;
//     errors;
//
//     constructor(status, message, errors = []) {
//         super(message);
//         this.status = status
//         this.errors = errors
//     }
//
//     static UnauthorizedError() {
//         return new ApiError(401, 'User Not Authorized');
//     }
//
//     static BadRequest(message, errors = []){
//         return new ApiError(400, message, errors);
//     }
// }
