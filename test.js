function Foo() {
  if (!new.target) throw new Error('Call with new');

  return {};
}

const foo = new Foo();
console.log(foo);
