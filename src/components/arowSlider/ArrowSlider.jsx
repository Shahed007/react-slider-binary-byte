import { useState } from "react";
import useSlider1 from "../../api/useSlider1";
import Loading from "../loading/Loading";
import ReactStars from "react-rating-stars-component";

function divideItemsIntoSections(items, itemsPerSection) {
  const sections = [];
  for (let i = 0; i < items.length; i += itemsPerSection) {
    sections.push(items.slice(i, i + itemsPerSection));
  }
  return sections;
}

const ratingChanged = (newRating) => {
  console.log(newRating);
};

const SliderSection = ({ items, itemsPerSection, currentSlider }) => {
  const sections = divideItemsIntoSections(items, itemsPerSection);

  return (
    <>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`grid grid-cols-1 md:grid-cols-2 duration-500`}
          style={{
            flex: "0 0 100%",
            boxSizing: "border-box",
            transform: `translateX(-${currentSlider * 101}%)`,
          }}
        >
          {section?.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-2 gap-7  h-80 border-b border-gray-200"
            >
              <div>
                <img className="h-72" src={item.img} alt={item.title} />
              </div>
              <div className="py-4">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                />
                <h2 className="text-xl font-bold">
                  {item.title.slice(0, 28)}...
                </h2>
                <div className="my-3 flex gap-6 items-center">
                  <h1 className="text-2xl font-bold text-red-600">
                    ${item.discount_price}
                  </h1>
                  <del className="text-gray-600 text-lg">${item.price}</del>
                </div>
                <p>{item.description.slice(0, 110)}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

const ArrowSlider = () => {
  const { slider1, loading } = useSlider1();
  const [currentSlider, setCurrentSlider] = useState(1);

  if (loading)
    return (
      <div className="h-[500px]">
        <Loading></Loading>
      </div>
    );
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 lg:p-3 relative  overflow-x-hidden flex ">
        <SliderSection
          items={slider1}
          itemsPerSection={4}
          currentSlider={currentSlider}
        ></SliderSection>
      </div>
    </section>
  );
};

export default ArrowSlider;
