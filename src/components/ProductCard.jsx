
const ProductCard = ({ product }) => {
  return (
    <div className="card p-3">
      <img
        src={product.image?.src || 'placeholder.jpg'}
        alt={product.title}
        className="card-img-top mb-3"
        style={{ height: '200px' }}
      />
      <h5 className="text-secondary">{product.title}</h5>
      <p className="fw-bold">Rs. {product.variants[0]?.price || 'N/A'}</p>
      
      <button className="btn btn-primary w-100 d-flex justify-content-center align-items-center">
  <i className="fas fa-shopping-cart me-2"></i> Add to Cart
</button>
    </div>
  );
};

export default ProductCard;
