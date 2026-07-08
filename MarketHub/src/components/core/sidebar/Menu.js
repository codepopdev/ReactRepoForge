export const Menu = [
  {
    label: "Dashboard",
    path: "/",
  },
  {
    label: "Products",
    path: "/products",
    child: [
      {
        label: "All Products",
        path: "",
      },
      {
        label: "Add Product",
        path: "/products/add",
      },
      {
        label: "Stock Product",
        path: "/products/availble",
      },
      {
        label: "Category",
        path: "/products/category",
      },
      {
        label: "Add Category",
        path: "/products/add-category",
      },
    ],
  },
];
