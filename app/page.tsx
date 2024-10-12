import { Grid } from "@/components/grid";

const Home = () => {
  return (
    <main className="flex flex-col items-center gap-y-6 h-full px-4 py-10">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">
          Bored? Try something out!
        </h1>
        <p className="text-sm mt-2 text-neutral-700 font-medium">Click on the blocks below and get inspiration and ideas. If I inspired you to do something, tag me on X.</p>
      </div>
      <Grid />
    </main>
  )
};

export default Home;