import { client } from './client.js'
import { getProject } from './config.js'

export { configureFlag } from './config.js'

export async function flag(flag: string): Promise<boolean> {
  const project = getProject()
  try {
    const { enabled } = await client.check(
      {
        project,
        flag,
      },
      {
        signal: AbortSignal.timeout(10_000),
      },
    )
    return enabled ?? false
  } catch (error) {
    console.warn(`failed to check flag`, {
      flag,
      project,
      error,
    })
    return false
  }
}
