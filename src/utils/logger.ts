export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const LEVELS: LogLevel[] = ['debug', 'info', 'warn', 'error'];

// Determine log level from environment. Default to 'info'.
const envLevel = (process.env.NEXT_PUBLIC_LOG_LEVEL || process.env.LOG_LEVEL || (process.env.NODE_ENV === 'production' ? 'warn' : 'debug')) as LogLevel;

function shouldLog(level: LogLevel) {
  const current = LEVELS.indexOf(envLevel);
  const target = LEVELS.indexOf(level);
  return target >= current;
}

export const logger = {
  debug: (...args: unknown[]) => {
    if (shouldLog('debug')) console.debug(...args);
  },
  info: (...args: unknown[]) => {
    if (shouldLog('info')) console.info(...args);
  },
  warn: (...args: unknown[]) => {
    if (shouldLog('warn')) console.warn(...args);
  },
  error: (...args: unknown[]) => {
    if (shouldLog('error')) console.error(...args);
  },
};
