export function compareData (arr, propertyName) {
  arr.sort((a, b) => {
    return a[propertyName].localeCompare(b[propertyName]) // compares the strings
  })
}
