import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import FormInput from "../components/FormInput";
import { app } from "../utils/appwrite";
import { AUTH_REDIRECT, BASE_URL } from "../utils/constants";
import MovieCollection from "../assets/movie_collection.jpg";
import Google from "../assets/icons/google";
import Github from "../assets/icons/github";
import toast from "react-hot-toast";

export default function Login() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        await app.account.createSession(values.email, values.password);
        router.push("/dashboard");
      } catch (error) {
        toast.error("Could not log you in, please try again");
      }
    },
  });

  const triggerOAuthSignIn = (provider) => {
    app.account.createOAuth2Session(
      provider,
      `${BASE_URL}/?auth=success`,
      `${BASE_URL}/register?auth=failure`
    );
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="card bordered lg:card-side">
        <figure className="">
          <Image src={MovieCollection} alt="" />
        </figure>
        <div className="card-body lg:w-4/5">
          {/*                     <Image
                        layout="fill"
                        src="/icons/icon-512x512.png"
                        className="h-12 w-12 md:h-24 md:w-24 lg:h-32 lg:w-32 self-center mb-2"
                        alt="logo"
                    /> */}
          <h2 className="card-title text-xl font-bold text-center">
            Welcome back to GetterBox
          </h2>
          <p>Sign in using the form below or using another service</p>
          <form className="flex flex-col" onSubmit={formik.handleSubmit}>
            <FormInput
              labelText="Email"
              htmlFor="email"
              inputType="email"
              inputPlaceholder="Email"
              inputName="email"
              inputValue={formik.values.email}
              onInputChange={formik.handleChange}
            />
            <FormInput
              labelText="Password"
              htmlFor="password"
              inputName="password"
              inputPlaceholder="Password"
              inputType="password"
              inputValue={formik.values.password}
              onInputChange={formik.handleChange}
            />
            <button className="btn mt-2" type="submit">
              Submit
            </button>
          </form>
          <h4 className="mb-2 mt-4">Or use an identity provider below</h4>
          <button
            className="btn"
            onClick={() => {
              triggerOAuthSignIn("google")
            }}
          >
            <Google className="h-8 w-auto" />
            Google
          </button>
          <button
            className="btn mt-2"
            onClick={() => {
              triggerOAuthSignIn("github")
            }}
          >
            <Github className="h-8 w-auto" />
            Github
          </button>
          <div className="text-right mt-2">
            <Link href="/register">Or create an account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
