// "use client"
// import { useState } from "react";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";

// const ProductFilters = ({ onFilterChange }) => {

//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedPrice, setSelectedPrice] = useState('');
//   const [selectedSize, setSelectedSize] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');
//   const [selectedGender, setSelectedGender] = useState('');

//   const searchParams = useSearchParams();
//   const router = useRouter()
//   const pathname = usePathname()

//   const activeFilter = searchParams.get("name")

//   const handleFilterChange = () => {
//     onFilterChange({
//       category: selectedCategory,
//       price: selectedPrice,
//       size: selectedSize,
//       color: selectedColor,
//       gender: selectedGender,
//     });

//     const params = new URLSearchParams(searchParams)
//     params.set({
//       category: selectedCategory,
//       price: selectedPrice,
//       size: selectedSize,
//       color: selectedColor,
//       gender: selectedGender,
//     })

//     router.replace(`${pathname}?${params.toString()}`, { scroll: false })


//   };

//   return (
//     <div className="p-4 bg-gray-100 rounded-md shadow-md w-full max-w-xs">
//       <h2 className="text-lg font-bold mb-4">Filter Products</h2>





//       {/* Gender Filter */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Gender</label>
//         <div className="mt-2 space-y-2">
//           {['male', 'female', 'unisex'].map((gender) => (
//             <div key={gender} className="flex items-center">
//               <input
//                 id={`gender-${gender}`}
//                 name="gender"
//                 type="radio"
//                 value={gender}
//                 checked={selectedGender === gender}
//                 onChange={(e) => { setSelectedGender(e.target.value); handleFilterChange(); }}
//                 className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
//               />
//               <label htmlFor={`gender-${gender}`} className="ml-3 block text-sm font-medium text-gray-700">
//                 {gender.charAt(0).toUpperCase() + gender.slice(1)}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductFilters



function productFilters() {
  return (
    <div className="border-2 px-2 py-5 min-w-72 rounded-md ">
      <div className="flex justify-between items-center">
        <h1 className="text-xl ">Products Filter :</h1>
        <div className="border border-black  p-2 hover:scale-105 shadow-md hover:bg-gray-100">

          <button >Apply</button>
        </div>

      </div>
      <form className="py-8">
        {/* Category Filter */}
        <div className="mb-4">
          <label className=" text-lg font-medium text-gray-700">Category</label>
          <select
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">All Categories</option>
            <option value="t-shirt">T-Shirts</option>
            <option value="oversized">Oversized T shirt</option>
            <option value="jacket">Jackets</option>
          </select>
        </div>

        {/* Price Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <select
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={""}

          >
            <option value="">All Prices</option>
            <option value="0-50">$0 - $50</option>
            <option value="51-100">$51 - $100</option>
            <option value="101-200">$101 - $200</option>
          </select>
        </div>

        {/* Size Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Size</label>
          <div className="mt-2 space-y-2">
            {['S', 'M', 'L', 'XL'].map((size) => (
              <div key={size} className="flex items-center">
                <input
                  id={`size-${size}`}
                  name="size"
                  type="radio"
                  // value={size}
                  // checked={selectedSize === size}

                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label htmlFor={`size-${size}`} className="ml-3 block text-sm font-medium text-gray-700">
                  {size}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Color Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Color</label>
          <div className="mt-2 space-y-2">
            {['black', 'white', 'blue', 'red'].map((color) => (
              <div key={color} className="flex items-center">
                <input
                  id={`color-${color}`}
                  name="color"
                  type="radio"
                  // value={color}
                  // checked={selectedColor === color}

                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label htmlFor={`color-${color}`} className="ml-3 block text-sm font-medium text-gray-700">
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </label>
              </div>
            ))}
          </div>
        </div>

      </form>
    </div>
  )
}

export default productFilters