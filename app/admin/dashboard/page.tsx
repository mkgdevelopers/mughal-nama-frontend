'use client';

import { useState } from 'react';
import { adminClient } from '@/lib/sanityAdmin';

export default function PoetryImageUploader() {
  const [image, setImage] = useState<File | null>(null);
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) return;

    try {
      const uploaded = await adminClient.assets.upload('image', image);

      await adminClient.create({
        _type: 'poetry',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: uploaded._id,
          },
        },
      });

      setImage(null);
      setSuccess('✅ Image uploaded successfully!');
    } catch (err) {
      console.error('Image upload failed:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212] text-white p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg w-full max-w-sm space-y-4"
      >
      <p>Add New Image</p>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="w-full p-3 rounded border border-gray-600 bg-[#2a2a2a]"
          required
        />
        <button
          type="submit"
          className="w-full bg-[#f0e6d2] text-black py-2 rounded hover:bg-[#e2d3b0] font-semibold"
        >
          Upload Image
        </button>
        {success && (
          <p className="text-green-400 text-sm text-center">{success}</p>
        )}
      </form>
    </div>
  );
}
