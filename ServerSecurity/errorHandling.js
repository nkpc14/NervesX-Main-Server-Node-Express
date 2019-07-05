export const pageNotFound = (req, res, next) => {
    res.status(404).json({
        error: "Page Not Found!"
    });
};
export const errorHandlerGlobal = (error, req, res, next) => {
    res.status(error.httpStatusCode).json(error);
};

export const error = (res, next, message, statusCode) => {
    const err = new Error(message);
    res.status(statusCode);
    res.json({
        error:err
    })
};

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status