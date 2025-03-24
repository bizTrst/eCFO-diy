import React from 'react';

    const App = () => {
      return (
        <div className="flex flex-col h-screen">
          <div className="flex-1 p-4 bg-gray-100">
            <h1 className="text-2xl font-bold">AI-Powered CFO Dashboard</h1>
            <div className="mt-4">
              <h2 className="text-xl">Key Financial Metrics</h2>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="p-4 border rounded shadow">
                  <h3>Current Cash Flow</h3>
                  <p>Placeholder for cash flow data</p>
                </div>
                <div className="p-4 border rounded shadow">
                  <h3>Profit Margin</h3>
                  <p>Placeholder for profit margin data</p>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-xl">Charts/Graphs</h2>
                <div className="h-48 border rounded shadow mt-2">
                  Placeholder for charts/graphs
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white border-t">
            <div className="h-64 overflow-y-auto border rounded shadow">
              <div className="p-2">Conversation history will be displayed here.</div>
            </div>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Ask your CFO"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>
      );
    };

    export default App;
