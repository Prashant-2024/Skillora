import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/api/authApi";

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerLoading,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation();
  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginLoading,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginUserMutation();

  const onChangeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleAuthentication = (type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
    console.log(inputData);
  };

  return (
    <div className="flex items-center justify-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>SignUp</CardTitle>
              <CardDescription>
                Create an account to start using our services.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  onChange={(e) => onChangeInputHandler(e, "signup")}
                  name="name"
                  value={signupInput.name}
                  type="text"
                  placeholder="Eg. rohan"
                  required="true"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={(e) => onChangeInputHandler(e, "signup")}
                  name="email"
                  value={signupInput.email}
                  type="email"
                  placeholder="Eg. xyz@gmail.com"
                  required="true"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  onChange={(e) => onChangeInputHandler(e, "signup")}
                  name="password"
                  value={signupInput.password}
                  type="password"
                  placeholder="Eg. password123"
                  required="true"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleAuthentication("signup")}>
                Create Account
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>LogIn</CardTitle>
              <CardDescription>
                Log in to your account to access your dashboard.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={(e) => onChangeInputHandler(e, "login")}
                  name="email"
                  value={loginInput.email}
                  type="email"
                  placeholder="Eg. xyz@gmail.com"
                  required="true"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  onChange={(e) => onChangeInputHandler(e, "login")}
                  name="password"
                  value={loginInput.password}
                  type="password"
                  placeholder="Eg. password123"
                  required="true"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleAuthentication("login")}>
                Get Started
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
