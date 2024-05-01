import image from "../../../assets/images/a7c916596e30117cc376620019087ff8.png";

const Login = () => {
  return (
    <div className="  grid grid-cols-2     h-screen bg-black">
      <div className=" container-form m-7 ">

        <div className="div-icons  text-white flex ">

          <div className="rounded-full border-8 border-white w-20 h-20 flex justify-center items-center ">
            <i className="fas fa-times text-5xl  "></i>
          </div>
          <div className="rounded-full border-8 border-white w-20 h-20 flex justify-center items-center ">
            <i className="fas fa-check text-5xl p-2 "></i>
          </div>

          <h2 className="text-6xl">|Quizwiz</h2>


        </div>
       <p className=" text-white text-4xl mt-9 Light-Chartreuse">Continue your learning journey with QuizWiz!</p>



      </div>

      <div className=" container-image">
        <div className=" m-7  rounded-lg bg-Light-Salmon-Pink">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
