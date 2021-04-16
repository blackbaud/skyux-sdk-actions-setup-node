# @skyux-sdk/actions-setup-node

Paired-down version of `actions/setup-node` that allows us to install packages from Blackbaud's internal NPM registry.

## Usage

```
- uses: blackbaud/skyux-sdk-actions-setup-node@main
  env:
    NODE_AUTH_TOKEN: ${{secrets.BLACKBAUD_NPM_TOKEN}}
```

## Build

```
npm run build && npm run pack
```