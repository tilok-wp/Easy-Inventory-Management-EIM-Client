import React from 'react';
import { FolderAddIcon, ViewBoardsIcon, PuzzleIcon, DocumentAddIcon, TrashIcon, RefreshIcon, TruckIcon, AdjustmentsIcon } from '@heroicons/react/solid'

const Features = () => {
    return (
        <section className='my-10 py-20 bg-sky-50 px-3 md:px-0'>
            <div className='container mx-auto'>
                <h3 className='text-center text-3xl uppercase mb-10'>Features</h3>
                <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-5'>
                    <div className='border border-slate-100 bg-white rounded-2xl py-10 flex flex-col justify-center items-center'>
                        <AdjustmentsIcon className="h-14 w-14 text-color-primary hover:text-gray-800" />
                        <h3 className='lg:text-xl'>Manage all product</h3>
                    </div>
                    <div className='border border-slate-100 bg-white rounded-2xl py-10 flex flex-col justify-center items-center'>
                        <DocumentAddIcon className="h-14 w-14 text-color-primary hover:text-gray-800" />
                        <h3 className='lg:text-xl'>Product Add</h3>
                    </div>
                    <div className='border border-slate-100 bg-white rounded-2xl py-10 flex flex-col justify-center items-center'>
                        <TrashIcon className="h-14 w-14 text-color-primary hover:text-gray-800" />
                        <h3 className='lg:text-xl'>Product Delete</h3>
                    </div>
                    <div className='border border-slate-100 bg-white rounded-2xl py-10 flex flex-col justify-center items-center'>
                        <RefreshIcon className="h-14 w-14 text-color-primary hover:text-gray-800" />
                        <h3 className='lg:text-xl'>Stock update</h3>
                    </div>
                    <div className='border border-slate-100 bg-white rounded-2xl py-10 flex flex-col justify-center items-center'>
                        <TruckIcon className="h-14 w-14 text-color-primary hover:text-gray-800" />
                        <h3 className='lg:text-xl'>Product delivered</h3>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Features;