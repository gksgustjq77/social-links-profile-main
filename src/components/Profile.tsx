const Profile: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            src="/images/hs.jpeg"
            alt="me"
            className="h-[125px] w-[125px] rounded-[100%]"
          ></img>
          <span className="font-semibold">Hyun Sub</span>
          <span className="font-semibold text-[hsl(75,94%,57%)]">
            Seoul, Gwanakgu
          </span>
          <span className="mb-2 mt-2 text-xs">
            "Front-end developer and avid reader."
          </span>
        </div>
      </div>
    </>
  );
};
export default Profile;
