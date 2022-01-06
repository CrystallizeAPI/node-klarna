export function optionalLoggerFactory(
  config: OptionalLogConfig = { enabled: false, useNodeEnv: false }
) {
  const { enabled = false, useNodeEnv = false } = config;

  const disabledLogger: Logger = {
    warn: () => {},
    info: () => {},
    error: () => {},
  };

  if (useNodeEnv && process.env.NODE_ENV === 'production') {
    return disabledLogger;
  }

  if (!enabled && !useNodeEnv) {
    return disabledLogger;
  }

  return {
    info: (...args: any) => console.log(...args),
    warn: (...args: any) => console.warn(...args),
    error: (...args: any) => console.error(...args),
  };
}

export interface Logger {
  info: (...args: any) => void;
  error: (...args: any) => void;
  warn: (...args: any) => void;
}

export interface OptionalLogConfig {
  enabled?: boolean;
  useNodeEnv?: boolean;
}
