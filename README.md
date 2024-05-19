# Azure Devops Widget Example

This repo contains template for building Azure Devops dashboard widgets.

### Description 📃

Developing any sort of extension for Azure DevOps can be challenging. There is a lack of examples and support, and even the official documentation uses SDKs and libraries that are no longer supported. This repository will help you build your custom Azure DevOps widget for the dashboard with a minimal set of dependencies.

## Prerequisites 📝

- [tfs-cli](https://github.com/Microsoft/tfs-cli)
- [webpack](https://webpack.js.org/)
- [azure-devops-extension-sdk](https://github.com/microsoft/azure-devops-extension-sdk)
- [azure-devops-extension-api](https://github.com/microsoft/azure-devops-extension-api)

## Build 🔨

To bulid extension you can use build command that are located in `package.json` file:

```json
"scripts": {
    "clean": "rimraf ./dist ./out",
    "compile": "npm run clean && webpack --mode production",
    "package": "npm run compile && tfx extension create --manifest-globs vss-extension.json",
    "publish": "npm run compile && tfx extension publish --manifest-globs vss-extension.json"
}
```

Feel free to modify configuration files (`package.json`, `vss-extension.json` ,`webpack.config.js`) to suit your needs.

## Usefull resources 📚

- [Add a dashboard widget](https://learn.microsoft.com/en-us/azure/devops/extend/develop/add-dashboard-widget?view=azure-devops)
- [azure-devops-extension-sample](https://github.com/microsoft/azure-devops-extension-sample/tree/master)

## Contriburtion 🤝

This project welcomes contributions and suggestions.
