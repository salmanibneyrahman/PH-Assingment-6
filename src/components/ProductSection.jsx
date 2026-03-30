import { useState } from 'react';

const iconModules = import.meta.glob('../assets/products/*.png', { eager: true });

function getIconSrc(iconName) {
    for (const path in iconModules) {
        if (path.endsWith('/' + iconName)) {
            return iconModules[path].default;
        }
    }
    return '';
}

function getTagColor(tagType) {
    switch (tagType) {
        case 'popular':
            return 'bg-purple-100 text-purple-700';
        case 'best seller':
            return 'bg-orange-100 text-orange-700';
        case 'new':
            return 'bg-green-100 text-green-700';
        default:
            return 'bg-gray-100 text-gray-700';
    }
}

function ProductSection({ products, cart, onAddToCart, onRemoveFromCart, onClearCart }) {
    const [activeTab, setActiveTab] = useState('products');

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <section id="products" className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Premium Digital Tools
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
                        Choose from our curated collection of premium digital products designed
                        to boost your productivity and creativity.
                    </p>
                </div>

                {/* Toggle Buttons */}
                <div className="flex justify-center mb-10">
                    <div className="inline-flex items-center bg-[#f6f6f6] rounded-full p-1">
                        <button
                            onClick={() => setActiveTab('products')}
                            className={
                                activeTab === 'products'
                                    ? 'bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white px-6 py-2.5 rounded-full text-sm font-medium transition'
                                    : 'text-gray-700 px-6 py-2.5 rounded-full text-sm font-medium hover:text-purple-700 transition'
                            }
                        >
                            Products
                        </button>
                        <button
                            onClick={() => setActiveTab('cart')}
                            className={
                                activeTab === 'cart'
                                    ? 'bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white px-6 py-2.5 rounded-full text-sm font-medium transition'
                                    : 'text-gray-700 px-6 py-2.5 rounded-full text-sm font-medium hover:text-purple-700 transition'
                            }
                        >
                            Cart ({cart.length})
                        </button>
                    </div>
                </div>

                {/* Products Grid */}
                {activeTab === 'products' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition relative"
                            >
                                {/* Tag */}
                                <span
                                    className={
                                        'absolute top-4 right-4 text-xs font-medium px-3 py-1 rounded-full capitalize ' +
                                        getTagColor(product.tagType)
                                    }
                                >
                                    {product.tag}
                                </span>

                                {/* Icon */}
                                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                                    <img
                                        src={getIconSrc(product.icon)}
                                        alt={product.name}
                                        className="w-7 h-7 object-contain"
                                    />
                                </div>

                                {/* Name */}
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>

                                {/* Description */}
                                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{product.description}</p>

                                {/* Price */}
                                <div className="mb-4">
                                    <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                                    <span className="text-gray-400 text-sm ml-1">
                                        /{product.period === 'one-time' ? 'One-Time' : product.period === 'yearly' ? 'Yr' : 'Mo'}
                                    </span>
                                </div>

                                {/* Features */}
                                <ul className="space-y-2 mb-6">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-600">
                                            <i className="fa-solid fa-check text-purple-600 mr-2 text-xs"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Buy Now Button */}
                                <button
                                    onClick={() => onAddToCart(product)}
                                    className="w-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white py-2.5 rounded-full text-sm font-medium hover:from-purple-700 hover:to-pink-600 transition"
                                >
                                    Buy Now
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Cart Section */}
                {activeTab === 'cart' && (
                    <div className="max-w-3.5xl mx-auto border border-gray-200 rounded-2xl p-6 md:p-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Your Cart</h3>

                        {cart.length === 0 ? (
                            <div className="text-center py-12">
                                <i className="fa-solid fa-cart-shopping text-gray-300 text-5xl mb-4"></i>
                                <p className="text-gray-400 text-lg">Your cart is empty</p>
                            </div>
                        ) : (
                            <>
                                <div className="space-y-4">
                                    {cart.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center justify-between bg-gray-50 rounded-xl p-4"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                                                    <img
                                                        src={getIconSrc(item.icon)}
                                                        alt={item.name}
                                                        className="w-7 h-7 object-contain"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                                                    <p className="text-gray-500 text-sm">${item.price}</p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => onRemoveFromCart(item.id)}
                                                className="text-red-500 hover:text-red-700 font-medium text-sm transition"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* Total */}
                                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                                    <span className="text-gray-500">Total:</span>
                                    <span className="text-2xl font-bold text-gray-900">${total}</span>
                                </div>

                                {/* Checkout Button */}
                                <button
                                    onClick={onClearCart}
                                    className="w-full mt-6 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white py-3 rounded-full text-sm font-medium hover:from-purple-700 hover:to-pink-600 transition"
                                >
                                    Proceed To Checkout
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProductSection;