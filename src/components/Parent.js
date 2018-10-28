import React from "react";
import Child from "./Child";

const Parent = props => {
  let renderedNode=[];
  let style={
    paddingLeft:15,
    backgroundColor:"greenyellow"
  }
  function renderTree(Node){
      let chil=props.data.filter(x=> x.pid===Node.id);
      renderedNode=[...renderedNode,...chil];
  return(
    <React.Fragment>
    <Child key={Node.id} childNode={Node} style={style} />
    {chil.length>0 && chil.map(element => {
          style.paddingLeft+=5;
          //style.backgroundColor="blue";
       return renderTree(element)
    })}
    </React.Fragment>
    )
  }

  const tree = props.data.map(Node => {
    if(renderedNode.indexOf(Node)==-1){
    const childerns=props.data.filter((item)=> item.pid===Node.id);
    renderedNode=[...renderedNode,...childerns];
      return (
        <div>
          <div className="parent">{Node.name}</div>
          {childerns.map(element => {
            style.paddingLeft=15;
             return renderTree(element)
          })}
        </div>
      )}

  });

  return <React.Fragment>{tree}</React.Fragment>;
};

export default Parent;
