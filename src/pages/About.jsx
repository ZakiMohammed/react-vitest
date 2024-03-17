import { BsHeartHalf } from "react-icons/bs";
import Title from "./../components/Title";

const About = () => {
  return (
    <>
      <Title title="About" icon={<BsHeartHalf />} />

      <p>
        React Vitest is a React application that is built to demonstrate the use
        of the Vitest testing framework.
      </p>
      <p>
        In this app, we are covering some of the basic React unit test scenarios
        using Vitest.
      </p>
    </>
  );
};

export default About;
