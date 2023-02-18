const executed = {
  buffer: 100,
  last: 0,
};

export function isTimeValid() {
  const valid = performance.now() - executed.last > executed.buffer;
  executed.last = performance.now();
  return valid;
}
