import { defineConfig, envField } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  experimental: {
    env: {
      schema: {
        PUBLIC_APP_IN_PRODUCTION: envField.boolean({
          context: 'client',
          access: 'public',
        }),
      },
    },
  },
  devToolbar: {
    enabled: true,
  },
})
