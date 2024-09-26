import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import FeatureBanner from './FeatureBanner';

const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const sortOptions = [
    'En düşük fiyat',
    'En yüksek fiyat',
    'En yeniler',
    'En çok satanlar',
    'En çok beğenilenler',
    'En çok değerlendirilenler',
  ];

  return (
      <div className='w-full'>
        <div className='flex flex-row w-full justify-between mt-5 ml-3'>
        <div className=''>
        <span className='text-black font-medium'>"Sepette Ürünler"</span> araması için <span className="font-bold">1477 sonuç</span> listeleniyor
      </div>

      {/* Önerilen Sıralamalar */}
      <div className="relative border border-r border-gray-200 p-2 rounded-md w-[22.5%] mr-3 mb-4">
        <div
          className="flex items-center justify-between cursor-pointer space-x-2 text-gray-700"
          onClick={toggleDropdown}
        >
          <span className="text-sm">Önerilen sıralama</span>
          <IoIosArrowDown className={`text-gray-500 transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>

        {isOpen && (
          <div className="absolute z-10 mt-3 -ml-[3.8%] w-full bg-white border border-gray-300 rounded shadow-lg">
            <ul className="py-1 text-sm text-gray-600">
              {sortOptions.map((option, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
                  onClick={() => {
                    console.log(option); // Sıralama seçildiğinde yapılacak işlemler
                    setIsOpen(false); // Dropdown'u kapat
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
        </div>
   
      <div className='w-full'>
        <FeatureBanner/>
    </div>
    </div>
    
   
  );
};

export default SortDropdown;
