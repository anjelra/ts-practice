import React from 'react';
// import ReducerSample from './ReducerSample';
import MyForm from './MyForm';

function App() {
  const onSubmit = (form: {name: string; description: string}) => {
    console.log(form);
  }

  return (
    <MyForm onSubmit = {onSubmit}/>
  );
}

export default App;

// function App () {
//   return (
//     <ReducerSample/>
//   );
// }

// export default App;





