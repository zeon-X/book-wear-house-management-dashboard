import axios from "axios";
import React, { useEffect, useState } from "react";

const Carousol = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("carousol.json").then((res) => {
      // console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div class="carousel sm:w-full">
        {data.map((x) => {
          return (
            <div id={x.id} class="carousel-item relative w-full">
              <img src={x.img} style={{ height: "550px" }} className="w-full" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={x.prev} class="btn btn-circle">
                  ❮
                </a>
                <a href={x.next} class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousol;
