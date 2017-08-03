import {replace, when, verify} from '../../test-helper';

describe.only('fetch', () => {
  it('canary_test_shows_the_infrastructure_works', () => {
    true.should.be.true();
  });
  it('orchestrates months and api', () => {
    const months = replace('./months');
    const api = replace('./api').api;

    let fetch;

    when(months.current()).thenReturn('currentMonth');
    when(months.prior()).thenReturn('priorMonth');
    when(api('user-id', 'priorMonth', 'currentMonth')).thenReturn('payments');

    fetch = require('./fetch').fetch;

    fetch('user-id').should.deepEqual('payments');
  });

});
