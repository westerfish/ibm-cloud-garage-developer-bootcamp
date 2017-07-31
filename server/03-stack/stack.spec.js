const makeStack = () => {
  let queue = [];
  let capacity = 3;
  const isEmpty = () => queue.length === 0;
  const setCapacity = (value) => {
    if (value < 0) throw new Error('accepts only positive capacity');
    capacity = value;
  };
  const pop = () => {
    if (queue.length === 0) throw new Error('Cannot pop when 0');
    return queue.pop();
  };
  const push = (element) => {
    if (queue.length === capacity) throw new Error('Cannot exceed capacity');
    queue.push(element);
  };
  const size = () => queue.length;
  return {
    isEmpty,
    setCapacity,
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
    }).should.throw('Cannot exceed capacity');
  });

  it('under-flows', () => {
    (() => {
      stack.pop();
    }).should.throw('Cannot pop when 0');
  });

  it('pops the same one pushed', () => {
    stack.push('AAA');
    stack.pop().should.equal('AAA');
  });

  it('pops the same two pushed', () => {
    stack.push('AAA');
    stack.push('BBB');
    stack.pop().should.equal('BBB');
    stack.pop().should.equal('AAA');
  });

  it('accepts only positive capacity', () => {
    (() => {
          stack.setCapacity(-3);
        }).should.throw('accepts only positive capacity');
  });
});
