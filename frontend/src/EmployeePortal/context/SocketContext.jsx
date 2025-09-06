import React, { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const newSocket = io(import.meta.env.VITE_SOCKET_URL || 'http://localhost:3000', {
      withCredentials: true,
    });

    newSocket.on('connect', () => {
      setIsConnected(true);
      console.log('Connected to server');
    });

    newSocket.on('disconnect', () => {
      setIsConnected(false);
      console.log('Disconnected from server');
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  const joinMeeting = (meetingId) => {
    if (socket) {
      socket.emit('join-meeting', meetingId);
    }
  };

  const leaveMeeting = (meetingId) => {
    if (socket) {
      socket.emit('leave-meeting', meetingId);
    }
  };

  const sendMessage = (room, message) => {
    if (socket) {
      socket.emit('send-message', { room, message });
    }
  };

  const value = {
    socket,
    isConnected,
    joinMeeting,
    leaveMeeting,
    sendMessage,
  };

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  );
};
