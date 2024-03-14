import PropTypes from "prop-types";

const Cart = ({ cart, handleRemoveCart }) => {
  return (
    <div className="my-10">
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-lg mx-auto"
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
            Cart
          </h3>
        </div>
        <div className="p-6">
          <div className="grid gap-4">
            {cart.map((product, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold">{product.title}</h3>
                  <span>${product.price}</span>
                </div>
                <div className="flex flex-col items-end">
                  <div className="grid items-center gap-1"></div>
                  <button onClick={()=> handleRemoveCart(product.id)} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    </svg>
                    <span className="sr-only">Remove</span>
                  </button>
                </div>
              </div>
            ))}

            {/* <div className="flex items-center gap-4">
              <div className="flex-1">
                <h3 className="font-semibold">Crossbody Bag</h3>
              </div>
              <div className="flex flex-col items-end">
                <div className="grid items-center gap-1"></div>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  </svg>
                  <span className="sr-only">Remove</span>
                </button>
              </div>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 p-6">
          <div className="flex items-center justify-start font-semibold">
            <span>Total</span>
            <span>$79.98</span>
          </div>
          <button className="flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#111] text-white hover:bg-[#2b2a2a] h-10 px-4 py-2 w-full">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveCart: PropTypes.func.isRequired,
};

export default Cart;
