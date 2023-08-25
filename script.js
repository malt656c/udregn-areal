function calculateArea() {
  function setHeight() {
    let height = document.querySelector("input[name='height']").value;
    console.log(height)
    return height;
  }
  function setWidth() {
    let width = document.querySelector("input[name='width']").value;
    console.log(width)
    return width;
  }
  let areaSQM = setHeight() * setWidth();
console.log(areaSQM)
  document.querySelector("h1").textContent = areaSQM + " m²"
  let areaFT = areaSQM * 10.7639104;
  document.querySelector("h2").textContent = areaFT.toFixed(2) + " ft²"
}
