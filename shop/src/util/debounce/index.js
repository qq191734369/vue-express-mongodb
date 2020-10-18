function vueDebounce(fn, wait) {
  let timeout = null;
  return function() {
    let args = arguments;
    if(timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, [...args])
    }, wait);
  }
}

export { vueDebounce }