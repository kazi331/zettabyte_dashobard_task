import ChartState from "@/components/pages/home/ChartState";
import ComponentErrorDemo from "@/components/pages/home/ComponentErrorDemo";
import ErrorHandleDemo from "@/components/pages/home/ErrorHandleDemo";
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
        <ErrorHandleDemo />
        <ComponentErrorDemo />
        <ChartState />
      </Container>
    </div>
  )
}
