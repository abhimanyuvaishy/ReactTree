import React from 'react';

const Child=(props)=>{
    debugger;
    let style={...props.style};
    style.paddingLeft=style.paddingLeft+"px";
  return <div style={style}>
      {props.childNode.name}
  </div>
}

export default Child;  