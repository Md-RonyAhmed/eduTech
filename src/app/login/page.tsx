import { LoginForm } from "./_components/LoginForm";
import SocialLogin from "./_components/SocialLogin";

const LoginPage = () => {
  return (
    <div className="w-full flex-col h-screen flex items-center justify-center">
      <div className="container">
        <LoginForm />
        <SocialLogin/>
      </div>
    </div>
  );
};
export default LoginPage;