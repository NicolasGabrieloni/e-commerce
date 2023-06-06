import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart  .  counter
  const [count, setCount] = useState(0);
  // Product detail  .  open/close
  const [openDetail, setOpenDetail] = useState(false);
  const openProductDetail = () => setOpenDetail(true);
  const closeProductDetail = () => setOpenDetail(false);
  // Checkout Side Menu  .  open/close
  const [openCheckout, setOpenCheckout] = useState(false);
  const openCheckoutSideMenu = () => setOpenCheckout(true);
  const closeCheckoutSideMenu = () => setOpenCheckout(false);
  // Product detail  .  Show product
  const [productShow, setProductShow] = useState({});
  // Shopping Cart  .  Add product
  const [cartProduct, setCartProduct] = useState([]);
  // Shopping Cart . Order
  const [order, setOrder] = useState([]);
  // Get products
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);
  //Get products by tittle
  const [searchTitle, setSearchTitle] = useState(null);
  //Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByTitle = (items, searchTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchTitle);
    }

    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    }

    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }

    if (!searchType) {
      return items;
    }
  };

  useEffect(() => {
    if (searchTitle && searchByCategory)
      setFilteredItems(
        filterBy("BY_TITLE_AND_CATEGORY", items, searchTitle, searchByCategory)
      );
    if (searchTitle && !searchByCategory)
      setFilteredItems(
        filterBy("BY_TITLE", items, searchTitle, searchByCategory)
      );
    if (!searchTitle && searchByCategory)
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchTitle, searchByCategory)
      );
    if (!searchTitle && !searchByCategory)
      setFilteredItems(filterBy(null, items, searchTitle, searchByCategory));
  }, [items, searchTitle, searchByCategory]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        openDetail,
        setOpenDetail,
        productShow,
        setProductShow,
        cartProduct,
        setCartProduct,
        openCheckout,
        setOpenCheckout,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchTitle,
        setSearchTitle,
        filteredItems,
        setFilteredItems,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
