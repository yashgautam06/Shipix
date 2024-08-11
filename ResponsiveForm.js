import React from 'react';

const OrderForm = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <form className="bg-green-50 p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div className="lg:col-span-1 w-full">
            <section className="mb-6 w-full">
              <h2 className="font-semibold w-full text-xl mb-2">Buyer Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Enter buyer's name" />
                <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Enter Phone Number" />
                <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Enter Alternate Number" />
                <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Enter email ID" />
              </div>
            </section>

            <section className="mb-6">
              <h2 className="font-semibold text-xl mb-2">Buyer Address</h2>
              <div className="grid grid-cols-1 gap-4">
                <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Enter the complete Address" />
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                  <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Enter land mark" />
                  <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Enter Pincode" />
                  <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Enter City" />
                  <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Enter State" />
                  <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Enter Country" value="India" readOnly />
                </div>
                <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Enter the company name (optional)" />
                <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Enter the GSTIN Number (optional)" />
                <div className="flex items-center">
                  <input className="mr-2" type="checkbox" id="billingAddress" />
                  <label htmlFor="billingAddress">Billing address same as shipping address</label>
                </div>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="font-semibold text-xl mb-2">Package Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Enter weight" />
                <div className="grid grid-cols-3 gap-4">
                  <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="L" />
                  <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="B" />
                  <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="H" />
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-2">
                (Max 3 digits after decimal place)
              </p>
              <p className="text-sm text-gray-600">
                Note: the minimum chargeable weight is 0.50 kg
              </p>
            </section>

            <section className="mb-6">
              <h2 className="font-semibold text-xl mb-2">Order Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Order ID" />
                <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Order Type" />
                <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Order Date" />
                <button className="bg-green-500 text-white rounded-lg p-1 w-2/3 mx-auto hover:bg-green-700">Add product</button>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="font-semibold text-xl mb-2">Product Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Product Name" />
                <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Quantity" />
                <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Unit Price" />
                <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Product Category" />
                <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="SKU" />
                <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="HSN" />
                <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Tax Rate" />
                <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Discount (optional)" />
              </div>
            </section>

            <section className="mb-6">
              <h2 className="font-semibold text-xl mb-2">Payment</h2>
              <div className="flex gap-4 mb-4">
                <div className="flex items-center">
                  <input className="mr-2" type="radio" id="cod" name="payment" />
                  <label htmlFor="cod">COD</label>
                </div>
                <div className="flex items-center">
                  <input className="mr-2" type="radio" id="prepaid" name="payment" />
                  <label htmlFor="prepaid">Prepaid</label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Shipping" />
                <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Gift Wrap" />
                <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Transaction" />
                <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Discount" />
              </div>

              {/* Sub-Total Section */}
              <div className="mt-6">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Sub-Total for products</span>
                  <span className="text-right">0</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Other Charges</span>
                  <span className="text-right">0</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Discount</span>
                  <span className="text-right">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Total Order Value</span>
                  <span className="text-right">0</span>
                </div>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="font-semibold text-xl mb-2">Pick Up Address</h2>
              <div className="border border-gray-300 rounded-lg p-4 text-center">
                <p className="font-semibold">Primary</p>
                <p>129 Vidya nagar, Bhiwani Haryana India</p>
                <button className="bg-green-500 text-white rounded-lg p-1 w-2/3 mx-auto hover:bg-green-700 mt-2">Select</button>
              </div>
            </section>
          </div>
        </div>

        <section className="mb-6 text-center">
          <h2 className="font-semibold text-xl mb-2">Other Details</h2>
          <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" placeholder="Enter the name" />
        </section>

        <div className="text-center">
          <button className="bg-green-500 text-white rounded-lg p-2 w-1/3 hover:bg-green-700">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
