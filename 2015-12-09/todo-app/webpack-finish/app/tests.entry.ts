type WebpackRequire = { context?: Function };

// require all modules ending in ".test.ts" from the
// current directory and all subdirectories
const testContext = (require as WebpackRequire).context('./', true, /\.test\.ts/);
testContext.keys().forEach(testContext);
