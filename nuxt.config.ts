export default defineNuxtConfig({
  extends: ['docus'],

  site: {
    name: 'Inertify',
  },

  icon: {
    clientBundle: {
      icons: ['vscode-icons:file-type-php2'],
    },
  },

  nitro: {
    prerender: {
      // Docus crawls links while prerendering. `/form` belongs to the docs
      // deployment behind a rewrite, so crawling it here would only log a 404
      // for a route this app deliberately does not serve.
      ignore: ['/form', '/form/'],
    },
  },

  content: {
    build: {
      markdown: {
        highlight: {
          langs: [
            'bash',
            'diff',
            'json',
            'js',
            'ts',
            'html',
            'css',
            'vue',
            'shell',
            'mdc',
            'md',
            'yaml',
            'php',
          ],
        },
      },
    },
  },

  mdc: {
    highlight: {
      theme: {
        light: 'github-light',
        default: 'github-light',
        dark: 'github-dark',
      },
    },
  },

  llms: {
    title: 'Inertify',
    description: 'Headless, server-driven packages for Laravel, Inertia, and Vue.',
    full: {
      title: 'Inertify packages',
      description: 'Overview of the Inertify package family: Form, Table, and Modal.',
    },
  },
})
