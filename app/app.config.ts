export default defineAppConfig({
  docus: {
    locale: 'en',
  },

  seo: {
    titleTemplate: '%s · Inertify',
    title: 'Inertify',
    description: 'Headless, server-driven packages for Laravel, Inertia, and Vue.',
  },

  header: {
    title: 'Inertify',
    logo: {
      light: '/inertify-logo.svg',
      dark: '/inertify-logo.svg',
      alt: 'Inertify',
      favicon: '/favicon.svg',
    },
  },

  github: {
    url: 'https://github.com/inertify',
    branch: 'main',
  },

  // In-page navigation rendered by AppHeaderCenter and AppHeaderBody. The site
  // is a single landing page, so every entry is a section anchor.
  navigation: {
    links: [
      { label: 'Packages', to: '#packages' },
      { label: 'Inertify Form', to: '#form' },
      { label: 'Approach', to: '#approach' },
    ],
  },

  // Single source of truth for the package family. PackageGrid renders the
  // packages section from it.
  packages: [
    {
      id: 'form',
      name: 'Inertify Form',
      composer: 'inertify/form',
      npm: '@inertify/form-vue',
      icon: 'i-lucide-text-cursor-input',
      tagline: 'Schema-driven forms',
      status: 'available',
      statusLabel: 'v0.1.0 pre-release',
      description: 'Define fields, rules, authorization, visibility, binding, and uploads in Laravel. Render every control with your own Vue components.',
      features: [
        'Container-resolved PHP form classes',
        'Server-side validation, Precognition, and authorization',
        'Native, temporary, chunked, and direct uploads',
        'Renderless Vue engine with typed composables',
      ],
      to: 'https://github.com/inertify/form',
    },
    {
      id: 'table',
      name: 'Inertify Table',
      composer: 'inertify/table',
      npm: '@inertify/table-vue',
      icon: 'i-lucide-table-2',
      tagline: 'Server-driven data tables',
      status: 'planned',
      statusLabel: 'Coming soon',
      description: 'Planned. Columns, filters, sorting, and pagination declared in Laravel, with rows rendered by application-owned components.',
      features: [
        'Column, filter, and sort definitions in PHP',
        'Query state carried through Inertia partial reloads',
        'Server-authorized selection and bulk actions',
        'No table markup, styles, or components shipped',
      ],
    },
    {
      id: 'modal',
      name: 'Inertify Modal',
      composer: 'inertify/modal',
      npm: '@inertify/modal-vue',
      icon: 'i-lucide-square-stack',
      tagline: 'Route-driven modals',
      status: 'planned',
      statusLabel: 'Coming soon',
      description: 'Planned. Dialogs and slideovers resolved from Laravel routes, keeping real URLs while your application owns the dialog markup.',
      features: [
        'Modal responses returned from controllers',
        'Stacked dialogs with addressable URLs',
        'Background page preserved across visits',
        'Your own overlay, focus, and animation decisions',
      ],
    },
  ],

  ui: {
    colors: {
      primary: 'inertify',
      neutral: 'zinc',
    },
    prose: {
      codeIcon: {
        php: 'i-vscode-icons-file-type-php2',
      },
      pre: {
        slots: {
          // Keep code blocks dark in both color modes. `dark` scopes the UI
          // color tokens and Shiki's dark theme to this subtree only.
          root: 'dark',
          header: 'px-5 py-3.5',
          copy: 'top-[13px] end-[13px]',
          // Scroll long lines instead of wrapping them. Line numbers come from
          // the `line` attribute Shiki sets on each line (see app.css).
          base: 'px-5 py-4 whitespace-pre wrap-normal **:[.line.highlight]:-mx-5 **:[.line.highlight]:px-5',
        },
      },
    },
    pageHero: {
      slots: {
        title: 'font-semibold sm:text-6xl',
        // Tighter than the theme default so the hero sits closer to the header
        // and to the first section.
        container: 'py-12 sm:py-16 lg:py-20',
      },
    },
    pageSection: {
      slots: {
        // Tighten the theme's py-16/24/32 so sections sit closer together.
        container: 'py-10 sm:py-14 lg:py-20',
      },
    },
    pageCard: {
      slots: {
        container: 'lg:flex min-w-0',
        wrapper: 'flex-none',
      },
    },
  },
})
