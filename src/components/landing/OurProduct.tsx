import { IconArrowRight } from '@tabler/icons';

import { formatCurrency } from '@/utils/format';

import { Button } from '../elements';

export const OurProduct: React.FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-6 lg:pb-12 lg:px-8">
        <div className="mb-8 text-center">
          <div className="font-bold text-primary">Out Product</div>
          <h2 className="text-primary-4 text-3xl font-bold">Produk Terkini Kami</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="">
            <div className="aspect-w-3 aspect-h-4 bg-gray-200 mb-2 rounded-md"></div>
            <h3 className="text-primary-4 font-bold font-body mb-1">Chocho Hijab</h3>
            <div className="text-primary font-bold align-middle flex items-center leading-none">
              {formatCurrency(50000)} <IconArrowRight size={16} className="inline ml-2" />
            </div>
          </div>
          <div className="">
            <div className="aspect-w-3 aspect-h-4 bg-gray-200 mb-2 rounded-md"></div>
            <h3 className="text-primary-4 font-bold font-body mb-1">Chocho Hijab</h3>
            <div className="text-primary font-bold align-middle flex items-center leading-none">
              {formatCurrency(50000)} <IconArrowRight size={16} className="inline ml-2" />
            </div>
          </div>
          <div className="">
            <div className="aspect-w-3 aspect-h-4 bg-gray-200 mb-2 rounded-md"></div>
            <h3 className="text-primary-4 font-bold font-body mb-1">Chocho Hijab</h3>
            <div className="text-primary font-bold align-middle flex items-center leading-none">
              {formatCurrency(50000)} <IconArrowRight size={16} className="inline ml-2" />
            </div>
          </div>
          <div className="">
            <div className="aspect-w-3 aspect-h-4 bg-gray-200 mb-2 rounded-md"></div>
            <h3 className="text-primary-4 font-bold font-body mb-1">Chocho Hijab</h3>
            <div className="text-primary font-bold align-middle flex items-center leading-none">
              {formatCurrency(50000)} <IconArrowRight size={16} className="inline ml-2" />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <Button color="red" className="!bg-primary text-white">
            Lihat Koleksi
          </Button>
        </div>
      </div>
    </section>
  );
};
