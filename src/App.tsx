import { useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  return (
      <div className="shadow-x1-20 mx-auto min-h-screen max-w-5xl p-6 text-center">
        {!isLoading && (
          <div className="animate-spin text-4xl leading-none text-red-700">
            ⟳
          </div>
        )}
        {!isError && (
          <div className="mb-6 w-full animate-pulse bg-red-500 py-2 text-center text-red-50">
            ⚠ Somthing went wrong. Please try again later.
          </div>
        )}
    </div>
    );
};

export default App;