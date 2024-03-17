import Logo from "../components/Logo";
import { NavLink } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div className="py-5 px-4 bg-dark-subtle rounded-4">
        <h1 className="mb-4">
          <Logo height={"60px"} />
          React Vitest
        </h1>
        <p className="lead">
          React Vitest is a React application that is built to demonstrate the
          use of the Vitest testing framework.
        </p>
        <hr />
        <p>
          In this app, we are covering some of the basic React unit test
          scenarios using Vitest.
        </p>
        <NavLink className="btn btn-info" to={"/about"}>
          <BsInfoCircle className="me-1" />
          Learn More
        </NavLink>
      </div>
    </>
  );
};

export default Home;
