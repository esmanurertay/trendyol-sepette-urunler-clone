import React from 'react';
import { FaRegHeart, FaStar, FaRegImage } from 'react-icons/fa';

// Ürün verilerini içeren dizi
const products = [
  { id: 1, name: "Leke Karşıtı Ampul 200ml", price: "379,90 TL", marka:"KoreaCo", image: "https://cdn.dsmcdn.com/ty1521/product/media/images/prod/QC/20240904/08/7c394d96-737e-3a7b-bb93-28816667f6b1/1_org_zoom.jpg" },
  { id: 2, name: "Lifter Gloss", price: "379,90 TL", marka:"Maybelline New York", image: "https://cdn.dsmcdn.com/ty1534/product/media/images/prod/QC/20240910/11/8f34be62-d357-3b6d-a2cb-049ca4d91c4f/1_org_zoom.jpg" },
  { id: 3, name: "Kolajen 90 Tablet", price: "345,90 TL", marka:"Multiform", image: "https://cdn.dsmcdn.com/ty1558/product/media/images/prod/PIM/20240919/20/98638e3b-0fa1-4ffe-9929-e64656398206/1_org_zoom.jpg" },
  { id: 4, name: "Aktif Karbonlu Kedi Kumu", price: "169,90 TL", marka:"Mİ CAT", image: "https://cdn.dsmcdn.com/ty1571/prod/QC/20240924/16/2fc6412b-4921-321a-9b9f-1b65e039be08/1_org_zoom.jpg" },
  { id: 5, name: "Micellar Makyaj Temizleme Suyu", price: "76,47 TL", marka:"Garnier", image: "https://cdn.dsmcdn.com/ty1534/product/media/images/prod/QC/20240910/11/355d5b94-191e-3b64-be89-857580e0e674/1_org_zoom.jpg" },
  { id: 6, name: "Topuk Çatlak ve Ayak Bakım Kremi", price: "610,99 TL", marka:"Clasy", image: "https://cdn.dsmcdn.com/ty1543/product/media/images/ty1544/prod/QC/20240913/18/bc6fc260-5fdd-3c8b-b290-d4f1ab001452/1_org_zoom.jpg" }, 
  { id: 7, name: "Topuk Çatlak ve Ayak Bakım Kremi", price: "610,99 TL", marka:"Greentech", image: "https://cdn.dsmcdn.com/ty1517/product/media/images/prod/QC/20240831/21/baeb8e4a-ee5b-31cc-8608-60f827bb71f6/1_org_zoom.jpg" },
  { id: 8, name: "Wish Of Love İkili Parfüm", price: "800,99 TL", marka:"Avon", image: "https://cdn.dsmcdn.com/ty6/product/media/images/20200717/15/4895261/10433809/2/2_org_zoom.jpg" },
];

const ProductCard = ({ product }) => (
  <div className="border rounded-lg p-4 shadow-lg relative">
    {/* Ürün resmi */}
    <img src={product.image} alt={product.name} className="w-full h-32 object-contain rounded" />
    {/* Favoriler */}
    <button className="absolute top-2 right-2 bg-white rounded-full border border-gray-400 p-2">
      <FaRegHeart size={20} className="text-gray-700" />
    </button>
       
    {/* Marka ve Ürün ismi */}
    <div className="flex items-center mt-5 flex-nowrap overflow-hidden text-sm">
      <span className='font-bold mr-1 text-nowrap'>{product.marka}</span>
      <h3 className="text-sm text-nowrap">{product.name}</h3>
    </div>

    {/* Yıldızlar ve fotoğraf ikonu */}
    <div className="flex items-center mt-2">
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, index) => (
          <FaStar size={14} key={index} />
        ))}
      </div>
      <span className="text-gray-600 ml-2 text-xs">(4312)</span>
      <FaRegImage className="text-black ml-2" />
    </div>
    
    {/* Ürün fiyatı */}
    <p className="text-orange-400 font-bold mt-2 w-full">{product.price}</p>
  </div>
);

// Tüm ürün kartlarını içeren ızgara bileşeni
const ProductGrid = () => (
  <div className="grid grid-cols-4 gap-4">
    {/* Ürünleri döngü ile oluştur */}
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

// Bileşeni dışa aktar
export default ProductGrid;
