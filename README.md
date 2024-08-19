# bpmnlint-plugin-example

[![CI](https://github.com/bpmn-io/bpmnlint-plugin-example/actions/workflows/CI.yml/badge.svg)](https://github.com/bpmn-io/bpmnlint-plugin-example/actions/workflows/CI.yml)

An example [bpmnlint](https://github.com/bpmn-io/bpmnlint) plug-in.


## About

This plugin shows how to contribute [rules](#add-rules) and
[configuration](#add-configuration) to bpmnlint.


## Add Rules

The [`./rules`](./rules) folder contains rules that are made available via
this plug-in. Configure them with the `example` prefix in your `.bpmnlintrc`:

```json
{
  "rules": {
    "example/no-manual-task": "warn"
  }
}
```

Checkout [`./test.js`](./test.js) to learn how to test your rules.


## Add Configuration

As part of the [`./index.js`](./index.js) the plug-in exposes configurations
to extend from using `extends` in the bpmnlint configuration:

```json
{
  "extends": [
    "bpmnlint:recommended",
    "plugin:example/recommended"
  ]
}
```


## Visual Debugging

Use the [bpmnlint-playground](https://github.com/bpmn-io/bpmnlint-playground) to visually debug your rules.


## License

MIT
