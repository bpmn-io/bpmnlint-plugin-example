# Target Namespace (target-namespace)

Validates that the `bpmn:Definitions` tag has a `targetNamespace` attribute set.

Example of __incorrect__ usage of this rule:

![Incorrect usage example](./examples/target-namespace-incorrect.png)

```xml
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL">
  ...
</definitions>
```

Cf. [`target-namespace-incorrect.bpmn`](./examples/target-namespace-incorrect.bpmn).


Example of __correct__ usage of this rule:

![Correct usage example](./examples/target-namespace-correct.png)

```xml
<definitions
    xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL"
    targetNamespace="http://bpmn.io/bpmn">
  ...
</definitions>
```

Cf. [`target-namespace-correct.bpmn`](./examples/target-namespace-correct.bpmn).
