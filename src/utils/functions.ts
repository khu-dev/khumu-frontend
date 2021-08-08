export const wrapPromise = (promise) => {
  let status = 'pending';
  let result;
  let suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    },
  );
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
};

export const getRandomNumber = (min: number, max: number, count: number) => {
  let picks = [];

  for (let i = 0; i < count; i++) {
    let picked = Math.ceil(Math.random() * (max - min) + min);

    const exist = picks.find((num) => num === picked);
    if (exist) picked < max ? picked++ : picked--;

    picks.push(picked);
  }

  return picks;
};
