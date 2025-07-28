//app-> page is the homepage 
import React from "react";
import { Button } from "@/components/ui/button";
const Page = () => {
  return (
    <div>
      <h1 className="text-2xl  ">Popular Companions</h1>
      <section className="home-section">
        {/* <CompanionCard/>
        <CompanionCard/>
        <CompanionCard/> */}
      </section>
      <Button>Nyaa</Button>
    </div>
  );
};

export default Page;
