// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://tobezdev.com',
    trailingSlash: "never",
    publicDir: './public',
    outDir: './build',
    cacheDir: './cache',
    compressHTML: true,
    output: 'static'
});
