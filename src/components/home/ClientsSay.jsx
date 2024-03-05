import React from "react";
import { CheckedIcon } from "../common/Icon";

const ClientsSay = () => {
  return (
    <>
      <section
        className="bg-[url('/images/webp/HowItWork.webp')] bg-no-repeat  bg-cover w-full xl:py-[206px]  lg:py-[190px] md:py-[160px] sm:py-[130px] pt-[50px] pb-[30px] "
        id="how-it-work"
      >
        <div className=" max-w-[1170px] sm:px-4 px-2 w-full mx-auto flex flex-col items-center lg:gap-[52px] sm:gap-[32px] gap-5 relative">
          <img
            className="hidden lg:block absolute right-[-80px] top-[50px] w-[166px]"
            src="/images/webp/forgroundImg1.webp"
            alt=""
          />{" "}
          <img
            className="hidden lg:block absolute left-[-80px] bottom-[-235px]  w-[161px]"
            src="/images/webp/forgroundImg2.webp"
            alt=""
          />{" "}
          <div className="relative">
            <h2 className="text-5xl text-[#00070E] text-center">
              What Our Clients Say
            </h2>
            <p className="text-base text-[#00070E] text-center max-w-[771px] w-full sm:mt-[16px] mt-[8px]">
              Ipsum integer faucibus eu morbi integer. Tempus in volutpat libero
              mauris neque dolor pellentesque sagittis. Scelerisque tempor
              auctor euismod.
            </p>
            <img
              class="absolute lg:right-[calc(50%-350px)] lg:top-[-30px] right-[calc(50%-215px)] top-[-20px] lg:w-[153px] w-[100px]"
              src="/images/webp/forgroundImg3.webp"
              alt=""
            />
          </div>
          <div className="gridentBorder  w-full bg-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            aspernatur laborum consequuntur quae dolor reprehenderit inventore
            quaerat fugit, eos quod. Veritatis, reprehenderit! Optio autem
            molestiae mollitia quidem. Corrupti quod, ea voluptas doloremque
            quisquam ipsa consequatur id perspiciatis, voluptatibus pariatur
            dolores molestiae temporibus fugiat iure accusantium vitae molestias
            in architecto maiores odio! Dolor magni, culpa, et facilis accusamus
            enim aliquid accusantium reprehenderit soluta qui fugiat sit, labore
            harum eum a voluptatem. Culpa tempora itaque et porro expedita quod.
            Velit laboriosam magnam necessitatibus laborum veritatis alias
            voluptatibus a, facere, soluta delectus autem assumenda quia odio
            odit, sequi eligendi doloremque esse sed aliquid quod! Non
            voluptatum ratione velit eum necessitatibus quis commodi. Laborum,
            alias tempore veniam beatae sapiente quibusdam ex natus culpa,
            aspernatur, harum dolorem eius repellendus dolorum. Pariatur quidem
            rerum ad id labore nisi enim fugit reprehenderit, soluta, quam
            commodi corporis, fugiat temporibus! Ad vero provident est rerum
            sunt incidunt velit. Aperiam rem incidunt necessitatibus! Minima,
            sint, distinctio hic autem id perferendis tempore porro ad totam
            laboriosam tempora nesciunt numquam unde reiciendis. Cum dicta nemo
            enim! Culpa dolores, beatae perferendis perspiciatis nobis
            repellendus quidem cupiditate modi dolorum rem similique facere
            obcaecati quibusdam nam aspernatur laborum atque eveniet,
            repudiandae aperiam qui ratione reiciendis.
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientsSay;
