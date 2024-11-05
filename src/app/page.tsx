import Header from "@/components/header/Header";
import Celebrate from "@/components/sections/celebrate/Celebrate";
import GetStarted from "@/components/sections/get-started/GetStarted";
import StartGiving from "@/components/sections/start-giving/StartGiving";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <GetStarted />
        <StartGiving />
        <Celebrate />
      </main>
    </div>
  );
}
