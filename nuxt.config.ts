/**
 * The Form documentation is imported from the package repository (see
 * content.config.ts) and mounted under /form. It is authored for a site that
 * *is* /form — that app is built with `app.baseURL = '/form/'` — so its
 * internal targets are written without the prefix: `/getting-started/…`. Here
 * the same markdown becomes pages of an app served from the root, where those
 * paths are not routes, so the prefix has to go back on.
 *
 * Rewriting the parsed tree rather than the markdown source keeps code blocks
 * out of it, and covers both the `href` of a link and the `to` of an MDC
 * component prop, which are the only two ways the docs point at a page.
 */
function prefixFormDocsTargets(nodes: unknown[]) {
  for (const node of nodes) {
    if (!Array.isArray(node)) {
      continue
    }

    const props = node[1] as Record<string, unknown> | undefined

    if (props) {
      for (const prop of ['href', 'to'] as const) {
        const target = props[prop]

        // Protocol-relative URLs are external, everything else rooted is ours.
        if (typeof target === 'string' && target.startsWith('/') && !target.startsWith('//')) {
          props[prop] = `/form${target}`
        }
      }
    }

    prefixFormDocsTargets(node.slice(2))
  }
}

export default defineNuxtConfig({
  extends: ['docus'],

  site: {
    name: 'Inertify',
  },

  // The icons the prose code blocks label their filenames with. Bundling them
  // keeps the pages off the Iconify API, which is also the only way they render
  // while prerendering.
  icon: {
    clientBundle: {
      icons: ['vscode-icons:file-type-php2', 'vscode-icons:file-type-vue'],
    },
  },

  // `docs` holds the imported Form documentation and nothing else, so every
  // file passing through here comes from the package repository.
  hooks: {
    'content:file:afterParse'(ctx) {
      if (ctx.collection.name !== 'docs') {
        return
      }

      const content = ctx.content as { stem?: string, body?: { value?: unknown[] } }

      if (content.body?.value) {
        prefixFormDocsTargets(content.body.value)
      }

      // `stem` is where the file sits relative to a content folder, so the
      // collection prefix is part of it. Docus builds the "Edit this page" link
      // by appending it to `github.rootDir` + /content, and in the package
      // repository these files live at docs/content/<stem> with no /form level.
      if (content.stem?.startsWith('form/')) {
        content.stem = content.stem.slice('form/'.length)
      }
    },
  },

  routeRules: {
    // The imported set has no page of its own at /form: links on this site
    // point at the first documentation page directly, and this catches the
    // /form URLs that were public while the docs were a separate deployment.
    '/form': { redirect: '/form/getting-started/installation' },
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

  // The same theme on both keys rather than a single one: `prose.pre` in
  // app.config.ts marks every block `dark`, which is what MDC switches on, and
  // that branch reads `--shiki-dark`. Left undefined, the code renders unstyled.
  mdc: {
    highlight: {
      theme: {
        default: 'catppuccin-mocha',
        dark: 'catppuccin-mocha',
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
