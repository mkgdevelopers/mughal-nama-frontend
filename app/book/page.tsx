import { client } from '@/lib/sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

type Poetry = {
  _id: string;
  image?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
};

async function getPoetry() {
  const query = `*[_type == "poetry"] | order(_createdAt desc){
    _id,
    image
  }`;
  return await client.fetch(query);
}

export default async function BookPage() {
  const poetrySections: Poetry[] = await getPoetry();

  return (
    <main className="min-h-screen bg-[#1b1b1b] text-white py-10 px-4 md:px-10 grid gap-10 max-w-5xl mx-auto">
      {poetrySections.map((section) => (
        <div key={section._id} className="shadow-xl overflow-hidden rounded-xl border border-[#2f2f2f] bg-[#121212]">
          {section.image?.asset && (
            <img
              src={urlFor(section.image).width(1000).url()}
              alt="Poetry"
              className="w-full object-cover"
            />
          )}
        </div>
      ))}
    </main>
  );
}
