import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

export default function Home() {
  return (
    <div>
        <Button variant="primary" disabled>Default</Button>
        <Button variant="destructive">Error</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="muted">Muted</Button>
        <Button variant="teritary">Teritary</Button>

        <Input />
    </div>
  );
}