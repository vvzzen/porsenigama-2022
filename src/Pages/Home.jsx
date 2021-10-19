import { ContohSection } from "../Components/Home";

const Home = () => {
  return (
    <div className="min-h-screen text-center gap-y-32">
      <h1 className="font-bold pt-24 text-center text-5xl">Beranda</h1>
      <section>
        <ContohSection />
      </section>
    </div>
  );
};

export { Home };
