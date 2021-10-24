import { Section1, Section2, SectionMedpartSponsor } from "../Components/Home";
import { Title } from "../Components/Home";

const Home = () => {
  return (
    <div className="md:min-h-screen text-center gap-y-32 bg-krem">
      <Title />
      <Section1 />
      <Section2 />
      <SectionMedpartSponsor />
    </div>
  );
};

export { Home };
