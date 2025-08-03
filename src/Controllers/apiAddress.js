// API Address configuration with fallback for different environments
const getApiAddress = () => {
  // Get API address from environment variable
  const envApiAddress = import.meta.env.VITE_API_ADDRESS;
  
  if (envApiAddress) {
    return envApiAddress;
  }
  
  // Fallback - always use HTTP for this API server
  return "http://194.233.67.229:443";
};

const apiAddress = getApiAddress();
export default apiAddress;
