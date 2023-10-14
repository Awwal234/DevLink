// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/hanko'
  ],
  devServer: {
    host: '0.0.0.0'
  },
  hanko: {
    apiURL: process.env.NUXT_PUBLIC_HANKO_API_URL
  }
})
