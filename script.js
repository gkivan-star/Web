const sendIP = async () => {
    try {
      // Placeholder function - replace with actual IP retrieval logic
      const ipAddress = await getIPAddress();
  
      // Send IP Address to Server
      const response = await fetch('http://192.168.1.75:5000/ip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ipAddress: ipAddress,
        }),
      });
  
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log('Server response:', jsonResponse.message);
      } else {
        console.error('Failed to send IP address.');
      }
    } catch (error) {
      console.error('Error sending IP address:', error);
    }
  };
  
  // Placeholder function - replace with actual IP retrieval logic
  const getIPAddress = async () => {
    return '192.168.1.1'; // Replace with the actual method to get the device's IP address
  };
  