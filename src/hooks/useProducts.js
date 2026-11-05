import { useState, useEffect } from "react";
import useSessionStorage from "./useSessionStorage";

const useProducts = (intialProducts) => {
  const [products, setProducts] = useSessionStorage("products", intialProducts);
  const [loading, setLoading] = useState(false);
  const [isAllSelected, setIsAllSelected] = useSessionStorage(
    "selectAll",
    false,
  );

  const getProducts = async () => {
    setLoading(true);
    if (
      products === null ||
      typeof products === "undefined" ||
      (products.list.length === 0 && products.count === 0)
    ) {
      setIsAllSelected(false);

      // Original Mocky endpoint (run.mocky.io) no longer exists, so map
      // dummyjson products onto the shape the components expect.
      await fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then(({ products: items }) =>
          setProducts({
            list: items
              .map((p) => ({
                productId: p.id,
                name: p.title,
                imageUrl: p.thumbnail,
                price: p.price,
                priceWas: (p.price / (1 - p.discountPercentage / 100)).toFixed(2),
                available: p.stock > 0 ? "TRUE" : "FALSE",
                quantity: p.stock,
                lowOnStock: p.stock > 0 && p.stock < 10 ? "TRUE" : "FALSE",
                promotionBadge:
                  p.discountPercentage >= 15
                    ? `${Math.round(p.discountPercentage)}% OFF`
                    : "",
              }))
              .filter((item) => item.available !== "FALSE"),
            count: 0,
            checklist: [],
          }),
        )
        .catch((err) => console.error("Failed to load products", err));
    }

    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const SelectProduct = (id, isChecked) => {
    const updateProducts = products.list.map((p) =>
      p.productId == id ? { ...p, value: isChecked } : p,
    );

    setIsAllSelected(false);

    return {
      list: updateProducts,
      checklist: updateProducts.filter((p) => p.value),
      count: updateProducts.filter((p) => p.value).length,
    };
  };

  const handleRefreshProducts = () => {
    getProducts();
  };

  const handleSelect = (e) => {
    const { checked, type, id } = e.target;
    const selectItems = SelectProduct(id, type === "checkbox" && checked);
    setProducts(selectItems);

    const productsCount = selectItems.list.length;
    if (productsCount !== 0 && selectItems.checklist.length === productsCount) {
      setIsAllSelected(true);
    }
  };

  const handleDelete = () => {
    const filterProducts = {
      list: products.list.filter((p) => !p.value),
      checklist: [],
      count: 0,
    };

    const productsCount = filterProducts.list.length;
    if (productsCount === 0) {
      setIsAllSelected(false);
    }

    setProducts(filterProducts);
  };

  const handleSelectAll = (e) => {
    const { checked, type } = e.target;

    const isChecked = type === "checkbox" && checked;
    for (let product of Object.values(products.list)) {
      setIsAllSelected(isChecked);
      product.value = isChecked;
    }

    const selectedItems = products.list.filter((p) => p.value);
    setProducts({
      list: products.list,
      checklist: selectedItems,
      count: selectedItems.length,
    });
  };

  return {
    products,
    loading,
    isAllSelected,
    handleSelectAll,
    handleDelete,
    handleSelect,
    handleRefreshProducts,
  };
};

export default useProducts;
