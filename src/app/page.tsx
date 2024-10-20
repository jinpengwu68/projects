import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="w-full max-w-md flex-col gap-4">
        <h1 className="text-center text-2xl font-bold">Create App</h1>
        <Input name="name" placeholder="App name"></Input>
        <Textarea name="description" placeholder="Description"></Textarea>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
