
import React, { useState } from "react";
import Notification from "./Notification";

const Confirmation = (props) => {
// TODO your code here

return (
<div>
<Notification className={props.type}
message={props.message} >
<button className="btn btn-primary" onClick={props.accept}>Yes</button><br/>
<button className="btn btn-danger" onClick={props.decline} >No</button>
</Notification>
</div>
);
};

export default Confirmation