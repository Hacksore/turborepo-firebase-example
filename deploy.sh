#!/bin/bash

# clear dir before runs
rm -rf out-web
rm -rf out-api

# build api
npx turbo build --filter=api
npx turbo prune --scope=api --out-dir out-api

# build web
npx turbo build --filter=web
npx turbo prune --scope=web --out-dir out-web

npx firebase deploy