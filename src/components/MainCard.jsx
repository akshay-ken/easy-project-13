import topCircle from "../assets/images/bg-pattern-top.png";
import bottomCircle from "../assets/images/bg-pattern-bottom.png";
import cardPattern from "../assets/images/bg-pattern-card.svg";
import avatar from "../assets/images/image-victor.jpg";
import { FooterStats } from "./FooterStats";

export function MainCard() {
  return (
    <>
      <main className="my-28">
        <div className="max-w-sm mx-auto p-6 bg-white rounded-2xl ">
          <img
            src={cardPattern}
            className=" bg-cover bg-no-repeat max-w-sm min-h-44 -m-6 rounded-t-2xl"
            alt=""
          />
          <div className="flex flex-col items-center">
            <img
              src={avatar}
              className=" rounded-full size-28 -m-8 ring-4 ring-white"
              alt=""
            />
            <div className="flex items-center mt-14 font-one gap-x-4">
              <h1 className=" font-bold text-2xl text-Very-dark-desaturated-blue">
                Victor Crest
              </h1>
              <p className="font-medium text-2xl text-Dark-grayish-blue">26</p>
            </div>
            <p className="font-one mt-2 text-Dark-grayish-blue text-xl mb-6">
              London
            </p>
          </div>
          <div className="w-96 -mx-6 border-2 border-b border-Dark-grayish-blue"></div>

          <div className="flex flex-row justify-around mt-8 ">
            <FooterStats statCount={"80K"}>Followers</FooterStats>
            <FooterStats statCount={"803K"}>Likes</FooterStats>
            <FooterStats statCount={"1.4K"}>Photos</FooterStats>
          </div>
        </div>
      </main>
    </>
  );
}
