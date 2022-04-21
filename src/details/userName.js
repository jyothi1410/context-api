import { useContext } from "react";
import { ContextAPI } from "../App";

export default function UserName() {
    const [state, setState] = useContext(ContextAPI);

    const handleSubmit = () => {
        let data = [...state.userNames, state.name]
        setState(state => ({ ...state, userNames: data }))
    }
    return (<>
        <input value={state.name} onChange={(e) => setState(state => ({ ...state, name: e.target.value }))} />
        <button onClick={handleSubmit} >Submit</button>
    </>
    );
}
