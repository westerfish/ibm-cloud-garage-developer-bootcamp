describe('the canary spec', () => {
  it.only('shows the infrastructure works', () => {
    true.should.be.true('this is my custom diagnostic message');
  });
});
