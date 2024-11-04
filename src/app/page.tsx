import Header from "@/components/header/Header";
import GetStarted from "@/components/sections/get-started/GetStarted";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <GetStarted />
      </main>
    </div>
  );
}
