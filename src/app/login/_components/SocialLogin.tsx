import Image from "next/image";
import { Button } from "@/components/ui/button";
import { doSocialLogin } from "@/app/actions";

const SocialLogin = () => {
  return (
    <>
      <div className="text-center text-md mt-3 text-gray-500">
        or
      </div>
      <form action={doSocialLogin}>
        <div className="flex justify-center gap-2">
            <Button
                className="mt-4 py-4 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center cursor-pointer"
                type="submit"
                name="action"
                value="google">
            <Image src="/assets/images/google.png" alt="google" width={40} height={40} />
            <span>Continue with Google</span>
            </Button>
            {/* <Button
                className="mt-4 py-4 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center cursor-pointer"
                type="submit"
                name="action"
                value="github">
            <Image src="/assets/images/github.png" alt="google" width={40} height={40} />
            <span>Continue with Github</span>
            </Button> */}
        </div>
      </form>
    </>
  );
};

export default SocialLogin;