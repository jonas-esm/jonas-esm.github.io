import { technologies } from "../constants";
import useMediaMatches from "../hooks/useMediaMatches";
import { BallCanvas } from "./canvas";
import SectionWrapper from "./hoc";

const Tech = () => {
  const { isMatch } = useMediaMatches({ breakpoint: 600 });

  const shouldHideTech = (tech) => {
    return tech.hideOnMobile && isMatch;
  };

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech, ind) =>
        shouldHideTech(tech) ? null : (
          <div className="w-28 h-28" key={ind}>
            <BallCanvas icon={tech.icon} />
          </div>
        )
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "teck");
