// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
    modules: ['@pinia/nuxt'],
  devtools: { enabled: true },
  app: {
    head: {
      link: [
          {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
      }
      ],
      // bodyAttrs: {
      //   class: 'd-flex flex-colum h-100'
      // },


      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose',

        }
      ],
    },

  }
})

