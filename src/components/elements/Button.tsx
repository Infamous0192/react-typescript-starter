import { clsx } from '@/utils/format';

const colors = {
  red: 'text-primary border-primary bg-primary',
  gray: 'text-primary-4 border-primary-4 bg-primary-4',
};

const sizes = {
  xs: 'px-3 py-1.5 text-xs',
  sm: 'px-4 py-2 text-sm',
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: keyof typeof colors;
  size?: keyof typeof sizes;
}

export const Button: React.FC<Props> = (props) => {
  const { children, color = 'gray', size = 'sm', className } = props;

  return (
    <button
      {...props}
      className={clsx(
        'font-semibold border-2 bg-opacity-0 hover:bg-opacity-5 transition rounded-sm',
        colors[color],
        sizes[size],
        className
      )}
    >
      {children}
    </button>
  );
};
