import { Logger, optionalLoggerFactory } from '../logger';

describe('logger utils', () => {
  describe('optionalLoggerFactory', () => {
    const logMockUtils = getLogMockUtils();
    const nodeEnvUtils = getNodeEnvUtils();

    beforeEach(logMockUtils.setup);
    afterEach(logMockUtils.teardown);

    const callLogger = (logger: Logger) => {
      logger.warn('warning');
      logger.info('info');
      logger.error('error');
    };

    it('should not call console log when disabled', () => {
      const { logMock, warnMock, errorMock } = logMockUtils.getMocks();

      const logger = optionalLoggerFactory({ enabled: false });

      callLogger(logger);

      expect(logMock).not.toBeCalled();
      expect(warnMock).not.toBeCalled();
      expect(errorMock).not.toBeCalled();
    });

    it('should call console log when enabled', () => {
      const { logMock, warnMock, errorMock } = logMockUtils.getMocks();

      const logger = optionalLoggerFactory({ enabled: true });

      callLogger(logger);

      expect(logMock).toBeCalledWith('info');
      expect(warnMock).toBeCalledWith('warning');
      expect(errorMock).toBeCalledWith('error');
    });

    it('should call console log when useEnv enabled and the env is not prod', () => {
      const { logMock, warnMock, errorMock } = logMockUtils.getMocks();

      nodeEnvUtils.setup('development');

      process.env.NODE_ENV = 'development';

      const logger = optionalLoggerFactory({ useNodeEnv: true });

      callLogger(logger);

      expect(logMock).toBeCalledWith('info');
      expect(warnMock).toBeCalledWith('warning');
      expect(errorMock).toBeCalledWith('error');

      nodeEnvUtils.teardown();
    });

    it('should not call console log when useEnv enabled and the env is prod', () => {
      const { logMock, warnMock, errorMock } = logMockUtils.getMocks();

      nodeEnvUtils.setup('production');

      const logger = optionalLoggerFactory({ useNodeEnv: true });

      callLogger(logger);

      expect(logMock).not.toBeCalled();
      expect(warnMock).not.toBeCalled();
      expect(errorMock).not.toBeCalled();

      nodeEnvUtils.teardown();
    });

    it('should not call console log by default', () => {
      const { logMock, warnMock, errorMock } = logMockUtils.getMocks();

      const logger = optionalLoggerFactory({});

      callLogger(logger);

      expect(logMock).not.toBeCalled();
      expect(warnMock).not.toBeCalled();
      expect(errorMock).not.toBeCalled();
    });
  });
});

function getLogMockUtils() {
  let logMock: jest.SpyInstance;
  let warnMock: jest.SpyInstance;
  let errorMock: jest.SpyInstance;

  return {
    setup: () => {
      logMock = jest.spyOn(console, 'log').mockImplementation(jest.fn);
      warnMock = jest.spyOn(console, 'warn').mockImplementation(jest.fn);
      errorMock = jest.spyOn(console, 'error').mockImplementation(jest.fn);

      return {
        logMock,
        warnMock,
        errorMock,
      };
    },
    getMocks: () => ({
      logMock,
      warnMock,
      errorMock,
    }),
    teardown: () => {
      logMock.mockRestore();
      warnMock.mockRestore();
      errorMock.mockRestore();
    },
  };
}

function getNodeEnvUtils() {
  let NODE_ENV: string;

  return {
    setup: (value: string) => {
      NODE_ENV = process.env.NODE_ENV as string;
      process.env.NODE_ENV = value;
    },
    teardown: () => {
      process.env.NODE_ENV = NODE_ENV;
    },
  };
}
