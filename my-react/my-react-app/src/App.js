// import React, { Suspense } from 'react';
// import Example from './components/Hooks';

// const Welcome = React.lazy(() => import('./components/Welcome'));
// const NumberList = React.lazy(() => import('./components/NumberList'));
// const NameForm = React.lazy(() => import('./components/NameForm'));

// function App() {
//   return (
//     <div className="App">
//       <Suspense fallback={<div>Loading...</div>}>
//         <header>
//           <Welcome name="WangJiChao" />
//           <NumberList />
//           <NameForm />
//           <Example />
//         </header>
//       </Suspense>
//     </div>
//   );
// }

// export default App;

import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>This is React App.</h1>
    </div>
  );
}

export default App;
