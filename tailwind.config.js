/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily:{
      sans:[
        'Lato'
      ]
    },
    extend:{
      letterSpacing: {
        pctitlewide: '1.35rem',
        pctitletight: '.925rem',
        cptitlewide: '1rem',
        cptitletight: '.725rem'
      }
    }
  },
  variants: {
  },
  plugins: [

  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
