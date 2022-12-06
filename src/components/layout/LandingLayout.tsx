import { IconMenu2 } from '@tabler/icons';
import { Outlet } from 'react-router-dom';

export const LandingLayout: React.FC = () => {
  return (
    <div className="w-full">
      <div className="w-full border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-3">
          <div className="flex items-center">
            <button className="flex flex-col items-center justify-center text-primary-4">
              <IconMenu2 size={24} />
              <p className="text-xs font-playfair">Menu</p>
            </button>
          </div>
          <img
            src="/belyesha-header.png"
            alt="Logo Belyesha"
            loading="eager"
            width={125}
            height={60}
            className="mx-auto"
          />
          <div></div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};
