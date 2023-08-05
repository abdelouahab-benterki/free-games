// Fontawesome
import { faFire } from "@fortawesome/free-solid-svg-icons";

// Redux, Redux toolkit
import { useSelector } from "react-redux";

// Components
import PopularGamesList from "../components/PopularGamesList";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import SaveModal from "../components/SaveModal";

const Home = () => {
  const saveModal = useSelector((state) => state.saveModal.visible);

  return (
    <>
      <Hero />
      <section className="my-8">
        <div className="container">
          <SectionTitle title="popular games" icon={faFire} />
          <PopularGamesList />
          {saveModal && <SaveModal />}
        </div>
      </section>
    </>
  );
};
export default Home;
