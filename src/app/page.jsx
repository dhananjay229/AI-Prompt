import Feed from "@/components/Feed";
import Profile from "@/components/Profile";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promtopia is an open-source AI prompting tools for modern world tools
        descover, create and share creative prompts
      </p>
      <Feed />
      {/* <Profile />  */}
    </section>
  );
};

export default Home;
