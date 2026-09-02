type Config = {
  project: string
}

let config: Config | undefined

export function configureFlag(options: Config) {
  config = options
}

export function getProject() {
  if (!config) {
    throw new Error('not configured')
  }
  return config.project
}
