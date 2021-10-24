import { Section1 , SectionMedpartSponsor } from '../Components/Home';
import { Title } from '../Components/Home'

const Home = () => {
  return (
    <div className="min-h-screen text-center gap-y-32 bg-krem">
      <Title />
      <Section1 />
      <SectionMedpartSponsor />
    </div>
  );
};

export { Home };
