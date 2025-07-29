//app-> page is the homepage 
import CompanionCard from "@/components/CompanionCard";
import Cta from "@/components/CTA";
import { Button } from "@/components/ui/button";
import CompanionsList from "@/components/CompanionsList";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl  ">Popular Companions</h1>

      <section className="home-section ">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="NeuroScience"
          duration={45}
          color="#e5d0ff"
        />
        <CompanionCard
          id="456"
          name="Number Wizard"
          topic="Derivatives and Calculus"
          subject="NeuroScience"
          duration={45}
          color="#d0g8gk"
        />
        <CompanionCard
          id="789"
          name="Verba the Vocab Master"
          topic="Language"
          subject="English"
          duration={45}
          color="#e5d0df"
        />
      </section>

      <section className="home-section">
        <CompanionsList />
        <Cta />
      </section>

      <Button>Nyaa</Button>
    </main>
  );
};

export default Page;
