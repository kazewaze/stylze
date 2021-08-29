import React from 'react';

export function buildElement(tag, classOrId, children, eventHandler=undefined) {
    if (classOrId[0] === '#')
      var styleType = {id: classOrId.slice(1, classOrId.length)};
    else if (classOrId[0] === '.')
      var styleType = {class: classOrId.slice(1, classOrId.length)};
    else
      var styleType = {style: classOrId};

    if (eventHandler) {
      var props = Object.assign(styleType, {onClick: () => eventHandler()});
      return React.createElement(tag, props, children);
    } else
      return React.createElement(tag, styleType, children);
}

export function styling(style) {
    switch (style) {
      case ('h1-1-em'):
        return {
          color: '#282C34',
          fontSize: `${4}em`
        }
      case ('h1-2-em'):
        return {
          color: '#282C34',
          fontSize: `${3}em`
        }
      case ('h1-3-em'):
        return {
          color: '#282C34',
          fontSize: `${2}em`
        }
      case ('h1-1-px'):
        return {
          color: '#282C34',
          fontSize: `${54}px`
        }
      case ('h1-2-px'):
        return {
          color: '#282C34',
          fontSize: `${43}px`
        }
      case ('h1-3-px'):
        return {
          color: '#282C34',
          fontSize: `${32}px`
        }
      case ('button-1-sm'):
        return {
          color: '#61DAFB',
          backgroundColor: '#282C34',
          fontSize: `${14}px`,
          border: 'none',
          borderRadius: `${3}px`,
          padding: `${7}px`
        }  
      case ('button-1-md'):
        return {
          color: '#ffffff',
          backgroundColor: '#111111',
          fontSize: `${20}px`,
          fontWeight: 350,
          border: `${1}px solid #111111`,
          borderRadius: `${3.5}px`,
          paddingTop: `${7}px`,
          paddingBottom: `${7}px`,
          paddingLeft: `${14}px`,
          paddingRight: `${14}px`
        }
      case ('button-1-lg'):
        return {
          color: '#61DAFB',
          backgroundColor: '#282C34',
          fontSize: `${33}px`,
          border: 'none',
          borderRadius: `${3}px`,
          padding: `${7}px`
        }  
      case ('a-1-sm'):
        return {
          color: '#61DAFB',
          fontSize: `${23}px`,
          border: 'none',
          padding: `${7}px`
        } 
      default:
        return {
          color: '#282C34',
          fontSize: `${33}px`
        }
    }
  }

  function getTypeOfTag(element) {
    var typeOfTag = [];
    for (var y = 0; element[y] !== '-'; y++) {
      typeOfTag.push(element[y]);
    }
    return typeOfTag.join('');
  }

// override allows you to override pre-existing styles.
export default function stylze(element, children, override={}) { // h1-1-px ---> heading1-style1-pixelSizing
  var styles = styling(element), tag = getTypeOfTag(element);

  if (override !== {}) {
    var newStyles = Object.assign({}, styles, override);

    if (override.eventHandler)
      return buildElement(tag, newStyles, children, override.eventHandler); // Add EventHandler.
    else
      return buildElement(tag, newStyles, children); // Add custom styles.
  }  

  return buildElement(tag, styles, children);
}