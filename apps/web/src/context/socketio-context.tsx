import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
} from 'react';
import io, { ManagerOptions, Socket, SocketOptions } from 'socket.io-client';

export type SocketIOProviderProps = PropsWithChildren & {
  uri?: string;
  opts?: Partial<ManagerOptions & SocketOptions>;
};

const SocketIOContext = createContext(undefined);

export const SocketIOProvider: React.FC<SocketIOProviderProps> = ({
  uri,
  opts,
  children,
}) => {
  const socketRef = useRef<any>();
  if (!socketRef.current) {
    socketRef.current = io(uri, opts);

    // socketRef.current.on('connect', () =>
    //   socketRef.current.emit('message', 'Hello from Node client')
    // );

    // socketRef.current.on('message', (msg: any) =>
    //   console.log('Received:', msg)
    // );
  }

  return (
    <SocketIOContext.Provider value={socketRef.current}>
      {children}
    </SocketIOContext.Provider>
  );
};

type UseSocketIO = () => Socket;
export const useSocketIO: UseSocketIO = () => useContext(SocketIOContext)!;
