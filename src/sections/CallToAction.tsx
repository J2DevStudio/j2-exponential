import { Button } from "@/components/Button";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";
import underlineImage from "@/assets/images/underline.svg?url";
import { Orbit } from "@/components/Orbit";
import { Planet } from "@/components/Planet";

export const CallToAction = () => {
  return (
    <section id="callToAction">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent className="relative isolate">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
            <div className="absolute inset-0 -z-10">
              <Orbit className="size-[200px] absolute-center" />
              <Orbit className="size-[350px] absolute-center" />
              <Orbit className="size-[500px] absolute-center" />
              <Orbit className="size-[650px] absolute-center" />
              <Orbit className="size-[800px] absolute-center" />
            </div>

            <div className="absolute-center -z-10">
              <Planet
                size="lg"
                color="violet"
                className="-translate-x-[200px] translate-y-[200px] rotate-45"
              />
              <Planet
                size="lg"
                color="violet"
                className="translate-x-[200px] -translate-y-[200px] -rotate-135"
              />
              <Planet
                size="md"
                color="teal"
                className="-translate-x-[500px] rotate-90"
              />
              <Planet
                size="md"
                color="teal"
                className="translate-x-[500px] -translate-y-[100px] -rotate-135"
              />
              <Planet
                size="sm"
                color="fuchsia"
                className="-translate-x-[400px] -translate-y-[250px] rotate-135"
              />
              <Planet
                size="sm"
                color="fuchsia"
                className="translate-x-[400px] translate-y-[150px] -rotate-45"
              />
            </div>

            <h2 className="text-gray-200 font-semibold text-3xl md:text-4xl lg:text-5xl lg:max-w-3xl lg:mx-auto text-center leading-tight relative px-14">
              Join the AI Revoluton with{" "}
              <span className="relative isolate">
                <span>Exponential</span>
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
            </h2>
            <p className="text-center text-xl mt-8 max-w-3xl mx-auto">
              Experience the transformative power of AI with Exponential. Boost
              your productivity and streamline your workflow with our innovate
              AI automation platform.
            </p>
            <div className="flex justify-center mt-10">
              <Button variant="secondary">Get Started</Button>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default CallToAction;
