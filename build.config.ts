import { defineBuildConfig } from 'obuild/config'

export default defineBuildConfig({
  entries: [
    {
      type: 'bundle',
      input: ['./src/index.ts'],
    },
  ],
  hooks: {
    rolldownOutput(cfg) {
      cfg.codeSplitting = false
    },
  },
})
