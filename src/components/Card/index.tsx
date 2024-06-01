export interface ICard {
  id: string;
  title: string;
  children: React.ReactNode;
  image: string;
}

export function Card({ id, children, title, image }: ICard) {
  return (
    <div className="flex gap-4">
      <img src={image} alt={title} className="w-28"/>
      <div className="flex flex-col justify-between">
        <p className="text-blue-grayish font-semibold text-3xl">{id}</p>
        <p className="text-blue-very-dark 
        font-extrabold text-lg hover:text-red-soft
         cursor-pointer transition-colors">{title}</p>
        <p className="text-[#98979d]">{children}</p>
      </div>
    </div>
  );
}
