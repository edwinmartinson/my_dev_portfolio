import { createContext, useContext, useReducer } from "react";

type InitialState = typeof initialState;

type ReducerAction =
  | { type: "toggleMenu"; payload: boolean }
  | {
      type: "position";
      payload: {
        pos: "posAboutMe" | "posProjects" | "posContactMe";
        val: number;
      };
    }
  | {
      type: "navActive";
      payload: boolean;
    };

const initialState = {
  showMenu: false,
  posAboutMe: 0,
  posProjects: 0,
  posContactMe: 0,
  isNavActive: false,
};

function reducer(state: InitialState, action: ReducerAction) {
  switch (action.type) {
    case "toggleMenu":
      return { ...state, showMenu: action.payload };

    case "position":
      return { ...state, [action.payload.pos]: action.payload.val };

    case "navActive":
      return { ...state, isNavActive: action.payload };

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

export function useSiteContext(context?: typeof SiteContext) {
  const state = useContext(context || SiteContext);

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
