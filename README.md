# Turborepo + Firebase

How to combine turborepo and firebase to have idempotent deployments from local and CI.

```
├── apps
│   ├── api # firebase function that is typescript and loaded as ESM and deployed as a firebase function
│   └── web # the react+vite front end deployed to firebase hosting
```

```
# install the deps
npm install

# to develop
npm start

# to deploy
npm run deploy
```
