/**
 * Rule that reports missing targetNamespace on bpmn:Definitions.
 */
module.exports = function(utils) {

  var is = utils.is;

  function check(node, reporter) {
    if (is(node, 'bpmn:Definitions') && !node.targetNamespace) {
      reporter.report(node.id, 'Element is missing targetNamespace');
    }
  }

  return {
    check: check
  };
};
