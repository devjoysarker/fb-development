

// Create error controller

const createError = (status,msg) => {
    const error = new Error();
    error.status = status;
    error.message = msg;
    return error
}

// Exports Defult error
export default createError