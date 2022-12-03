import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";



function App() {
  return (
  <main className="bg-white-500 px-10">

    <section className="min-h-screen">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-mono">Sleepnosis</h1>
        <ul className="flex items-center">
          <li><BsFillMoonStarsFill className="cursor-pointer text-2xl"/></li>
          <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
        </ul>
      </nav>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium">Angel Gutierrez Suarez</h2>
        <h3 className="text-2xl py-2">Developer and designer</h3>
        <p className="text-md py-5 leading-8 text-gray-800">Freelancer providing services for web development.</p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-2 text-gray-600">
        <AiFillLinkedin/>
        <AiFillGithub/>
        <AiFillInstagram/>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-2xl w-60 h-70 mt-10">
        <img src="me.png"></img>
      </div>
    </section>

    <section>
      <div>
        <h3 className="text-3xl py-1">Services I offer</h3>
        <p className="text-md py-2 leading-8 text-gray-800">It could take years to learn this all. Hours of lines read with ideas learned from eachother. The idea of creativity to bring power to ones mind and pocket.  </p>
      </div>
      <div className="text-center p-10 shadow-xl rounded-xl my-10" >
        <img className="m-auto" src="Zdvn.gif" width={120} height={120}></img>
        <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
        <p>Created front-end pages suited for any of your web ideas.</p>
        <h4 className="py-4 text-teal-600">Tools I used</h4>
        <p className="text-gray-800 py-1">JavaScript</p>
        <p className="text-gray-800 py-1">React</p>
        <p className="text-gray-800 py-1">Tailwindcss</p>
      </div>
 
      <div className="text-center p-10 shadow-xl rounded-xl my-10" >
        <img className="m-auto" src="XOsa.gif" width={120} height={120}></img>
        <h3 className="text-lg font-medium pt-8 pb-2">Back-end</h3>
        <p>Created front-end pages suited for any of your web ideas.</p>
        <h4 className="py-4 text-teal-600">Tools I used</h4>
        <p className="text-gray-800 py-1">Api</p>
        <p className="text-gray-800 py-1">Node.js</p>
        <p className="text-gray-800 py-1">MongoDb</p>
      </div>

      <div className="text-center p-10 shadow-xl rounded-xl my-10" >
        <img className="m-auto" src="earth.gif" width={100} height={100}></img>
        <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
        <p>Created front-end pages suited for any of your web ideas.</p>
        <h4 className="py-4 text-teal-600">Tools I used</h4>
        <p className="text-gray-800 py-1">Vscode</p>
        <p className="text-gray-800 py-1">React</p>
        <p className="text-gray-800 py-1">Tailwindcss</p>
      </div>
    </section>

    <section>
      <h3 className="text-3xl py-1">Portofolio</h3>
      <p className="text-md py-2 leading-8 text-gray-800">Since I have started it has been a bumpy journey. With amazing teachers, plenty of studing, and practice I have learned the basics of coding.</p>
      <marquee direction="right">        
        <img className="" src="51L5.gif" width={50} height={50}></img>
      </marquee>
      <p className="text-md py-2 leading-8 text-gray-800">Since I have started it has been a bumpy journey. With amazing teachers, plenty of studing, and practice I have learned the basics of coding.</p>


    </section>

  </main>
  );
}

export default App;
