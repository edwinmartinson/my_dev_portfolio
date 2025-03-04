import { createContext, useContext, useReducer } from "react";

type InitialState = typeof initialState;

type ReducerAction = {
  type: "toggleMenu" | "new";
  payload?: any;
};

const initialState = {
  showMenu: false,
};

function reducer(state: InitialState, action: ReducerAction) {
  const { type, payload } = action;

  switch (type) {
    case "toggleMenu":
      return { ...state, showMenu: !state.showMenu };

    default:
      throw new Error("Invalid action type");
  }
}

type SiteContextType = {
  state: InitialState;
  dispatch: React.Dispatch<ReducerAction>;
};

export const SiteContext = createContext<SiteContextType | undefined>(
  undefined
);

export function useSiteContext(context: typeof SiteContext) {
  const state = useContext(context);

  if (state === undefined) {
    throw new Error("SiteContextProvider not setup.");
  }

  return state;
}

export function SiteContextProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <SiteContext.Provider value={{ state, dispatch }}>
      {children}
    </SiteContext.Provider>
  );
}
