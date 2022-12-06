import { Button } from '../elements';

export const About: React.FC = () => {
  return (
    <section className="py-6 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex md:flex-row flex-col gap-6 md:gap-12">
          <div className="w-full md:w-1/2">
            <div className="aspect-w-16 aspect-h-9 w-full h-full bg-gray-400 rounded-md"></div>
          </div>
          <div className="md:w-1/2">
            <div className="text-primary font-bold">About</div>
            <h2 className="font-bold text-3xl text-primary-4 mb-4">Tentang Belyasha</h2>

            <p className="text-primary-3 mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, nobis nostrum.
              Suscipit, dolores soluta, provident magnam doloribus, perspiciatis ad quaerat
              distinctio praesentium obcaecati quos autem?
            </p>

            <Button color="red">Selengkapnya</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
