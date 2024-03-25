## Jest presets for Cloudscape Design System

This package contains [Jest presets](https://jestjs.io/docs/en/configuration#preset-string) used to test an application based on the [Cloudscape Design System](https://cloudscape.design/) React components.

Cloudscape is an open source design system for building intuitive, engaging, and inclusive web cloud experiences at scale. It consists of an extensive set of guidelines to create user experiences, along with the design resources and front-end components to streamline implementation.

Cloudscape was built for and is used by [Amazon Web Services (AWS)](https://aws.amazon.com/) products and services. We created it in 2016 to improve the user experience across AWS web applications, and also to help teams implement those applications faster. Since then, we have continued enhancing the system based on customer feedback and research.

You can find [documentation about testing](https://cloudscape.design/get-started/testing/frameworks/) in the Cloudscape documentation website.

Browse the [components repository](https://github.com/cloudscape-design/components) of Cloudscape Design System.

## Getting help

You can [create bug reports or feature requests](https://github.com/cloudscape-design/jest-preset/issues/new/choose), or [start a discussion](https://github.com/cloudscape-design/components/discussions) to ask a question. To minimize duplicates, we recommend that you search for existing bug reports, feature requests, or discussions before initiating a new thread.


### Getting started

Install this package with the npm package manager of your choice, for example `npm install --save-dev @cloudscape-design/jest-preset`.

Make sure that you also have `babel-jest` installed.

And `package.json` along with its peer dependency babel-jest of the same version as the jest you are using:

```
"devDependencies": {
    "@cloudscape-design/jest-preset": "^2.0.0",
    "babel-jest": "{your jest version}"
}
```

In your `jest.config.json`:

```
{
  "preset": "@cloudscape-design/jest-preset"
}
```

### Advanced usage

If you already have another preset in your configuration, you can use `@cloudscape-design/jest-preset/merge` helper to merge them together:

```js
const mergePresets = require('@cloudscape-design/jest-preset/merge');
const tsPreset = require('ts-jest/jest-preset');
const cloudscapePreset = require('@cloudscape-design/jest-preset');

module.exports = mergePresets(tsPreset, cloudscapePreset, {
  // ... your config
});
```

Note that if multiple presets provide `transformIgnorePatterns` property, you need to merge it manually. By default,
merge operation extends the ignore paths, you need to make sure that the modules defined in [jest-preset.js](./jest-preset.js) remain unignored.

### Troubleshooting

#### I added preset, but still seeing "Jest encountered an unexpected token" issue

It means that Jest preset could not apply the configuration properly.

1. Check if you have `transformIgnorePatterns` defined in your custom configuration. If so, it requires a manual merge with configuration defined in [jest-preset.js](./jest-preset.js).
2. Check if you are overwriting `transform` property. It should merge the new paths in, not replace. Check the "Advanced usage" section above for an example.

## Contributing

The [contribution guidelines](https://github.com/cloudscape-design/jest-preset/blob/main/CONTRIBUTING.md) contains information on how to contribute, as well as our support model and versioning strategy.

## License

This project is licensed under the [Apache 2.0 License](/LICENSE).
