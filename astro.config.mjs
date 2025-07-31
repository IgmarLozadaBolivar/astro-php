// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    server : {
        port: 4323,
        host: false,
    },
    integrations : [
        tailwind(),
    ]
});
