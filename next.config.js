const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  outputFileTracingRoot: path.resolve(__dirname),
  webpack(config) {
    // Fix "multiple modules with names that only differ in casing" on Windows.
    // This forces webpack to resolve all module paths to their real on-disk
    // casing, preventing duplicate module bundles caused by mixed-case paths.
    config.resolve.symlinks = false;
    config.snapshot = {
      ...(config.snapshot ?? {}),
      managedPaths: [],
    };
    return config;
  },
};

module.exports = nextConfig;
