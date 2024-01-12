// eslint-disable-next-line no-unused-vars
enum LogLevels { INFO, WARN, DEBUG, ERROR }
const env = process.env.NODE_ENV;

function log(level: LogLevels, message?: any, ...optionalParams: any[]) {
    if (!message || ((env === 'prod' || env === 'production') && level === LogLevels.DEBUG)) return;
    const _prefix = `${new Date().toISOString()} [${LogLevels[level]}]`;
    const _params = [message, ...optionalParams];
    if (level !== LogLevels.ERROR) {
        console.log(_prefix, ..._params);
    } else {
        console.error(_prefix, ..._params);
    }
}


export default {
    info: (message?: any, ...optionalParams: any[]) => log(LogLevels.INFO, message, ...optionalParams),
    warn: (message?: any, ...optionalParams: any[]) => log(LogLevels.WARN, message, ...optionalParams),
    debug: (message?: any, ...optionalParams: any[]) => log(LogLevels.DEBUG, message, ...optionalParams),
    error: (message?: any, ...optionalParams: any[]) => log(LogLevels.ERROR, message, ...optionalParams)
};
