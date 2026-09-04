import { createClient } from '@connectrpc/connect'
import { createConnectTransport } from '@connectrpc/connect-node'
import { FlagsService } from '@buf/altipla_feature-flags.bufbuild_es/flags/flags_pb.js'
import { getProject } from './config.js'

export { configureFlags } from './config.js'

const client = createClient(
  FlagsService,
  createConnectTransport({
    httpVersion: '1.1',
    baseUrl: 'https://flags-1060593636030.europe-west1.run.app',
  }),
)
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
