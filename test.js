var expect = require('chai').expect;

var createModdle = require('bpmnlint/lib/testers/helper').createModdle;

var RuleTester = require('bpmnlint/lib/testers/rule-tester')({
  expectEqual: (a, b) => {
    expect(a).to.eql(b);
  }
});

var manualTaskRule = require('./rules/no-manual-task');
var targetNamespaceRule = require('./rules/target-namespace');


RuleTester.verify('no-manual-task', manualTaskRule, {
  valid: [
    {
      moddleElement: createModdle(
        '<startEvent xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" id="startEvent" />',
        'bpmn:StartEvent'
      )
    }
  ],
  invalid: [
    {
      moddleElement: createModdle(
        '<manualTask xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" id="manualTask" />',
        'bpmn:ManualTask'
      ),
      report: {
        id: 'manualTask',
        message: 'Element has disallowed type bpmn:ManualTask'
      }
    }
  ]
});


RuleTester.verify('target-namespace', targetNamespaceRule, {
  valid: [
    {
      moddleElement: createModdle(
        '<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" id="definitions" targetNamespace="http://foo" />',
      )
    }
  ],
  invalid: [
    {
      moddleElement: createModdle(
        '<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" id="definitions" />',
      ),
      report: {
        id: 'definitions',
        message: 'Element is missing targetNamespace'
      }
    }
  ]
});

