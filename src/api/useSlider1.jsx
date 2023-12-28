import { useEffect } from "react";
import { useState } from "react";

const useSlider1 = () => {
  const [slider1, setSlider1] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/slider1.json");
      const data = await res.json();
      setSlider1(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return { slider1, loading };
};

export default useSlider1;
