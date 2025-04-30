import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const APIDocs: React.FC = () => {
  return (
    <div style={{ width:"100%", height: "100vh",padding: "20px" }}>
      <SwaggerUI url="/swagger.json" />
    </div>
  );
};

export default APIDocs;
