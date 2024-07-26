import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const UploadPopup = ({setPopup}) => {
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && (selectedFile.type === 'image/png' || selectedFile.type === 'image/jpeg')) {
            setFile(selectedFile);
        } else {
            alert('Please select an image file (PNG or JPEG).');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!description || !file) {
            alert('Please provide both description and an image file.');
            return;
        }

        try {
            // Create FormData object
            const formData = new FormData();
            formData.append('description', description);
            formData.append('file', file);

            // Make POST request to backend API
            const response = await axios.post('/api/api/v1/repair/newrepair', formData);

            if (response.data.success === false) {
                alert(response.data.message)
            } else if (response.data.success === true) {
                alert(response.data.message)
            }

        } catch (error) {
            // Handle error
            console.error('Error uploading popup:', error);
            alert('Error uploading popup. Please try again.');
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="bg-white w-96 p-8 rounded shadow-lg">
                <div className='flex justify-between'>
                    <h2 className="text-xl font-semibold mb-4">Repair History</h2>
                    <h2 onClick={()=>setPopup(0)} className="text-xl font-semibold mb-4 cursor-pointer">X</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Description:</label>
                        <input
                            className='border px-2 py-2 rounded-md w-full'
                            type="text"
                            placeholder='Description'
                            name="firstName"
                            value={description}
                            onChange={handleDescriptionChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Choose an image file:</label>
                        <input
                            type="file"
                            accept=".png,.jpg,.jpeg"
                            className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                        >
                            Upload
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadPopup;
