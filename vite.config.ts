import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/RockPaperScissors/',
  plugins: [svelte(), VitePWA({ registerType: 'autoUpdate' })],
});
