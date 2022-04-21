import { useContext } from "react";
import { ContextAPI } from "../App";

export default function UserCount() {
    const [state, setState] = useContext(ContextAPI);
    return (<> Total Users Count-{state.userNames.length}</>
    );
}
