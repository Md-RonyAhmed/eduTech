import { SignupForm } from "../_components/SignupForm";

const RegisterPage = async ({ params }) => {
  const { role } = await params;
  return (
    <div className="w-full flex-col h-screen flex items-center justify-center">
      <div className="container">
        <SignupForm role={role} />
      </div>
    </div>
  );
};
export default RegisterPage;
