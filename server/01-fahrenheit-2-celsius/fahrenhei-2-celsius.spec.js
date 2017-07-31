describe('the fahrenheit2celsius canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  function fahrenheit2celsius(number){
    // Deduct 32, then multiply by 5, then divide by 9
    return (number - 32) * 5 / 9;
  }

  describe('fahrenheit2celsius should', () => {
    it('give 0°C for 32°F', () => {
      fahrenheit2celsius(32).should.equal(0);
    });
    it('give 10°C for 50°F', () => {});
  });
});

