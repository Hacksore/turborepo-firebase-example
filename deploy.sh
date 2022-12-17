#!/bin/bash

# check for force flag
function has_param() {
  local terms="$1"
  shift

  for term in $terms; do
    for arg; do
      if [[ $arg == "$term" ]]; then
        echo "yes"
      fi
    done
  done
}

# Allow to force deploy
FORCE=$(has_param "-f --force" "$@")

# clear dir before runs
rm -rf out-web
rm -rf out-api

# build api
buildOutput=$(npx turbo build --filter=api)
if [[ $buildOutput != *"FULL TURBO"* || $FORCE ]]; then
  echo "Deploying API..."
  npx turbo prune --scope=api --out-dir out-api
  npx firebase deploy --only functions
else
  echo "Not deploying API as no chages detected"
fi

# build web
buildOutput=$(npx turbo build --filter=web)
if [[ $buildOutput != *"FULL TURBO"* || $FORCE ]]; then
  echo "Deploying WEB..."
  npx turbo prune --scope=web --out-dir out-web
  npx firebase deploy --only hosting
else
  echo "Not deploying WEB as no chages detected"
fi

# npx firebase deploy