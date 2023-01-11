import React from 'react'

const NewTask = ({ showModal }) => {
    if(!showModal) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="p-4 bg-black">
                <form className="flex flex-col gap-2">
                    <input type="text" className="rounded" />
                    <input type="text" className="rounded" />
                </form>
            </div>
            
        </div>
    );
}

export default NewTask;