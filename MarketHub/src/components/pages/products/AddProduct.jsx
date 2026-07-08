import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router";

const AddProduct = () => {
  const [userInput, setUserInputstate] = useState({
    title: "",
    slug: "",
    category: "",
    productType: "",
    brand: "",
    seller: "",
    description: "",
    quantity: null,
    price: "",
  });

  const handletUserInputstate = (filed, value) => {
    setUserInputstate((prevValues) => ({
      ...prevValues,
      [filed]: value,
    }));
  };

  const HandleFormubmit = (event) => {
    event.preventDefault();
    console.log("Submit Form", userInput);
    setUserInputstate({
      title: "",
      slug: "",
      category: "",
      productType: "",
      brand: "",
      seller: "",
      description: "",
      quantity: "",
      price: "",
    });
  };

  return (
    <>
      <form onSubmit={HandleFormubmit}>
        <div className="flex flex-row justify-between items-center">
          <Link to="/products">
            <div className="flex items-center gap-2 font-bold text-xl cursor-pointer">
              <FiArrowLeft /> Create Product
            </div>
          </Link>
          <button
            type="button"
            className="rounded-sm py-2 px-5 bg-amber-500 text-lg text-white cursor-pointer"
          >
            Publish
          </button>
        </div>
        <Card className="mt-4 h-[75vh] overflow-auto">
          <CardContent>
            <div className="grid grid-cols-4 gap-y-4 gap-x-3">
              <div className="w-full">
                <label htmlFor="" className="text-sm font-semibold">
                  Product Name
                </label>
                <input
                  id="title"
                  type="text"
                  name="title"
                  value={userInput.title}
                  onChange={(event) =>
                    handletUserInputstate("title", event.target.value)
                  }
                  placeholder="Enter Value"
                  className="block mt-2 grow w-full outline-0 bg-teal-200/5 rounded-md py-2 px-5 border-teal-100 border border-solid pla shadow-gray-300 shadow-xs text-base text-gray-900 placeholder:text-gray-600 placeholder:font-medium focus:outline-none focus:bg-teal-50 active:bg-teal-50 sm:text-sm/6"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm font-semibold">
                  Slug
                </label>
                <input
                  id="slug"
                  type="text"
                  name="slug"
                  placeholder="Enter Value"
                  value={userInput.slug}
                  onChange={(event) =>
                    handletUserInputstate("slug", event.target.value)
                  }
                  className="block mt-2 grow w-full outline-0 bg-teal-200/5 rounded-md py-2 px-5 border-teal-100 border border-solid pla shadow-gray-300 shadow-xs text-base text-gray-900 placeholder:text-gray-600 placeholder:font-medium focus:outline-none focus:bg-teal-50 active:bg-teal-50 sm:text-sm/6"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm font-semibold">
                  Category
                </label>
                <input
                  id="category"
                  type="text"
                  name="category"
                  placeholder="Enter Value"
                  value={userInput.category}
                  onChange={(event) =>
                    handletUserInputstate("category", event.target.value)
                  }
                  className="block mt-2 grow w-full outline-0 bg-teal-200/5 rounded-md py-2 px-5 border-teal-100 border border-solid pla shadow-gray-300 shadow-xs text-base text-gray-900 placeholder:text-gray-600 placeholder:font-medium focus:outline-none focus:bg-teal-50 active:bg-teal-50 sm:text-sm/6"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm font-semibold">
                  Product Type
                </label>
                <input
                  id="productType"
                  type="text"
                  name="productType"
                  placeholder="Enter Value"
                  value={userInput.productType}
                  onChange={(event) =>
                    handletUserInputstate("productType", event.target.value)
                  }
                  className="block mt-2 grow w-full outline-0 bg-teal-200/5 rounded-md py-2 px-5 border-teal-100 border border-solid pla shadow-gray-300 shadow-xs text-base text-gray-900 placeholder:text-gray-600 placeholder:font-medium focus:outline-none focus:bg-teal-50 active:bg-teal-50 sm:text-sm/6"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm font-semibold">
                  Brand
                </label>
                <input
                  id="brand"
                  type="text"
                  name="brand"
                  placeholder="Enter Value"
                  value={userInput.brand}
                  onChange={(event) =>
                    handletUserInputstate("brand", event.target.value)
                  }
                  className="block mt-2 grow w-full outline-0 bg-teal-200/5 rounded-md py-2 px-5 border-teal-100 border border-solid pla shadow-gray-300 shadow-xs text-base text-gray-900 placeholder:text-gray-600 placeholder:font-medium focus:outline-none focus:bg-teal-50 active:bg-teal-50 sm:text-sm/6"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm font-semibold">
                  Qantity
                </label>
                <input
                  id="quantity"
                  type="number"
                  name="quantity"
                  placeholder="Enter Value"
                  value={userInput.quantity}
                  onChange={(event) =>
                    handletUserInputstate("quantity", event.target.value)
                  }
                  className="block mt-2 grow w-full outline-0 bg-teal-200/5 rounded-md py-2 px-5 border-teal-100 border border-solid pla shadow-gray-300 shadow-xs text-base text-gray-900 placeholder:text-gray-600 placeholder:font-medium focus:outline-none focus:bg-teal-50 active:bg-teal-50 sm:text-sm/6"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm font-semibold">
                  Price
                </label>
                <input
                  id="price"
                  type="text"
                  name="price"
                  placeholder="Enter Value"
                  value={userInput.price}
                  onChange={(event) =>
                    handletUserInputstate("price", event.target.value)
                  }
                  className="block mt-2 grow w-full outline-0 bg-teal-200/5 rounded-md py-2 px-5 border-teal-100 border border-solid pla shadow-gray-300 shadow-xs text-base text-gray-900 placeholder:text-gray-600 placeholder:font-medium focus:outline-none focus:bg-teal-50 active:bg-teal-50 sm:text-sm/6"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm font-semibold">
                  Seller
                </label>
                <input
                  id="seller"
                  type="text"
                  name="seller"
                  placeholder="Enter Value"
                  value={userInput.seller}
                  onChange={(event) =>
                    handletUserInputstate("seller", event.target.value)
                  }
                  className="block mt-2 grow w-full outline-0 bg-teal-200/5 rounded-md py-2 px-5 border-teal-100 border border-solid pla shadow-gray-300 shadow-xs text-base text-gray-900 placeholder:text-gray-600 placeholder:font-medium focus:outline-none focus:bg-teal-50 active:bg-teal-50 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 mt-4 w-full">
              <label htmlFor="" className="text-sm font-semibold">
                Description
              </label>
              <textarea
                id="description"
                type="text"
                name="description"
                placeholder="Enter Value"
                value={userInput.description}
                onChange={(event) =>
                  handletUserInputstate("description", event.target.value)
                }
                className="block grow w-full mt-2 h-30 outline-0 bg-teal-200/5 white rounded-md py-2 px-5  border-teal-100 border border-solid shadow-gray-300 shadow-xs text-base text-gray-900 placeholder:text-gray-600 placeholder:font-medium focus:outline-none focus:bg-teal-50 active:bg-teal-50 sm:text-sm/6"
              ></textarea>
            </div>
          </CardContent>
          <CardAction></CardAction>
        </Card>
        <div className="flex flex-row justify-end gap-4 items-center mt-4">
          {/* <div className="flex items-center gap-2 font-bold text-2xl cursor-pointer">
            <FiArrowLeft /> Create Product
          </div> */}
          <button
            type="button"
            className="rounded-sm py-2 px-5 bg-gray-600 text-lg text-white cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-sm py-2 px-5 bg-teal-600 text-lg text-white cursor-pointer"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
