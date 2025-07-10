import Layout from "../components/Layout";
import authBg from "../assets/images/authbg.png";
import { Button } from "../components/Button";
import { Icon } from "../assets/icons/Icon";
import { AuthInput, TextInput } from "../components/inputs";
import { DropDown } from "../components/DropDown";

export const AgentSignUp = () => {
  //   const options = [
  //   { id: "1", option: "Estate Agent" },
  //   { id: "2", option: "Property Developer" },
  //   { id: "3", option: "Property Owner" },
  // ];
  return (
    <div>
          <Layout>
      <div className="relative min-h-screen ">
        <div className="w-full h-full absolute ">
          <img src={authBg} className="w-full h-full object-cover" alt="authbg" />
        </div>

        <main className="relative flex lg:flex-row flex-col space-y-6 py-14 lg:px-16  w-full min-h-screen justify-between items-center z-10 text-white">
          <div className="font-montserrat flex lg:w-[45%] w-full flex-col lg:items-start items-center lg:gap-14 md:px-6">
            <div className="flex md:flex-row flex-col lg:text-left  text-center  w-full item-center lg:justify-start justify-center space-x-2 ">
              <p className="md:text-[20px] text-[18px]">Here to find a place, not list one?</p>
              <span className="text-[18px] md:text-[20px] text-primarycolor">
                <a href="/userSign-up">Sign up </a> <span className="text-white">/</span>  <a href="userSign-In"> Login</a>
              </span>
            </div>
            <div className="text-center lg:text-left">
              <h1 className="md:text-[48px] font-inter text-[30px] font-bold leading-tight ">
             Have a <span className="text-primarycolor">Property</span> to list? 
            </h1>
            <p className="md:text-[24px] text-[21px] font-[300] font-montserrat">Reach thousands of clients in one place faster and safer.</p>
            </div>
            
          </div>

          <div className="lg:w-[60%] md:px-14 py-10 bg-blurblue backdrop-blur-sm rounded-xl px-3 mx-3">
            <div className="flex flex-col gap-4 items-center">
              <h1 className="text-[32px] font-semibold font-inter">Create an account</h1>
              <div className="text-{20px] flex flex-row space-x-2 font-thin font-montserrat">
               <p> Already have an account?</p>
                <a href="agentSign-in" className="text-primarycolor">Login</a>
              </div>
              <div className="flex flex-col items-center lg:flex-row justify-around lg:gap-10 gap-3">
                <Button
                  leftIcon={<Icon sort="google" />}
                  className={"border-white text-white text-[16px]"}
                  label="Sign Up with Google"
                  bgVariant="outline"
                  onClick={() => {
                    // sign up with google
                  }}
                />
                <Button
                  leftIcon={<Icon sort="facebook" />}
                  className={"border-white text-white"}
                  label="Sign Up with Facebook"
                  bgVariant="outline"
                  onClick={() => {
                    // sign up with google
                  }}
                />
              </div>

              <div className="flex items-center">
                <hr className="w-36" />
                <p className="px-3">Or</p>
                <hr className="w-36" />
              </div>
            </div>
            <div>
              <form action="" className="flex flex-col  gap-2">
                <TextInput
                  placeholder="Johndoe"
                  label="Full name"
                  type="text"
                  // onChange={(e) => e.target}
                 
                />
                <TextInput
                  placeholder="johndoe@gmail.com"
                  label="Email Address"
                  type="email"
                  // onChange={()=> void }
                  
                />
                <AuthInput
                  label="Password"
                  placeholder="Enter password"
                  //  onChange={(e) => e.target}
                  type="password"
                  errorLog="Must be atleast 8 character"
                />
                <AuthInput
                  label="Confirm Password"
                  placeholder="enter password"
                  //  onChange={(e) => e.target}
                  type="password"
                />
                <DropDown />
                
                <p className="text-[16px]">
                  By creating an account, you are agreeing to our{" "}
                  <span className="text-primarycolor">
                    Terms and condition policy
                  </span>{" "}
                </p>
                <div className="w-full">
                  <Button
                    label="Register"
                    bgVariant="primary"
                    className={'w-3/5 mx-auto'}
                    onClick={() => {
                      // handleSubmit
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </Layout>
    </div>
  )
}
