import LoginForm from "../components/form/LoginForm";

export default function LoginPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">Login Page</h1>
      <p className="text-center mt-4">Please use the form below to log in.</p>
      <LoginForm />
    </div>
  );
}
