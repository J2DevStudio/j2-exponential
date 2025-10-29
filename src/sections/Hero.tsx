import robotImg from "@/assets/images/robot.jpg";
import underlineImage from "@/assets/images/underline.svg?url";
import Loader from "@/assets/images/loader.svg";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Orbit } from "@/components/Orbit";
import { Planet } from "@/components/Planet";

export const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="border-l border-r border-[var(--color-border)]">
          <div className="container py-24 md:py-36 lg:py-48 relative isolate overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
            <div className="absolute inset-0 -z-10"></div>
            <div className="absolute-center">
              <Orbit className="size-[350px]" />
            </div>
            <div className="absolute-center">
              <Orbit className="size-[600px]" />
            </div>
            <div className="absolute-center">
              <Orbit className="size-[850px]" />
            </div>
            <div className="absolute-center">
              <Orbit className="size-[1100px]" />
            </div>
            <div className="absolute-center">
              <Orbit className="size-[1350px]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-100 text-center leading-tight">
              Unlock the future of Agentive AI with{" "}
              <span className="relative">
                <span className="">Exponential</span>
                <span
                  className="absolute w-full left-0 top-full -translate-y-1/2 h-4 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-indigo-900))]"
                  style={{
                    maskImage: `url(${underlineImage.src})`,
                    maskSize: "contain",
                    maskPosition: "center",
                    maskRepeat: "no-repeat",
                  }}
                ></span>
              </span>
            </h1>
            <p className="text-center text-lg md:text-xl mt-10 lg:max-w-3xl md:max-w-xl max-w-sm mx-auto">
              Harness the power of Artificial Intelligence. Elevate your
              productivity and streamline your workflow with our new
              cutting-edge AI automation platform.
            </p>
            <div className="flex justify-center">
              <Button variant="secondary" className="mt-10">
                Start Chatting
              </Button>
            </div>
            <div className="relative isolate max-w-5xl mx-auto">
              <div className="absolute left-1/2 top-0">
                <Planet
                  size="lg"
                  color="violet"
                  className="-translate-x-[316px] -translate-y-[76px] rotate-135"
                />
                <Planet
                  size="lg"
                  color="violet"
                  className="translate-x-[334px] -translate-y-[188px] -rotate-135"
                />
                <Planet
                  size="sm"
                  color="fuchsia"
                  className="-translate-x-[508px] -translate-y-[372px] rotate-135"
                />
                <Planet
                  size="md"
                  color="teal"
                  className="translate-x-[488px] -translate-y-[342px] -rotate-135"
                />
              </div>
              <div className="absolute left-0 z-10 top-[30%] -translate-x-10 hidden lg:block">
                <div className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72">
                  <div>
                    Can you generate an incredible frontend dev video tutorial?
                  </div>
                  <div className="text-right text-gray-400/75 text-sm font-semibold">
                    1m ago
                  </div>
                </div>
              </div>
              <div className="absolute right-0 z-10 top-[50%] translate-x-10 hidden lg:block">
                <div className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72">
                  <div className="">
                    <strong>Exponential: &nbsp;</strong> I created one based on
                    highly-ranked videos found across YouTube.
                  </div>
                  <div className="text-right text-gray-400/75 text-sm font-semibold">
                    Just now
                  </div>
                </div>
              </div>
              {/* <div className="relative">  need this extra DIV because of the overflow-hidden containing the robot image and the planets bound to the top of the image - the folating elemetns are just outside it ^^^*/}
              <div className="relative flex mt-20 rounded-2xl border-2 overflow-hidden border-gradient">
                <Image src={robotImg} alt="Robot Image" />
                <div className="absolute bottom-2 md:bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 w-full max-w-xs px-4">
                  <div className="bg-gray-950/80 flex items-center gap-4 px-4 py-2 rounded-2xl w-[320]">
                    <Loader className="text-violet-400" />
                    <div className="font-semibold text-xl text-gray-100">
                      AI is working<span> | </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
