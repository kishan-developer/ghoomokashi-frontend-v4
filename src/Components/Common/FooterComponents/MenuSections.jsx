import React, { Suspense, lazy } from "react";

const FirstSection = lazy(() => import("./FirstSection"));
const SupportSection = lazy(() => import("./SupportSection"));
const Menu = lazy(() => import("./Menu"));
const ServicesMenu = lazy(() => import("./ServicesMenu"));

function MenuSections() {
    return (
        <div className="w-full h-fit lg:px-5 px-2 bg-gray-300 flex lg:flex-row flex-col gap-5">
            <div className="lg:w-[40%] w-full h-full lg:p-5 p-1">
                <Suspense fallback={<div>Loading First Section...</div>}>
                    <FirstSection />
                </Suspense>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-full px-5 lg:py-20 py-5">
                <Suspense fallback={<div>Loading Services Menu...</div>}>
                    <ServicesMenu />
                </Suspense>
                <Suspense fallback={<div>Loading Menu...</div>}>
                    <Menu />
                </Suspense>
                <Suspense fallback={<div>Loading Support Section...</div>}>
                    <SupportSection />
                </Suspense>
            </div>
        </div>
    );
}

export default MenuSections;
