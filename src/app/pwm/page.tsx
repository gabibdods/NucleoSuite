import { getSystemDetails } from "@/lib/system";
import Controls from "@/components/controls"

export default async function Home() {
  const systemInfo = await getSystemDetails();

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Raspberry Pi</h1>

      <Controls />

    </main>
  );
}