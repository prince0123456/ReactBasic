import React from "react";

//  function Greet() {
//   return (
//     <h1>Greet</h1>
//   )
// }
const Greet = (props) => {
  console.log(props);
  return (
    <>
      <h1>
        Hello {"  " + props.name}aka {props.heroNama}
      </h1>
      {props.children}
    </>
  );
};
export default Greet;
