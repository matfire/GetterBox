import Lottie from "lottie-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import boxAnimation from "../../assets/animations/box_packaging.json";
import { app } from "../../utils/appwrite";

export default function Callback() {
  const router = useRouter();
  useEffect(() => {
    const run = async () => {
      try {
        const user = await app.account.get();
        console.log(user);
        router.push("/dashboard");
      } catch (error) {
        //TODO proper error handling
        console.error(error);
      }
    };
    run();
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {/* <Lottie className="w-1/2 h-1/2" animationData={boxAnimation} />
       */}
      <p>Signing you in, please wait...</p>
    </div>
  );
}
