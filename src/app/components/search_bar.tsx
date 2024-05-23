'use client';
import { FaSearch } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
            router.push(`/result?search=${searchQuery}`);
            setSearchQuery('')
        }
    };

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch();
        }
    };
    
    return (
        <div className="fixed bottom-14 right-10">
            <form className="" action="">
                <input className="pl-4" type="text" value={searchQuery} onChange={handleInputChange} onKeyPress={handleKeyPress} placeholder="Search" />
                <label className="inline-block translate-y-3 text-2xl text-stone-100 rounded-full bg-test5 p-2 cursor-pointer" onClick={handleSearch}>
                    <FaSearch />
                </label>
            </form>
        </div>
    )
}

export default SearchBar;