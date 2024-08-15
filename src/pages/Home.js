import { Link } from "react-router-dom";
import MainNav from "../components/MainNav";

function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
    </>
  );
}

export default HomePage;
