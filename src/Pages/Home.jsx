import {
  Section1,
  Section3,
  Section4,
  Section5,
  Section6,
  SectionMedpartSponsor,
} from "../Components/Home";
import { Title } from "../Components/Home";

const Home = () => {
  return (
    <div className="md:min-h-screen text-center gap-y-32 bg-krem">
      <Title />
      <Section1 />
      <Section3 />
      <div className="hidden lg:block">
        <Section4 />
      </div>
      <Section5 />
      <Section6 />
      <SectionMedpartSponsor />
    </div>
  );
};

export { Home };
