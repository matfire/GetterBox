import { useRouter } from "next/router";
import { useEffect } from "react";
import toast from "react-hot-toast";
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
        toast.error("Could not sign you in...")
        router.push("/login")
      }
    };
    run();
  }, [router]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <p>Signing you in, please wait...</p>
    </div>
  );
}
