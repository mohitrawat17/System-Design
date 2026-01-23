const getData = () => {
  console.log("caleed");
};

function debounce(fn, d) {
  let timer;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
}

const debouncedGetData = debounce(getData, 500);
debouncedGetData();
