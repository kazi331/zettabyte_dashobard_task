import ChartState from "@/components/pages/home/ChartState";
import Overview from "@/components/pages/home/Overview";
import Stats from "@/components/pages/home/Stats";
import Welcome from "@/components/pages/home/Welcome";
import Container from "@/components/shared/Container";

export default function Home() {
  return (
    <div className="py-10 bg-slate-100">
      <Container>
        <Welcome />
        <Stats />
        <Overview />
        <ChartState />
      </Container>
    </div>
  )
}
