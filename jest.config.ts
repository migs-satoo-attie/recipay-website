import type { Config } from "jest";

const config: Config = {
  verbose: true,
  modulePathIgnorePatterns: [".next", "node_modules"],
};

export default config;
