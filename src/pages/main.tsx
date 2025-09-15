import CustomButton from "../components/CustomButton";
import Profile from "../components/Profile";

const Main: React.FC = () => {
  const linkList = [
    {
      name: "Github",
      link: "https://github.com/gksgustjq77",
    },
    {
      name: "Frontend Mentor",
      link: "https://www.frontendmentor.io/home",
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
      link: "https://www.instagram.com/hn__hs7?igsh=dnUybDdhdDA0YzRo&utm_source=qr",
    },
  ];
  return (
    <div className="">
      <div className="rounded-md bg-[hsl(0,0%,20%)] p-6">
        <div className="flex min-w-[300px] flex-col gap-4 md:min-w-[250px]">
          <div>
            <Profile></Profile>
          </div>
          {linkList.map((e) => (
            <CustomButton nameProp={e.name} linkProp={e.link}></CustomButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
