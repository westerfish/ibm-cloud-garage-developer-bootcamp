const makeStack = () => {
  let queue = 0;
  const isEmpty = () => queue === 0;
  const pop = () => {
    if (queue === 0) throw new Error('Cannot pop when 0');
    queue--;
  };
  const push = () => {
    if (queue === 3) throw new Error('Cannot exceed 3');
    queue++;
  };
  const size = () => queue;
  return {
    isEmpty,
    pop,
    push,
    size
  };
};
let stack;

describe.only('the stack spec', () => {
  beforeEach(() => {
    stack = makeStack();
  });
  it('starts empty', ()=>{
    stack.isEmpty().should.be.true();
  });
  it('starts with stack size 0', () => {
     stack.size().should.equal(0);
  });
  it('is not empty when pushed', () => {
    stack.push();
    stack.isEmpty().should.be.false();
  });
  it('leaves stack size 1 when pushed', () => {
    stack.push();
    stack.size().should.equal(1);
  });
  it('leaves stack empty when pushed and popped', () => {
    stack.push();
    stack.pop();
    stack.isEmpty().should.be.true();
  });

  it('leaves stack size 0 when pushed and popped', () => {
    stack.push();
    stack.pop();
    stack.size().should.equal(0);
  });

  it('overflows', () => {
    stack.push();
    stack.push();
    stack.push();
    (() => {
      stack.push();
    }).should.throw('Cannot exceed 3');
  });

  it('under-flows', () => {
    (() => {
      stack.pop();
    }).should.throw('Cannot pop when 0');
  });

  it('pops the same one pushed');

  it('pops the same two pushed');

  it('accepts only positive capacity');
});
