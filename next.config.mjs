/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';

// Get the file path equivalent of import.meta.url
const __filename = fileURLToPath(import.meta.url);

const nextConfig = {
  allowedDevOrigins: ['hossamsa9470.builtwithrocket.new', '*.builtwithrocket.new'],
  webpack(config) {
    config.module.rules.push({
      test: /\.(jsx|tsx)$/,
      exclude: [/node_modules/],
      use: [{
        loader: '@dhiwise/component-tagger/nextLoader',
      }],
    });
    
    // Disable webpack caching in production to avoid file system permission issues
    if (process.env.NODE_ENV === 'production') {
      config.cache = false;
      // Add debug logging for production builds
      console.log('Running in production mode - webpack caching disabled');
    } else {
      // For development, ensure proper cache configuration
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
        cacheDirectory: '.next/cache',
      };
      console.log('Running in development mode - webpack caching enabled');
    }
    
    return config;
  },
  // Add additional logging for debugging build issues
  onDemandEntries: {
    // Make sure entries are not getting disposed during development
    maxInactiveAge: 1000 * 60 * 60, // 1 hour
  },
};