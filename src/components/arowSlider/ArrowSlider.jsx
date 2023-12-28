import useSlider1 from "../../api/useSlider1";
import Loading from "../loading/Loading";

function divideItemsIntoSections(items, itemsPerSection) {
  const sections = [];
  for (let i = 0; i < items.length; i += itemsPerSection) {
    sections.push(items.slice(i, i + itemsPerSection));
  }
  return sections;
}

const SliderSection = ({ items, itemsPerSection }) => {
  const sections = divideItemsIntoSections(items, itemsPerSection);

  return (
    <div>
      {sections.map((section, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 ">
          {section?.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-2 gap-8  h-80 border-b border-gray-200"
            >
              <div>
                <img src={item.img} alt={item.title} />
              </div>
              <div>
                <h2>{item.title.slice(0, 35)}...</h2>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const ArrowSlider = () => {
  const { slider1, loading } = useSlider1();

  if (loading)
    return (
      <div className="h-[500px]">
        <Loading></Loading>
      </div>
    );
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 lg:p-3  ">
        <SliderSection items={slider1} itemsPerSection={4}></SliderSection>
      </div>
    </section>
  );
};

export default ArrowSlider;
