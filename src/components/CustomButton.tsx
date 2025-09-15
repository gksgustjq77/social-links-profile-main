interface CustomButtonProps {
  nameProp: string;
  linkProp: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ nameProp, linkProp }) => {
  return (
    <>
      <div className="w-full rounded-md bg-[hsl(0,0%,12%)] p-2">
        <button className="w-full text-white">{nameProp}</button>
      </div>
    </>
  );
};

export default CustomButton;
