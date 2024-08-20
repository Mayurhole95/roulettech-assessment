// import React from 'react';

// function MyComponent() {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//       <p>This is my first React component.</p>
//     </div>
//   );
// }

// export default MyComponent;

import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [helloMessage, setHelloMessage] = useState('');
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    // Fetch hello message from Django API
    fetch('http://localhost:8000/api/hello/')
      .then(response => response.json())
      .then(data => setHelloMessage(data.message));

    // Fetch current datetime from Django API
    fetch('http://localhost:8000/api/datetime/')
      .then(response => response.json())
      .then(data => setDateTime(data.current_datetime));
  }, []);

  return (
    <div>
      <h1>Message from Django: {helloMessage}</h1>
      <h2>Current Time: {dateTime}</h2>
    </div>
  );
}

export default MyComponent;