export default defineAppConfig({
  docus: {
    locale: 'en',
  },

  // Full-text search over the imported documentation, as the standalone docs
  // deployment had. AppHeader renders the trigger on documentation pages.
  search: {
    fts: true,
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

  // Docus builds the "Edit this page" link of a documentation page from this,
  // and those pages are imported from the Form repository — hence the package
  // repository rather than the organization. AppHeader and the footer link here
  // too, so the GitHub icon follows it.
  github: {
    url: 'https://github.com/inertify/form',
    branch: 'main',
    rootDir: 'docs',
  },

  // In-page navigation rendered by AppHeaderCenter and AppHeaderBody. Apart from
  // the documentation, the site is a single landing page, so the other entries
  // are section anchors.
  navigation: {
    // Every documentation page hangs under /form, so without this the sidebar
    // would indent all of it below a "Form" root and truncate the labels. In
    // this mode that root becomes a section link above the sidebar instead, and
    // the sidebar shows the section's own tree — which is also how a second
    // package's documentation would slot in.
    sub: 'aside',

    links: [
      { label: 'Packages', to: '/#packages' },
      // The first documentation page rather than /form, which only exists as a
      // server-side redirect and would 404 on a client-side navigation.
      { label: 'Inertify Form', to: '/form/getting-started/installation' },
      // { label: 'Approach', to: '/#approach' },
    ],
  },

  // Single source of truth for the package family. PackageRows renders the
  // packages section from it, one row per entry.
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
      to: '/form/getting-started/installation',
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
        // Tighter than the theme default (py-24/32/40) so the hero sits closer
        // to the header and to the first section.
        container: 'py-16 sm:py-20 lg:py-28',
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
