interface CustomButtonProps {
  nameProp: string;
  linkProp: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ nameProp, linkProp }) => {
  const handleLink = () => {
    if (linkProp) {
      window.open(linkProp, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="w-full rounded-md bg-[hsl(0,0%,12%)]">
      <button
        onClick={handleLink}
        className="w-full border-none p-2 font-semibold text-white outline-none hover:bg-[hsl(75,94%,57%)] hover:text-[hsl(0,0%,8%)] focus:outline-none focus:ring-0"
      >
        {nameProp}
      </button>
    </div>
  );
};

export default CustomButton;
