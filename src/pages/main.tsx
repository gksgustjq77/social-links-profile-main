import CustomButton from "../components/CustomButton";

const Main: React.FC = () => {
  const linkList = [
    {
      name: "Github",
      link: "",
    },
    {
      name: "Frontend Mentor",
      link: "",
    },
    {
      name: "Linkedin",
      link: "",
    },
    {
      name: "Twitter",
      link: "",
    },
    {
      name: "Instargram",
      link: "",
    },
  ];
  return (
    <>
      <div className="rounded-md bg-[hsl(0,0%,20%)] p-6">
        <div className="flex min-w-[250px] flex-col gap-4">
          {linkList.map((e) => (
            <CustomButton nameProp={e.name} linkProp={e.link}></CustomButton>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
