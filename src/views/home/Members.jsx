import React from "react";
import MemberCards from "./MemberCards";

const azaz =
  "https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/386516349_122094801254078348_8930316327528949112_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=qHzpdoYm5wwAX9SRRVs&_nc_ht=scontent.fdac31-1.fna&oh=00_AfC_V7KqEiy35JhDvwyK3D9u5hctHGo_eDfpqRb7Ym1vZQ&oe=65903C00";

const khusbu =
  "https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-1/409131151_367553885684689_2001941217576888209_n.jpg?stp=c6.6.188.188a_dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=11e7ab&_nc_ohc=4GeCLq3XCvYAX-8omps&_nc_oc=AQlEp12vWxf1zt3_degqTpowDw9NGYcWjP9dyMWuggNn2ryn5Gj2trYFZ6ZL4yLq8AM&_nc_ht=scontent.fdac31-1.fna&oh=00_AfAGhj2zyTYbuiskjjGembpEGZHwZ4fGMyHl88y5e9om9Q&oe=658F4A81";

const rubel =
  "https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/407945665_1490711891783362_430123388404209950_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=g-Adrf7ne8oAX_Oo1aL&_nc_ht=scontent.fdac31-1.fna&oh=00_AfAXn2R81qoGrhwug8VOJsSNtBrETxqDlssK3iuV1sB0Ng&oe=65905187";

const efty =
  "https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/287747106_465824625311083_5091926104454236884_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a73e89&_nc_ohc=XAc-IxCWzrQAX8XtsVw&_nc_ht=scontent.fdac31-1.fna&oh=00_AfBx7CWpCvmlbUNLRL27NQ9qMvBmMRAXNRMcf1bVkpL5iQ&oe=658F7155";

export default function Members() {
  return (
    <div>
      <section className=" py-20 font-lato">
        <div className="container m-auto flex flex-col items-center">
          <h1 className="font-bold font-lato text-3xl sm:text-4xl mb-2">
            Team Members
          </h1>
          <span className="bg-primary w-10 h-1 rounded mb-6"></span>
          <p className=" text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id
            suscipit provident accusantium quidem perferendis.
          </p>
          <div className="p-10 flex justify-around w-full flex-wrap gap-10 ">
            <MemberCards
              img={azaz}
              name={"Kazi Azaz Ahammed"}
              title={"srm"}
              link={""}
            />
            <MemberCards
              img={khusbu}
              name={"Sobnom Jannat Kusbou"}
              title={"srm"}
              link={""}
            />
            <MemberCards
              img={rubel}
              name={"Rubel Islam"}
              title={"rm"}
              link={""}
            />
            <MemberCards
              img={efty}
              name={"Md. Tanim Khandaker Ifty"}
              title={"rm"}
              link={""}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
