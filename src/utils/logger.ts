import { transports, format } from "winston";

export function getLoggerOptions(scenarioName: string, level: string = "info") {
  return {
    transports: [
      new transports.File({
        filename: `test-results/logs/${scenarioName}/log.log`,
        level: level,
        format: format.combine(
          format.align(),
          format.printf((info) => `${info.level}: ${info.message}`)
        ),
      }),
    ],
  };
}
