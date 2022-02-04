import { useState } from "react";
// a functional component
// const Toggler = ({ foo }) => {
const Toggler = (props) => {
  // const [getState, setState] = useState(intialState)
  const [showThing, setShowThing] = useState(false);
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  const { title, optionalProp, numbers } = props;
  //props is just a js object
  // jsx
  const renderNumbers = () => {
    return numbers.map((n) => <p>{n * 2}</p>);
  };
  const toggleShowThing = () => {
    setShowThing(!showThing);
  };
  return (
    <div>
      {/* <button onClick={toggleShowThing}>toggle thing</button> */}
      <button onClick={() => setShowThing(!showThing)}>toggle thing</button>
      {showThing && <p>thing to toggle (could be a form)</p>}
      <h1>{title}</h1>
      {/* short circut evaultion (coding trick/hack) */}
      {/* conditional rendering */}
      {optionalProp && <p>optional: {optionalProp}</p>}

      <p> render number directyl in retrun</p>
      {numbers.map((n) => (
        <p>{n}</p>
      ))}
      <p> render number in a function</p>
      {renderNumbers()}
    </div>
  );
};

export default Toggler;