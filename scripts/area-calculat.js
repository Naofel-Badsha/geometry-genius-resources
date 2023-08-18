
//======================-------------TriangleArea------------=======================//
function calculateTriangleArea(){
// get tringle base value....?
const baseFiled = document.getElementById('triangle-base');
const baseValueText =  baseFiled.value;
const base = parseFloat(baseValueText)
// console.log(base)

// get triangle height value.....?
const heightFiled = document.getElementById('triangle-height');
const heightValueText = heightFiled.value;
const height = parseFloat(heightValueText);

//------Calculate------Area------
const area = 0.5*base*height;

//---Show triangal area....
const areaSpan = document.getElementById('triangle-area');
areaSpan.innerText = area;
};


//======================-------------reactangleArea------------=======================//
function calculateReactangleArea(){
// get reactangle width value....?
  const widthField = document.getElementById('rectangle-width');
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);
  console.log(width);

// get reactangle length value.....?
  const lengthField = document.getElementById('rectangle-length');
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);
  console.log(length);

 //---------Valid Input: width and length -----------
 if(isNaN(width) || isNaN(length)){
  alert('Plese insart not a number');
  return;
 }



  //------Calculate------Area------
  const area = width*length;

  // shoe in dom an innerText......
  const reactangleAreaSpan = document.getElementById('rectangle-area');
  reactangleAreaSpan.innerText = area
};




//======================-------------ParallelogramArea------------=======================//
//-------Reussable function ---> reduce duplicate code ......?
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');

    const height = getInputValue('parallelogram-height');
    console.log(height)
    //---- Validation ------
    if(isNaN(base) || isNaN(height)){
      alert('Plese Insart a number');
      return;
    }
    const area = base * height;
    setElementInnerText('parallelogram-area', area);
}


//------------------EllipesArea---------------------------//
function calculateEllipesArea(){
  const majorRadius = getInputValue('ellipes-major-radius');
  const minorRadius = getInputValue('ellipes-minor-radius');
  const area = 3.14 * majorRadius * minorRadius;
  const areaTwoDasimal = area.toFixed(2);
  setElementInnerText('ellipes-area', areaTwoDasimal);
}
//------------------EllipesArea---------------------------//


//--- reusable get input value field in number......?
function getInputValue(filedId){
    inputField = document.getElementById(filedId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value; 
};


// reusable set span, p, div, etc text.....?
function setElementInnerText(elementId, area){
  const element = document.getElementById(elementId);
  element.innerText = area;
};


//------ add to calculate entry---------
/**
 * 1. get  the elementh where you want to add the daynamic HTML....?
 * 2. Craeat an elementh you want to add......?
 * 3. if needed add some class.....?
 * 4. set inner HTMl. it could be daybamic Template string.....?
 * 5. append the created elementh as a child of the parent.....?
 */
function addToCalculationEntey(areaType, area){
  console.log(areaType+ ' ' + area)
  const calculationEntry = document.getElementById('calculation-entry');

  const p = document.createElement('p');
  p.innerHTML = `${areaType} ${area} cm<sup>2</sup>`

  calculationEntry.appendChild(p);
}


//-------data validation-----------//
/**
 * 1. Set the proper type of input field . (number, data, email)....?
 * 2. Check type using type......?
 * 3. NaN means: Not a Number.  isNAN is chacking wheather the input is not a 
  number...?
 * 
 */