import React, { useState, useMemo } from 'react';
import {
  Search,
  MessageCircle,
  Eye,
  Package,
  Sparkles,
  X,
} from 'lucide-react';
import { productsData, productCategoriesList } from '../data/productsData';
import type { ProductItem } from '../types';
import { createProductEnquiryUrl } from '../utils/whatsapp';
import { ProductQuickViewModal } from './ProductQuickViewModal';

export const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      const matchesQuery =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider">
            <Package className="w-3.5 h-3.5" />
            <span>Authorised Product Catalog</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Complete Asian Paints Range
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From high-sheen Royale emulsions and weather-tough Apex to SmartCare waterproofing and Italian wood finishes. All products are 100% genuine factory-sealed.
          </p>
        </div>

        {/* Filter & Search Bar Container */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-md shadow-slate-200/50 border border-slate-200/80 mb-10 space-y-4">
          
          {/* Top Row: Search Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products by name, feature (e.g. 'Teflon', 'Waterproof', 'Royale', 'Matt', 'Enamel')..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs (Scrollable on mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {productCategoriesList.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md shadow-slate-950/20'
                      : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                      isActive ? 'bg-rose-500 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Info Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 px-1">
          <span>
            Showing <strong className="text-slate-900 font-bold">{filteredProducts.length}</strong> genuine Asian Paints products
          </span>
          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-rose-600 hover:text-rose-700 font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 p-8">
            <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No matching products found</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
              We couldn't find any products matching "{searchQuery}". Try searching for 'Royale', 'Apex', 'Waterproofing', or reset your search.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 transition-colors"
            >
              View All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const whatsappUrl = createProductEnquiryUrl(product.name, product.categoryLabel);

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-slate-300/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Card Visual Header / Paint Header */}
                  <div className="relative p-6 pb-4 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-100">
                    
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                        {product.categoryLabel}
                      </span>
                      {product.badge && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-50 border border-rose-200/60 px-2.5 py-0.5 rounded-full">
                          <Sparkles className="w-3 h-3 text-rose-500" />
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Paint Bucket Silhouette / Visual representation */}
                    <div className="my-2 flex items-center justify-center py-4 bg-slate-50/70 rounded-2xl relative overflow-hidden group-hover:bg-slate-100/60 transition-colors">
                      {/* Decorative colored glow matching product accent */}
                      <div
                        className="w-20 h-20 rounded-full blur-xl opacity-30 absolute -top-4 -right-4"
                        style={{ backgroundColor: product.accentColor }}
                      />

                      {/* Stylized Paint Can Graphic */}
                      <div className="flex flex-col items-center">
                        <div className="relative w-28 h-28 flex items-center justify-center">
                          {/* Paint container SVG representation */}
                          <svg className="w-24 h-24 drop-shadow-md" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="22" y="32" width="56" height="58" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2.5" />
                            {/* Lid */}
                            <path d="M18 32 C18 29 22 26 28 26 L72 26 C78 26 82 29 82 32 Z" fill="#0F172A" />
                            {/* Color band */}
                            <rect x="23" y="44" width="54" height="24" fill={product.accentColor} />
                            {/* Brand emblem */}
                            <circle cx="50" cy="56" r="6" fill="#FFFFFF" />
                            {/* Handle */}
                            <path d="M22 36 C22 18, 78 18, 78 36" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                          </svg>

                          {/* Authentic Seal Badge */}
                          <span className="absolute -bottom-1 -right-1 bg-slate-900 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-md shadow">
                            GENUINE
                          </span>
                        </div>
                        <span className="text-[11px] font-medium text-slate-500 mt-1">
                          Asian Paints Factory-Sealed
                        </span>
                      </div>
                    </div>

                    {/* Product Name & Tagline */}
                    <div className="mt-2">
                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-rose-600 transition-colors tracking-tight line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5 line-clamp-2 min-h-[32px]">
                        {product.tagline}
                      </p>
                    </div>

                  </div>

                  {/* Card Content & Features */}
                  <div className="p-6 pt-4 flex-grow flex flex-col justify-between space-y-4">
                    
                    {/* Key Attributes */}
                    <div className="space-y-1.5 text-xs text-slate-600">
                      <div className="flex items-center justify-between py-1 border-b border-slate-100">
                        <span className="text-slate-400">Sheen</span>
                        <span className="font-semibold text-slate-800">{product.sheen}</span>
                      </div>
                      {product.washability && (
                        <div className="flex items-center justify-between py-1 border-b border-slate-100">
                          <span className="text-slate-400">Washability</span>
                          <span className="font-semibold text-slate-800">{product.washability}</span>
                        </div>
                      )}
                      {product.coverage && (
                        <div className="flex items-center justify-between py-1 border-b border-slate-100">
                          <span className="text-slate-400">Coverage</span>
                          <span className="font-semibold text-slate-800 truncate max-w-[170px]" title={product.coverage}>
                            {product.coverage}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Available Sizes Tag */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[11px] text-slate-400 font-medium">Packs:</span>
                      {product.availableSizes.map((size) => (
                        <span
                          key={size}
                          className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-bold rounded-md"
                        >
                          {size}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setActiveModalProduct(product)}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-slate-500" />
                        <span>Quick View</span>
                      </button>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-700/20 transition-all"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                        <span>Enquire Now</span>
                      </a>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Catalog Note */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto">
          <p>
            * Genuine Asian Paints product information. Available in 2,200+ computerised machine-tinted shades. Pack sizes and immediate showroom stock can be confirmed instantly on WhatsApp.
          </p>
        </div>

      </div>

      {/* Quick View Modal */}
      <ProductQuickViewModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </section>
  );
};
