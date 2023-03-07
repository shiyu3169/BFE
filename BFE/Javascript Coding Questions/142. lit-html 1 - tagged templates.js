function html(strings, ...values) {
  return strings.map((str, i) => `${str}${values[i] ?? ''}`).join('')
}

// render the result from html() into the container
function render(result, container) {
  container.innerHTML = result
}
