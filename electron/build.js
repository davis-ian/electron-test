const { execSync } = require("child_process");
const path = require("path");

console.log("Building Electron main process...");

try {
  // Compile TypeScript to JavaScript
  execSync(
    "tsc electron/main.ts --outDir dist-electron --module commonjs --target ES2020",
    {
      stdio: "inherit",
    }
  );

  // Rename the output file
  const fs = require("fs");
  const oldPath = path.join(process.cwd(), "dist-electron/main.js");
  const newPath = path.join(process.cwd(), "dist-electron/main.cjs");

  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
  }

  console.log("Build complete");
} catch (error) {
  console.error("Build failed:", error);
  process.exit(1);
}
