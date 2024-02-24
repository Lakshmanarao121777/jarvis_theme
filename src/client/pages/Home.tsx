import * as React from "react";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    console.log(props, 'home')
  return <div>home</div>;
};

export default Home;
