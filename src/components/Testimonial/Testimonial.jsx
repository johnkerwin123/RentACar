import React from "react";

const testimonialData = [
  {
    name: "Jkord",
    image: "https://www.bing.com/images/search?q=image%20faces&FORM=IQFRBA&id=D0E049EEDB50E1CD0EF85A1B5C016085F7BAACE1",
    description: "I couldn't be happier with the service I received from Rent A Car. The process was seamless, and the vehicle was in pristine condition.",
    aosDelay: "0",
  },
  {
    name: "Sherrie",
    image: "https://www.bing.com/images/search?q=image%20faces&FORM=IQFRBA&id=FEFEEB2A236027ED3C06924590F8004DC45B738E",
    description: "From start to finis,Rent A Car exceeded my expectations. Their staff was friendly, and the rates were unbeatable. I'll definitely be using their services again.",
    aosDelay: "300",
  },
  {
    name: "Rosaica",
    image: "https://www.bing.com/images/search?view=detailV2&ccid=ueWoSOP2&id=948CCCF8426111D91C160A149F7110DE99794F7C&thid=OIP.ueWoSOP2NBNORHxxLiuXxQHaHa&mediaurl=https%3a%2f%2fmymodernmet.com%2fwp%2fwp-content%2fuploads%2f2019%2f09%2f100k-ai-faces-3.jpg&exph=750&expw=750&q=image+faces&simid=608004040740141041&FORM=IRPRST&ck=4107E5EAC39E44D76001105ABFA59B6D&selectedIndex=36&itb=0",
    description: "I travel frequently for work, and I always choose Rent A Car for my transportation needs. Their reliability and professionalism set them apart from the competition.",
    aosDelay: "1000",
  },
];
const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              Here's what our valued clients have to say about their experiences with Rent A Car.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg shadow-md "
              >
                <div className="grid place-items-center ">
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
