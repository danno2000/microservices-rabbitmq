import {
  createContext,
  useContext,
  useState,
  FC,
  PropsWithChildren,
  useCallback,
} from 'react';

const DEFAULT_PAYLOAD = {
  id: 1,
  name: 'Dan Foley',
  email: 'dan@example.com',
  roles: ['admin', 'developer'],
  profile: {
    location: 'Berlin',
    interests: ['coding', 'music', 'travel', 'skiing'],
  },
};

const DEFAULT_STATE = {
  payload: JSON.stringify(DEFAULT_PAYLOAD, null, 3),
  services: {
    service1: false,
    service2: false,
  },
  response: {},
};

export type ServiceNames = keyof typeof DEFAULT_STATE.services;
type SetServiceSelection = (name: ServiceNames, checked: boolean) => void;
type SetResponse = (response: any) => void;
type SetPayload = (payload: string) => void;

type RequestStateContextType = {
  requestState: typeof DEFAULT_STATE;
  setPayload: SetPayload;
  setResponse: SetResponse;
  setServiceSelection: SetServiceSelection;
};

const RequestStateContext = createContext<RequestStateContextType | undefined>(
  undefined
);

export const RequestStateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [requestState, setRequestState] = useState(DEFAULT_STATE);

  const setPayload: SetPayload = useCallback((payload) => {
    setRequestState((state) => ({ ...state, payload }));
  }, []);

  const setServiceSelection: SetServiceSelection = useCallback(
    (name, checked) => {
      setRequestState((state) => ({
        ...state,
        services: { ...state.services, [name]: checked },
      }));
    },
    []
  );

  const setResponse: SetResponse = useCallback(
    (response) => setRequestState((state) => ({ ...state, response })),
    []
  );

  const value: RequestStateContextType = {
    requestState,
    setPayload,
    setResponse,
    setServiceSelection,
  };

  return (
    <RequestStateContext.Provider value={value}>
      {children}
    </RequestStateContext.Provider>
  );
};

type UseRequestState = () => RequestStateContextType;
export const useRequestState: UseRequestState = () =>
  useContext(RequestStateContext)!;

export default RequestStateProvider;
