import React from "react";
import ToolTip from "../components/tooltip";

function ToolTipExample(props) {
  return (
    <div>
      <div>
        <p>
          <div style={{ fontWeight: "bold" }}>
            The Exploration of Mars: Unveiling the Red Planet's Mysteries:
          </div>
          <br /> For centuries, the allure of Mars has captivated the human
          imagination. From ancient civilizations speculating about its
          potential inhabitants to modern-day scientists sending robotic
          emissaries to study its surface, the Red Planet continues to be a
          focal point of scientific inquiry. The past few decades have seen
          remarkable advancements in our understanding of Mars, thanks to
          spacecraft like the Mars rovers and orbiters.&nbsp;
          <span style={{ display: "inline-block" }}>
            <ToolTip toolTipText="This is inline tooltip">
              <span>hover over to see tooltip </span>
            </ToolTip>
          </span>
          &nbsp;These missions have unveiled a world with an intriguing history,
          showcasing evidence of liquid water in the past and geological
          features that hint at a complex past. As humanity's curiosity grows,
          discussions about potential manned missions to Mars are gaining
          momentum, promising a new era of exploration that could lead to
          profound insights into the history of our solar system and the
          potential for extraterrestrial life.
        </p>
        <ToolTip toolTipText="This is Tooltip detail" underlineText={false}>
          <span>hover over to see tooltip</span>
        </ToolTip>
        <p>
          <div style={{ fontWeight: "bold" }}>
            The Rise of Renewable Energy: Shaping a Sustainable Future
          </div>
          <br />
          The global shift towards renewable energy sources marks a pivotal
          moment in humanity's efforts to combat climate change and build a
          sustainable future. Solar, wind, hydroelectric, and other clean energy
          technologies have rapidly advanced, proving their viability not only
          as alternatives to fossil fuels but as economically viable options as
          well. The plummeting costs of solar panels and wind turbines, coupled
          with breakthroughs in energy storage systems, have propelled the
          adoption of renewables to unprecedented levels. This transition isn't
          just about reducing greenhouse gas emissions; it's also about
          reshaping economies, creating jobs, and empowering communities to
          generate their own energy. As governments, businesses, and individuals
          increasingly embrace renewable energy, there's a tangible sense of
          optimism that we are laying the foundation for a cleaner, greener, and
          more sustainable planet.
        </p>
      </div>
    </div>
  );
}

export default ToolTipExample;
