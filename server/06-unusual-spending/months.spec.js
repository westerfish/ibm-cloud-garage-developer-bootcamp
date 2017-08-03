import {replace, when, verify} from '../../test-helper';

describe.only('fetch', () => {
  it('canary_test_shows_the_infrastructure_works', () => {
    let date = new Date(2012, 01, 31); // 2012-01-31
    //date.setMonth(date.getMonth() - 1); // This gets 2012-03-02
    console.log(date.getMonth());
    console.log(date.getMonth() - 1);
    true.should.be.true();
  });

});
