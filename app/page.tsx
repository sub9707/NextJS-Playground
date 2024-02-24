import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginButton from "../components/auth/login-button";
import "./page.css";
import Loading from "./loading";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-slate-950">
      <video autoPlay loop muted id="video" className="hidden lg:block">
        <source src="/assets/background.mp4" type="video/mp4" />
      </video>
      <div className="space-y-6 text-center z-10">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}>
          NextJS Playground
        </h1>
        <p id="subtitle" className="text-white text-lg pt-3 md:pt-0">
          NextJS - Next-auth - API 학습 공간
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              로그인
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
