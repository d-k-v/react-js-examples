import React from "react";
import ToolTip from "../components/tooltip";

function ToolTipExample(props) {
  return (
    <div>
      <div>
        <p>
          Risus nullam eget felis eget nunc lobortis. Aliquam ut porttitor leo
          a. Interdum velit euismod in pellentesque massa placerat duis. Platea
          dictumst vestibulum rhoncus est pellentesque. Nec tincidunt praesent
          semper feugiat. Ut etiam sit amet nisl purus in mollis nunc sed.
          Tellus rutrum tellus&nbsp;
          <span style={{ display: "inline-block" }}>
            <ToolTip toolTipText="This is inline tooltip">
              <span>hover over to see tooltip </span>
            </ToolTip>
          </span>
          &nbsp;pellentesque eu tincidunt tortor aliquam nulla facilisi. Viverra
          orci sagittis eu volutpat odio facilisis. Congue nisi vitae suscipit
          tellus. Sit amet luctus venenatis lectus. Congue quisque egestas diam
          in arcu cursus euismod quis. Nec feugiat in fermentum posuere urna.
          Aliquet enim tortor at auctor urna nunc id cursus. Condimentum vitae
          sapien pellentesque habitant. Convallis convallis tellus id interdum
          velit laoreet id donec. Id neque aliquam vestibulum morbi. Est lorem
          ipsum dolor sit amet consectetur adipiscing elit.
        </p>
        <ToolTip toolTipText="This is Tooltip detail" underlineText={false}>
          <span>hover over to see tooltip</span>
        </ToolTip>
        <p>
          Risus nullam eget felis eget nunc lobortis. Aliquam ut porttitor leo
          a. Interdum velit euismod in pellentesque massa placerat duis. Platea
          dictumst vestibulum rhoncus est pellentesque. Nec tincidunt praesent
          semper feugiat. Ut etiam sit amet nisl purus in mollis nunc sed.
          Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla
          facilisi. Viverra orci sagittis eu volutpat odio facilisis. Congue
          nisi vitae suscipit tellus. Sit amet luctus venenatis lectus. Congue
          quisque egestas diam in arcu cursus euismod quis. Nec feugiat in
          fermentum posuere urna. Aliquet enim tortor at auctor urna nunc id
          cursus. Condimentum vitae sapien pellentesque habitant. Convallis
          convallis tellus id interdum velit laoreet id donec. Id neque aliquam
          vestibulum morbi. Est lorem ipsum dolor sit amet consectetur
          adipiscing elit.
        </p>
      </div>
    </div>
  );
}

export default ToolTipExample;
