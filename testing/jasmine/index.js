let earth = {
  isRound: true,
  numberFromSun: 3,
  name: 'Emerson'
};

describe('Earth', () => {
  it('is round', () => {
    expect(earth.isRound).toBe(true);
  });
  it('is the third planet from the sun', () => {
    expect(earth.numberFromSun).toBe(3);
  });
  it('name is emerson', () => {
    expect(earth.name).toBe('Emerson');
  });
});

describe("Jasmine Matchers", () => {
  it('allows for === and deep equality', () => {
    expect(1+1).toBe(2);
    expect([1,2,3]).toEqual([1,2,3]);
  });
  it('allows for easy precision checking', () => {
    expect(3.1415).toBeCloseTo(3.14,2);
  });
  it('allows for easy truthy / falsy checking', () => {
    expect(0).toBeFalsy();
    expect([]).toBeTruthy();
  });
});

/*
// Matches 
  toBe/not.toBe
  toBeCloseTo
  toBeDefined
*/


// SPIES = mocks

function add(a, b, c) {
  return a + b + c;
}

describe('add', () => {
  let addSpy, result;
  beforeEach(() => {
    addSpy = spyOn(window, 'add');
    result = addSpy(1,2,3);
  });
  it('it can have params tested', () => {
    expect(addSpy).toHaveBeenCalled();
    expect(addSpy).toHaveBeenCalledWith(1,2,3);
  });
});


