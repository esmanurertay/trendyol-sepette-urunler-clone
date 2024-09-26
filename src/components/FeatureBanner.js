import React from 'react';
import { FaBolt, FaStar, FaStore, FaShippingFast, FaBox } from 'react-icons/fa';

const FeatureBanner = () => {
  return (
    <div className="flex w-full justify-between text-xs mx-auto space-x-8 text-nowrap flex-nowrap">
      {/* Flaş Ürünler */}
      <div className="flex h-1 items-center bg-pink-100 p-4 rounded shadow ml-2">
        <FaBolt className="mr-2 text-pink-600" />
        <span className=''>Flaş Ürünler</span>
        <span className="ml-4 bg-white px-2 py-[1%] rounded-full">00:10:30</span> {/* Sayaç örneği */}
      </div>
      
      {/* Yüksek Puanlı Ürünler */}
      <div className="flex h-1 mb-5 items-center bg-yellow-100 p-4 rounded shadow">
        <FaStar className="mr-2 text-yellow-400" />
        <span className=''>Yüksek Puanlı Ürünler</span>
      </div>
      
      {/* Yüksek Puanlı Satıcılar */}
      <div className="flex h-1 mb-5 items-center bg-blue-100 p-4 rounded shadow">
        <FaStore className=" mr-2 text-blue-500" />
        <span>Yüksek Puanlı Satıcılar</span>
      </div>
      
      {/* Kargo Bedava */}
      <div className="flex h-1 mb-5 items-center bg-gray-100 p-4 rounded shadow">
        <FaBox className=" mr-2 text-gray-400" />
        <span>Kargo Bedava</span>
      </div>
      
      {/* Hızlı Teslimat */}
      <div className="flex h-1 mb-5 items-center bg-green-100 p-4 rounded shadow">
        <FaShippingFast className=" mr-2 text-green-500"/>
        <span>Hızlı Teslimat</span>
      </div>
    </div>
  );
};

export default FeatureBanner;
