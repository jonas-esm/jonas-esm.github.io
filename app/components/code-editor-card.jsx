import React from "react";

export const CodeEditorCard = () => {
  return (
    <div
      class={` code-editor bg-[#272822] rounded-lg w-[300px] overflow-hidden z-40 
mt-[140px] max-w-7xl  h-[300px]`}
    >
      <div class="code-toolbar bg-[#1e1e1e] p-2 flex items-start">
        <button class="toolbar-btn bg-none border-none color-[#d3d3d3] text-[18px] cursor-pointer ml-2 rounded-full bg-red-500 w-3 h-3" />

        <button class="toolbar-btn bg-none border-none color-[#d3d3d3] text-[18px] cursor-pointer ml-2 rounded-full bg-green-500 w-3 h-3" />

        <button class="toolbar-btn bg-none border-none color-[#d3d3d3] text-[18px] cursor-pointer ml-2 rounded-full bg-yellow-500 w-3 h-3" />
      </div>
      <div class="code-content p-3 pt-8 flex  text-[#d3d3d3] ">
        <pre className="m-0">
          <code>
            <span class="tag text-[#569cd6]">&lt;!DOCTYPE html&gt;</span>
            <br />
            <span class="tag text-[#569cd6]">&lt;html&gt;</span>
            <br />
            <span class="tag text-[#569cd6] ml-4">&lt;body&gt;</span>
            <br />
            <span class="element text-[#dcdcaa] ml-8">&lt;h1&gt;</span>
            <span class="text text-[#ce9178]">Hi, I'm Anas.</span>
            <span class="element text-[#dcdcaa] ">&lt;/h1&gt;</span>
            <br />
            <span class="element text-[#dcdcaa] ml-8">&lt;p&gt;</span>
            <span class="text text-[#ce9178]"> Say hi to me using </span>
            <br />
            <span class="ml-8 text text-[#ce9178]"> The contact form</span>
            <br />
            <span class="ml-8 text text-[#ce9178]">
              In the bottom of the page.
            </span>
            <span class="element text-[#dcdcaa] ">&lt;/p&gt;</span>
            <br />
            <span class="tag text-[#569cd6] ml-4">&lt;/body&gt;</span>
            <br />
            <span class="tag text-[#569cd6]">&lt;/html&gt;</span>
            <br />
            {/* {`<button 
onClick={()=>
sendRequirements() }>
Hire Anas
</button>`} */}
          </code>
        </pre>
      </div>
    </div>
  );
};
