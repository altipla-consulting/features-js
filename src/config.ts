type Config = {
  project: string
}

let config: Config | undefined

export function configureFlags(options: Config) {
  config = options
}

export function getProject() {
  if (!config) {
    throw new Error('not configured, call configureFlags first')
  }
  return config.project
}
