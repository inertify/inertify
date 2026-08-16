export interface InertifyPackage {
  id: string
  name: string
  composer: string
  npm: string
  icon: string
  tagline: string
  status: 'available' | 'planned'
  statusLabel: string
  description: string
  features: string[]
  to?: string
}

/**
 * The package family declared in `app.config.ts`. Both the hero showcase and
 * the packages section read from it so names and statuses stay in one place.
 */
export function usePackages() {
  const appConfig = useAppConfig()

  return computed<InertifyPackage[]>(() => (appConfig.packages || []) as InertifyPackage[])
}
