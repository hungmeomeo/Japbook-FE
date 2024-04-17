import { Divider } from "@chakra-ui/react";
import React, { useState } from "react";
import ReactStars from "react-stars";
import { Textarea } from "@chakra-ui/react";

const Review = () => {
  const [review, setReview] = useState({
    comment: "",
    rating: 0,
  });
  console.log(review);
  return (
    <section className="my-20 flex h-96 gap-10">
      <div className="w-1/2">
        <h5 className="text-xl font-semibold">Reviews</h5>
        <Divider />
        <ul className="h-full overflow-y-scroll">
            {[1,2,3,4,5,6,7,8,9,10].map(ele => (
                <div key={ele} className="my-5 py-5 hover:bg-gray-100 hover:rounded-md px-4">
                  <div className="flex justify-between">
                    <p className="font-semibold text-lg">Username here</p>
                    <ReactStars size={24} edit={false} value={3.5} />
                  </div>
                  <p>This is the description</p>
                </div> 
            ))}
          
        </ul>
      </div>
      <Divider orientation="vertical" />
      <div className="w-1/2">
        <h5 className="text-xl font-semibold">Write Reviews</h5>
        <Divider/>
        <form action="" className="mt-6">
          <Textarea
            placeholder="What you want to share about this product"
            className="mb-4"
            onChange={e => setReview({ ...review, comment: e.target.value })}
          />
          <ReactStars
            size={24}
            value={review.rating}
            onChange={newRate => setReview(({
                ...review,
                rating: newRate 
            }))}
          />
          <button className="font-semibod text-white bg-black px-6 py-2 rounded-md mt-4">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Review;
