import InboxContainer from "@/components/InboxContainer";
import NavSheet from "@/components/NavSheet";
import SkillsContainer from "@/components/CalendarContainer";
import ProjectsContainter from "@/components/ProjectsContainter";

export default function Home() {
  return (
    <main className="relative h-svh bg-orange-800">
      <div className="h-[100px] w-full bg-white">
        <NavSheet />
      </div>
      <div className="flex rounded-md bg-green-400 w-full h-2/5">
        <div className="static bg-pink-600 w-1/2 m-2">
          <InboxContainer />
        </div>
        <div className="inline-block bg-orange-950 w-1/2 m-2">
          <SkillsContainer />
        </div>
      </div>
      <div className="flex bg-green-600 h-1/4 w-full rounded-md">
        <div className=" bg-cyan-950 w-1/2 m-2">
        <ProjectsContainter/>
        </div>
          
        </div>
    </main>
  );
}
