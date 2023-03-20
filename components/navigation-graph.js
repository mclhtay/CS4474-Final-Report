import React, {useState, useEffect} from 'react';
import ReactFlow from 'reactflow';
const graphData = require("../data/graph.json");

export default function NavigationGraph() {
  const [curId, updateCurId] = useState("login-default");
  const [imageClassName, updateImageClassName] = useState("navigation-image-slide");
  
  useEffect(() => {
    if(imageClassName){
      const timeout = setTimeout(() => {
        updateImageClassName(undefined);
      }, 1000)
      return () => clearTimeout(timeout);
    }
  }, [imageClassName])
  const imageUrl = `./static/images/states/${curId}.png`;

  function handleNodeClick(id){
    updateCurId(id);
    updateImageClassName("navigation-image-slide")
  }

  return (
    <React.Fragment>
    <div style={{display: 'flex', width:"100%", justifyContent: 'center'}}>
      <div style={{ width: '750px', height: '600px' }}>
        <ReactFlow
          nodes={graphData.nodes}
          edges={graphData.edges}
          onNodeClick={(e, node) => {handleNodeClick(node.id)}}
          draggable={false}
          nodesConnectable={false}
          edgesFocusable={false}
          nodesDraggable={false}
          selectNodesOnDrag={false}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnDoubleClick={false}
        />
      </div>
      <div style={{position: "relative"}}>
        <div style={{
          width: "600px", height: "600px", position: "absolute",
          left: 0
          }}>
          <img 
          className={imageClassName}
          src={imageUrl} alt={curId} />
        </div>
      </div>

    </div>
    </React.Fragment>
  );
}