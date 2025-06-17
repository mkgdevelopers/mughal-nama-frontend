'use client';

import { useEffect, useState } from 'react';
import { adminClient } from '@/lib/sanityAdmin';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(adminClient);
function urlFor(source: any) {
  return builder.image(source);
}

type ImagePoem = {
  _id: string;
  image?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
};

export default function ImageListPage() {
  const [poems, setPoems] = useState<ImagePoem[]>([]);

  const fetchImages = async () => {
    const data = await adminClient.fetch(`*[_type == "poetry" && defined(image)] | order(_createdAt desc) {
      _id,
      image
    }`);
    setPoems(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <h1 className="text-3xl font-serif font-bold text-[#f0e6d2]">🖼 All Uploaded Images</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {poems.map((poem) => (
          <div
            key={poem._id}
            className="rounded overflow-hidden border border-[#333] shadow-lg bg-[#1a1a1a]"
          >
            {poem.image?.asset && (
              <img
                src={urlFor(poem.image).width(800).url()}
                alt="Poetry Visual"
                className="w-full object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
