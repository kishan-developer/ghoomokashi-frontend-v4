import React from "react";
import Blog from "../../Components/HomePageComponent/Blog";
import Blog_Section from "./Blog_Com/Blog_Section";

function BlogPage() {
    return (
        <div className="w-full h-fit ">
            <div
                className="w-full h-[400px] bg-cover bg-center bg-no-repeat  flex items-center justify-center bg-fixed z-0 font-semibold text-[1.3rem] "
                style={{
                    backgroundImage:
                        "url(/banner/Ayodhya-Travels_1920X999_3.jpg)",
                }}
            >
                <div className=" w-[70%] py-10 flex flex-col items-start text-white gap-2  ">
                    <h2 className="font-semibold text-[20px] lg:text-[35px] border-b-5 border-[#e8464b] pr-10 py-2  ">
                        Blog{" "}
                    </h2>

                    {/* <button className="bg-[#e8464b] text-white rounded-lg px-5 py-2 cursor-pointer">Contact Now</button> */}
                </div>
            </div>
            {/* <div
        className="w-[full] h-[400px] bg-white flex items-center justify-center font-semibold text-[1.3rem]"
        style={{ backgroundImage: `url(/packages/Tr_1920-x-850.svg)` }}
      >

      </div> */}
            {/* <Blog /> */}
            <Blog_Section />
        </div>
    );
}

export default BlogPage;
