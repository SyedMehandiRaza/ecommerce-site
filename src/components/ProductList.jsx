import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css"; 

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");

//   const [showProducts, setShowProducts] = useState(false);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://interveiw-mock-api.vercel.app/api/getProducts"
        );
        const result = await response.json();
        if (result.status === "success") {
          setProducts(result.data.slice(0, 9)); 
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Sort products based on selected sortOption
  const sortedProducts = [...products].sort((a, b) => {
    const priceA = a.product.variants[0]?.price || 0;
    const priceB = b.product.variants[0]?.price || 0;
    if (sortOption === "low-to-high") return priceA - priceB;
    if (sortOption === "high-to-low") return priceB - priceA;
    return 0;
  });

  return (
    <div className="container mt-4">
      <header className="d-flex justify-content-between align-items-center p-3">
        <h1 className="fs-4 fs-sm-2">All Collection</h1> 
        <select
          className="form-select w-25 w-sm-100 form-select-sm" 
          onChange={(e) => setSortOption(e.target.value)} 
        >
          <option value="">Sort By</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </header>


            {/* Centered "Load Products" Button
      <div className="button-container">
         <button
          onClick={() => setShowProducts(true)} 
           className="btn btn-primary"
        >
         Load Products
       </button>
      </div>

    {showProducts ? <div className="row">
        {sortedProducts.map((product, index) => (
          <div
            key={product.product.id}
            className="col-md-4 col-6 mb-3 product-card" // Decrease margin using 'mb-3'
            style={{
              animationDelay: `${index * 0.2}s`, // Stagger animation by 0.2s per card
            }}
          >
            <ProductCard product={product.product} />
          </div>
        ))}
      </div> : <div>error</div>} */}

    
      <div className="row">
        {sortedProducts.map((product, index) => (
          <div
            key={product.product.id}
            className="col-md-4 col-6 mb-3 product-card"
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <ProductCard product={product.product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;