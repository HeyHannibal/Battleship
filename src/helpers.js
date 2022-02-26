function make(type) {
  const element = document.createElement(type);
  function setId(id) {
    if (id !== '' && id !== undefined) element.setAttribute('id', id);
  }
  function setClass(cssClass) {
    if (cssClass !== '' && cssClass !== undefined) element.setAttribute('class', cssClass);
  }
  function addText(textContent) {
    if (textContent !== undefined) element.textContent = textContent;
  }
  function appendElement(appendTo) {
    if (appendTo !== undefined && appendTo != '') appendTo.append(element);
  }
  function setSrc(src) {
    if (src !== undefined) element.src = src;
  }
  const returnElement = () => element;
  return {
    addText, setId, setClass, setSrc, appendElement, returnElement,
  };
}

export function elementFactory(type, appendTo, id, cssClass, textContent, src) {
  const element = make(type);
  element.appendElement(appendTo);
  element.addText(textContent);
  element.setId(id);
  element.setClass(cssClass);
  element.setSrc(src);
  return element.returnElement();
}

export function textFactory(type, textContent, appendTo, id, cssClass) {
  const text = make(type);
  text.addText(textContent);
  text.appendElement(appendTo);
  text.setId(id);
  text.setClass(cssClass);
  return text.returnElement();
}

export function divFactory(id, cssClass, appendTo) {
  const newDiv = make('div');
  newDiv.setId(id);
  newDiv.setClass(cssClass);
  newDiv.appendElement(appendTo);
  return newDiv.returnElement();
}

export function qsel(element) {
  return document.querySelector(element);
}
export function qsela(element) {
  return document.querySelectorAll(element)
}

export function remove(element) {
  qsel(element).remove()
}

export function disable(element, dis) {
  if(dis === true) qsel(element).classList.add('disabled')
  else qsel(element).classList.remove('disabled')
}

/// wait till true
let sleep = ms => new Promise(r => setTimeout(r, ms));
export async function waitFor(f){
        while(!f()) await sleep(1000);
        return f();
    };
    
