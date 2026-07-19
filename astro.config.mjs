// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // For a User site (rhl9263.github.io), site is the root of the domain.
  // If you switch to a Project site (repo != user.github.io), set base to '/repo-name/'.
  site: 'https://rhl9263.github.io',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
