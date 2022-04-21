import { useContext } from "react";
import { ContextAPI } from "./App";

export default function UserDetails() {
  const [state, setState] = useContext(ContextAPI);
  return (<>
    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>User Name</th>
        <th>Email</th>
      </tr>
      {state.data &&
        state.data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
          </tr>
        ))}
    </table>
    <div style={{ textAlign: "center" }}>
      <p>No of Rows: {state.data.length}</p>
    </div>
  </>
  );
}
