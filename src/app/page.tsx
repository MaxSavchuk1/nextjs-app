import Header from "@/components/header/Header";
import GetStarted from "@/components/sections/get-started/GetStarted";
import StartGiving from "@/components/sections/start-giving/StartGiving";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <GetStarted />
        <StartGiving />
      </main>
    </div>
  );
}
