module.exports = {
  apps: [
    {
      name: "glass-artist-portfolio",
      script: ".next/standalone/server.js",
      cwd: process.cwd(),
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3002,
      },
    },
  ],
};
