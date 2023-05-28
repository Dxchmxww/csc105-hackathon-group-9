import { Link } from "react-router-dom";

export default function NotFound() {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100vh", color: "white" }}>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link style={{color: "white"}} to="/home">Home</Link>
    </div>
  
    )
}