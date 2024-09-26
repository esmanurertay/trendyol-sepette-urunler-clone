import React from 'react';
import {FaBars} from 'react-icons/fa';

const Navbar = () => {
  const navItems = [
    { name: 'Kadın' },
    { name: 'Erkek' },
    { name: 'Anne&Çocuk' },
    { name: 'Ev&Yaşam' },
    { name: 'Süpermarket' },
    { name: 'Kozmetik' },
    { name: 'Ayakkabı&Çanta' },
    { name: 'Elektronik' },
    { name: 'Çok Satanlar', new: true },
    { name: 'Flaş Ürünler', new: true }
  ];

  return (
    <nav className="flex w-[90%] ml-[3%] space-x-16 border-b-2 p-4">
            {/* Tüm Kategoriler Başlığı ve Menü İkonu */}
            <div className="flex items-center group ">
        <FaBars className="mr-2 group-hover:text-orange-400 text-lg" />
        <h2 className="font-semibold text-lg text-nowrap group-hover:text-orange-400 transition duration-500">Tüm Kategoriler<span className='bg-red-500 text-white text-xs font-bold ml-2 px-2 py-1 rounded-full'>Yeni</span></h2>
      </div>
      <div className="container mx-auto w-full flex justify-between items-center text-nowrap">
        <ul className="flex space-x-4">
          {navItems.map((item, index) => (
            <li key={index} className="flex items-center">
              <a href="#" className="text-black hover:text-orange-400 hover:transition duration-500 font-semibold text-sm">{item.name}</a>
              {item.new && (
                <span className="bg-red-500 text-white text-xs font-bold ml-2 px-2 py-1 rounded-full">
                  Yeni
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
