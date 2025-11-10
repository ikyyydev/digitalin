import { Billboard as BillboardType } from "@/common/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="overflow-hidden">
      <div
        className="relative aspect-square md:aspect-[2.6/1] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
