import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignIn } from '../../hooks/auth/useAuth';
import { SignForm } from "./Components/SignForm";
import { Logo } from "../../components/Common/Logo";
import { MainErrors } from "../../components/MainErrors";

export default function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, error, isSuccess } = useSignIn();

  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate({ email, password })
  };

  if (isSuccess) {
    nav("/konto")
  }

  return (
    <main className="min-h-screen md:bg-purple-950 flex items-center">
      <div className="w-full min-h-full max-w-[430px] px-4 md:pb-12 md:px-12 mx-auto bg-white md:border md:rounded-lg">

        <div className="text-center">
          <div className="flex justify-center py-8 mb-8 border-b-[0.5px] border-purple-950">
            <Logo />
          </div>

          <div className="mb-12">
            <h1 className="text-[20px] mb-2">Logga in</h1>
            <p className="text-[14px] text-center">Logga in med din e-postadress eller registrera dig</p>
          </div>
        </div>

        {error?.type !== "VALIDATION" && (
          <MainErrors errors={error?.msg} />
        )
        }
        <SignForm
          handleSubmit={handleSubmit}
          setEmail={setEmail}
          setPassword={setPassword}
          btn={"Logga in"}
          error={error}
        />

        <div className="text-center">
          <p>Har du inget konto?<Link to={""} className="font-normal md:hover:text-purple-800"> Registrera</Link></p>
        </div>
      </div>
    </main>
  );
}
