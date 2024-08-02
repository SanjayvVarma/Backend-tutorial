class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode
        this.message = message
        this.data = data
        this.success = this.success < 400
    }
}

export default ApiResponse;