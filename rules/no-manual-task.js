/**
 * Rule that reports manual tasks being used.
 */
module.exports = function(utils) {

  var is = utils.is;

  function check(node, reporter) {
    if (is(node, 'bpmn:ManualTask')) {
      reporter.report(node.id, 'Element has disallowed type bpmn:ManualTask');
    }
  }

  return {
    check: check
  };
};
