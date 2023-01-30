import {createLogger,format,transports} from 'winston'

const loggerFormat = format.printf(({
    level, message, timestamp, stack,
  }) => `[${timestamp}] ${level}: ${stack || message}`);

export const logger = createLogger({
    format:format.combine(
        format.errors({stack:true})
    ),
    transports:[
        new transports.Console({
            level:'debug',
            format: format.combine(
                format.colorize(),
                format.timestamp({format:'YYYY-MM-DD HH:mm:ss'}),
                loggerFormat
            )
        }),
        new transports.File({
            filename:`${__dirname}/../utils/log-api.log`,
            format:format.combine(
                format.timestamp({format:'YYYY-MM-DD HH:mm:ss'}),
                loggerFormat
            )
        })
    ]
})