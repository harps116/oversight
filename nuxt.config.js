export default {
  target: 'static',
  head: {
    title: 'oversight',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'desc', name: 'desc', content: '' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'adam.harpur.io',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://adam.harpur.io',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '~/assets/logo.png' || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: ['~/plugins/axios.js', '~/plugins/posts.js'],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxtjs/axios', '@nuxt/content'],
  axios: {},
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
      rehypePlugins: ['~/plugins/content-image.js'],
    },
  },
  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
  },
  publicRuntimeConfig: {
    apiKey: process.env.DEV_TO_API_KEY,
  },
  styleResources: {
    scss: ['~/styles/main.scss'],
  },
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  hooks: {
    'content:file:beforeParse': async (file) => {
      if (file.extension !== '.md') return
      if (
        file.path === '/home/adam/workspace/oversight/content/notes/on-vue.md'
      ) {
        // console.log(file.data)
        const mermaid = require('headless-mermaid')
        const fs = require('fs')
        const regex = /```mermaid((.(?!``)|\n)*)```/g
        const matches = file.data.matchAll(regex)
        const svgAttrs = `xmlns:dc="http://purl.org/dc/elements/1.1/"
                        xmlns:cc="http://creativecommons.org/ns#"
                        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                        xmlns:svg="http://www.w3.org/2000/svg"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"`
        // for (const [index, match] of [...matches].entries()) {
        //   console.log(`${index},${match[1]}`, file.path)
        //   const graphValues = `${match[1]}`
        //   const contentNameParts = file.path.split('/')
        //   const contentName = contentNameParts[
        //     contentNameParts.length - 1
        //   ].replace('.md', '')
        //   const svg = await mermaid.execute(graphValues)
        //   fs.writeFileSync(`${contentName}-diagram-${index}.svg`, svg)
        //   // TODO: create output per match
        // }
      }
    },
    'content:file:beforeInsert': async (document, database) => {
      // if (document.slug === 'on-vue') {
      //   // console.log(document)
      //   // console.log('start', JSON.stringify(document.body))
      //   const { children } = document.body
      //   for (const [pos, el] of children.entries()) {
      //     // console.log('EL', JSON.stringify(el))
      //     if (el.children) {
      //       const codeblock = el.children.find(({ tag }) => tag === 'pre')
      //       if (
      //         codeblock &&
      //         codeblock.props.className.includes(`language-text`)
      //       ) {
      //         const mermaid = require('headless-mermaid')
      //         const graphValues = codeblock.children[0].children[0].value
      //         // console.log(JSON.parse(JSON.stringify(graphValues), null, 2))
      //         console.log(graphValues)
      //         const svg = await mermaid.execute(`${graphValues}`, {
      //           theme: 'neutral',
      //         })
      //         // console.log(svg)
      //         const ast = await database.markdown.toJSON(svg)
      //         const svgAst = ast.body.children
      //         // console.log('SVG', JSON.stringify(svgAst))
      //         // const diagram = svgAst[svgAst.length - 1]
      //         // console.log(diagram)
      //         // // eslint-disable-next-line
      //         // const [text, ...nodes] = diagram.children
      //         // const cleanDiagram = { ...diagram, children: nodes }
      //         const ogChildNodes = [...document.body.children]
      //         console.log(ogChildNodes.concat(svgAst))
      //         document.body.children = ogChildNodes.concat(svgAst)
      //         console.log(document.body.children)
      //       }
      //     }
      //   }
      //   console.log(`'''''''''''''''''''''''''''''''''''''`)
      //   console.log('FIN', JSON.stringify(document.body))
      //   console.log(`'''''''''''''''''''''''''''''''''''''`)
      // }
    },
  },
}
