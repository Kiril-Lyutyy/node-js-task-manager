export const logRequestsToConsole = (req) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
}