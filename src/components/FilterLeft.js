import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const categories = [
    'T-Shirt',
    'Yüz Güneş Kremi',
    'Pantolon',
    'Sneaker',
    'Omuz Çantası',
    'Elektronik',
    'Giyim',
    'Ev Eşyaları',
    'Kozmetik',
    'Spor Malzemeleri',
    'Kitap',
    'Oyuncak',
    'Mobilya',
];

const brands = [ 
    'Stradivarius',
    'Karaca',
    'Philips',
    'Maybelline New York',
    'La Roche Posay',
    'Sleepy',
    'Xiaomi',
    'Penti',
    'Defacto',
    'Güldal',
    'Rinso',
    'Bingo',
    'Yumoş',
    'Sleepy',
    'Domestos',
    'Omo',
    'Cif',
    'Asperox',
    'Perwoll',
    'Mintax',
];

const sizes = [
    '2XS', 'Standart', 'Yeni Doğan', 'XS', 'S', 
    '3-6 Ay', 'M', '6-9 Ay', 'L', '9-12 Ay', 
    'XL', '12-18 Ay', '2XL', '18-24 Ay', '3XL'
];

const FilterLeft = () => {
    const [showMoreCategories, setShowMoreCategories] = useState(false);
    const [searchBrand, setSearchBrand] = useState('');
    const [checkedBrands, setCheckedBrands] = useState({});
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
    const [showMoreSizes, setShowMoreSizes] = useState(false);
    const [searchSize, setSearchSize] = useState('');

    const handleBrandChange = (brand) => {
        setCheckedBrands((prev) => ({
            ...prev, [brand]: !prev[brand],
        }));
    };

    const handleSearch = () => {
        console.log(`Searching brands: ${searchBrand}, Price Range: ${minPrice} - ${maxPrice}`);
    };

    return (
        <div className="p-4 border-r ml-10 border-gray-200 flex flex-col h-screen overflow-y-auto">
            {/* İlgili Kategoriler */}
            <div className='mb-6 w-full'>
                <h3 className='font-semibold mb-2 text-base'>İlgili Kategoriler</h3>
                <ul>
                    {categories.slice(0, showMoreCategories ? categories.length : 5).map((category, index) => (
                        <li key={index} className='text-sm text-gray-700 mb-1'>{category}</li>
                    ))}
                </ul>
                <button 
                    onClick={() => setShowMoreCategories(!showMoreCategories)} 
                    className='text-orange-400 hover:underline text-sm'
                >
                    {showMoreCategories ? 'Daha Az Göster' : 'Daha Fazla Göster'}
                </button>
            </div>

            {/* Marka */}
            <div className='mb-6 w-full'>
                <h3 className='font-semibold mb-2'>Marka</h3>
                <input 
                    type='text' 
                    placeholder=' Marka ara' 
                    className='border border-gray-300 w-full bg-gray-50 rounded mb-2' 
                    value={searchBrand} 
                    onChange={(e) => setSearchBrand(e.target.value)} 
                />
                <div className="max-h-40 overflow-y-auto border border-gray-300 rounded p-2 w-full">
                    {brands.filter((brand) => brand.toLowerCase().includes(searchBrand.toLowerCase()))
                        .slice(0, 30).map((brand) => (
                            <label key={brand} className="flex text-nowrap text-sm text-gray-700 items-center mb-1">
                                <input 
                                    type="checkbox" 
                                    checked={checkedBrands[brand] || false} 
                                    onChange={() => handleBrandChange(brand)} 
                                    className="mr-2" 
                                />
                                {brand}
                            </label>
                        ))}
                </div>
            </div>

            {/* Fiyat */}
            <div className='mb-6 w-full'>
                <h3 className='font-semibold mb-2'>Fiyat</h3>
                <div className='flex items-center mb-2'>
                    <input 
                        type='number' 
                        placeholder='En Az' 
                        className='border text-xs text-center border-gray-300 w-16 p-1 bg-gray-50 rounded mr-2' 
                        value={minPrice} 
                        onChange={(e) => setMinPrice(e.target.value)} 
                    />
                    <input 
                        type='number' 
                        placeholder='En Çok' 
                        className='border text-xs text-center border-gray-300 w-16 p-1 bg-gray-50 rounded mr-2' 
                        value={maxPrice} 
                        onChange={(e) => setMaxPrice(e.target.value)} 
                    />
                    <button 
                        onClick={handleSearch} 
                        className='bg-gray-300 text-white rounded p-1 flex items-center'
                    >
                        <FaSearch className="h-5 w-5" />
                    </button>
                </div>
                <div className="flex flex-col text-nowrap text-sm text-gray-700">
                    {['0 TL - 100 TL', '100 TL - 250 TL', '250 TL - 450 TL', '450 TL - 1000 TL', '1000 TL - 6000 TL', '6000 TL - 10000 TL'].map((range) => (
                        <label key={range} className="flex items-center mb-1">
                            <input 
                                type="radio" 
                                checked={selectedPriceRange === range} 
                                onChange={() => setSelectedPriceRange(range)} 
                                className="mr-2 rounded-full" 
                            />
                            {range}
                        </label>
                    ))}
                </div>
            </div>

            {/* Beden */}
            <div className='mb-6 w-full'>
                <h3 className='font-semibold mb-2'>Beden Ara</h3>
                <input 
                    type='text' 
                    placeholder='Beden ara' 
                    className='border border-gray-300 w-full bg-gray-50 rounded mb-2' 
                    value={searchSize}
                    onChange={(e) => setSearchSize(e.target.value)}
                />
                <div className="max-h-40 overflow-y-auto flex flex-col text-nowrap text-sm text-gray-700">
                    {sizes.filter(size => size.toLowerCase().includes(searchSize.toLowerCase()))
                        .slice(0, showMoreSizes ? sizes.length : 8).map((size) => (
                            <label key={size} className="flex items-center mb-1">
                                <input 
                                    type="checkbox" 
                                    className="mr-2" 
                                />
                                {size}
                            </label>
                        ))}
                </div>
                {sizes.length > 8 && (
                    <button 
                        onClick={() => setShowMoreSizes(!showMoreSizes)} 
                        className='text-orange-400 hover:underline text-sm mt-2'
                    >
                        {showMoreSizes ? 'Daha Az Göster' : 'Daha Fazla Göster'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default FilterLeft;
