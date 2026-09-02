# feature-flags

Feature flags client for our applications.

## Install

Before installing the package, create an `.npmrc` file in the project root with the following line:

```ini
@buf:registry=https://buf.build/gen/npm/v1/
```

```shell
pnpm add @altipla/feature-js
```

## Usage

Configure the project once.

```ts
import { configure, flag } from '@altipla/feature-flags'

configure({
  project: 'repository_name',
})
```

Once configured, use `flag` to check whether a feature flag is enabled:

```ts
const enabled = await flag('my-feature')
```

On error or timeout the check returns `false`.
