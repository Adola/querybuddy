class query{
  constructor(){

  }

  static one(elementType, selectorValue, parent = document, selectorType = 'id'){
     const isById = selectorType == 'id';

     return isById ? parent.getElementById(selectorValue)
                   : parent.querySelector(`${elementType}[${selectorType}="${selectorValue}"]`);
  }
  static oneLike(elementType,selectorValue, parent = document, selectorType = 'id'){
     return parent.querySelector(`${elementType}[${selectorType}*="${selectorValue}"]`);
  }
  static all(elementType,selectorValue, parent = document, selectorType = 'id'){
     const isByClass = selectorType == 'class';

     return isByClass ? [...parent.getElementsByClassName(selectorValue)]
                      : [...parent.querySelectorAll(`${elementType}[${selectorType}="${selectorValue}"]`)];
  }
  static allLike(elementType,selectorValue, parent = document, selectorType = 'id'){
    return [...parent.querySelectorAll(`${elementType}[${selectorType}*="${selectorValue}"`)];
  }
  static component(elementType, parent = document){
    return [...parent.getElementsByTagName(elementType)].shift();
  }
  static allComponent(elementType,parent=document){
    return [...parent.getElementsByTagName(elementType)];
  }

  static getData(element,name){
    return element.getAttribute(`data-${name}`);

  }
  static setData(element,name,value){
    return element.setAttribute(`data-${name}`,value);
  }
  
}

module.exports.domQuery;