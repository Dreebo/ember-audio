import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:audio', 'Unit | Controller | audio', {
  needs: [
    'service:consts',
    'service:api-request'
  ]
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
