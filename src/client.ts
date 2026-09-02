import { createClient } from '@connectrpc/connect'
import { createConnectTransport } from '@connectrpc/connect-node'
import { FlagsService } from '@buf/altipla_feature-flags.bufbuild_es/flags/flags_pb.js'

export const client = createClient(
  FlagsService,
  createConnectTransport({
    httpVersion: '1.1',
    baseUrl: 'https://flags-1060593636030.europe-west1.run.app',
  }),
)
