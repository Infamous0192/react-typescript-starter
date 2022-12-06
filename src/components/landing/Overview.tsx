export const Overview: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-6 lg:pb-12 lg:px-8 text-center">
      <div className="mb-4">
        <div className="font-bold text-primary">Story</div>
        <h2 className="text-primary-4 text-3xl font-bold">Kisah Kami</h2>
      </div>

      <p className="text-primary-3 max-w-xl mx-auto mb-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro cum voluptate repellat
        inventore repellendus, corporis soluta laboriosam quas eveniet possimus impedit dolore
        accusamus vitae magni?
      </p>

      <div className="max-w-3xl mx-auto">
        <div className="bg-red-200 mx-auto relative aspect-w-16 aspect-h-9 w-full overflow-hidden rounded">
          <iframe
            src="https://www.youtube.com/embed/LGDG-1-pDns"
            title="How to Crochet a Scarf - no experience needed!"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
