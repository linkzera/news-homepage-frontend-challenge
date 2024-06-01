import { Header } from "./components/Header";

import bigImage from "./assets/image-web-3-desktop.jpg";
import retroPcImg from "./assets/image-retro-pcs.jpg";
import laptopsImg from "./assets/image-top-laptops.jpg";
import gamingGrowthImg from "./assets/image-gaming-growth.jpg";

import { Card } from "./components/Card";

export function App() {
  return (
    <main className="bg-white-off min-h-screen">
      <div className="max-w-6xl mx-auto py-10 w-full">
        <Header />
        <div className="flex gap-7">
          <div className="1div flex flex-col flex-[3]">
            <img src={bigImage} alt="abstract forms" className=" h-full" />

            <div className="grid grid-cols-2 mt-10 ">
              <h1 className="text-blue-very-dark font-extrabold sm:text-5xl">
                The Bright Future of Web 3.0?
              </h1>

              <div className="flex flex-col gap-6">
                <p>
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="uppercase bg-red-soft hover:bg-blue-very-dark transition-colors text-white-off tracking-[0.3em] px-8 py-[0.75rem] max-w-fit font-bold">
                  Read more
                </button>
              </div>
            </div>
          </div>

          <div className="2div flex flex-col flex-1 bg-blue-very-dark text-white-off p-6 pt-8">
            <h2 className="text-orange-soft sm:text-5xl font-bold mb-8">New</h2>

            <p className="cursor-pointer hover:text-orange-soft transition-colors  font-bold text-white-off text-lg tracking-wide">
              Hydrogen VS Electric Cars
            </p>
            <p className="font-normal text-blue-grayish mt-2">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
            <div className="border border-blue-dark-grayish my-6" />
            <p className="cursor-pointer hover:text-orange-soft transition-colors font-bold text-white-off text-lg tracking-wide">
              The Downsides of AI Artistry
            </p>
            <p className="font-normal text-blue-grayish mt-2">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
            <div className="border border-blue-dark-grayish my-6" />
            <p className="cursor-pointer hover:text-orange-soft transition-colors font-bold text-white-off text-lg tracking-wide">
              Is VC Funding Drying Up?
            </p>
            <p className="font-normal text-blue-grayish mt-2">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>

        <div className="flex gap-9 mt-10">
          <Card id="01" image={retroPcImg} title="Reviving Retro PCs">
            What happens when old PCs are given modern upgrades?
          </Card>
          <Card id="02" title="Top 10 Laptops of 2022" image={laptopsImg}>
            Our best picks for various needs and budgets.
          </Card>

          <Card id="03" title="The Growth of Gaming" image={gamingGrowthImg}>
            How the pandemic has sparked fresh opportunities.
          </Card>
        </div>
      </div>
    </main>
  );
}
