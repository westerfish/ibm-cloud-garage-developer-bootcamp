describe('the palindrome canary spec', () => {
    it('shows the infrastructure works', () => {
      true.should.be.true();
    });
    function checkPalidrome(text) {
      var left = 0;
      var right = text.length - 1;
      while (left < right) {
        if (text[left++] !== text[right--]) {
          return false;
        }
      }
      return true;
    }
    describe('a palindrome should', () => {
      it('be the same backwards and forwards', () => {
        checkPalidrome('ABCD').should.be.false();
      });
    });
});
