import React from "react";

export default function Account(props) {
  React.useEffect(() => {
    var guid = "bf46ed97-3f56-e511-9458-0e0c69fd6629";
    var node = document.createElement("script");
    var nodeCurrent = document.getElementById("fmUserWidget");
    var nodeParent = nodeCurrent.parentNode;
    node.type = "text/javascript";
    node.async = true;
    node.src = "http://www.fitmetrix.io/js/fmUserWidget.js";
    nodeParent.insertBefore(node, nodeCurrent);
  }, []);

  //   React.useEffect(() => {
  //     const script = document.createElement("script");
  //     script.src = "http://www.fitmetrix.io/js/fmUserWidget.js";
  //     script.async = true;

  //     const node = document.getElementById("fmUserWidget");
  //     // document.insertBefore(script, node);
  //     //   document.body.appendChild(script);
  //     // return () => {
  //     //   document.body.removeChild(script);
  //     // };
  //   }, []);

  return (
    <div className="relative pt-20">
      <div className="absolute pt-20"></div>
      <div id="fmUserWidgetContent" />
    </div>
  );
}
