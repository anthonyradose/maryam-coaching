// import { motion } from "motion/react"

// The How to Fix section
const HowToFixSection = () => {
  return (
    <section className=" bg-[url('../../public/images/wave-haikei(5).svg')] lg:bg-[url('../../public/images/wave-gray.svg')]  bg-cover bg-center flex flex-col items-center">
      <div className=" mx-auto flex flex-col lg:flex-row lg:items-center lg:w-full lg:justify-between p-8">
     
       <p className="text-center  text-[1.5rem] leading-snug py-8 lg:mx-[5rem] bp1440:ml-[10rem]">
    <span className="italic">Comment la</span><br />
    <span className="font-bold ">therapie de couple</span><br />
    peut <span className="font-bold">vous</span> aider<br />
    <span className="italic ">à faire <span className="font-bold">renaître</span></span><br />
    cette <span className="text-pink-500 font-bold text">étincelle</span> ?
  </p>
    
        <ul className="howtofix-list text-base text-gray-800  space-y-2 my-8 ml-4 bp1440:mr-12">
          <li>Identifier et
            comprendre les sources de vos conflits
          </li>
          <li>
           Exprimer vos
            attentes et vos émotions en toute sécurité
          </li>
          <li>
          Vous sentir
            compris(e) et écouté(e)
          </li>
          <li>
           Communiquer
            sans jugements ni reproches avec bienveillance
          </li>
          <li>
          Comprendre
            vos besoins en tant qu’homme et en tant que femmes
          </li>
          <li>
        Trouver des
            solutions adaptées à votre situation et à vos objectifs
          </li>
          <li>
        Renforcer
            votre intimité et votre complicité dans la douceur et la tendresse.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HowToFixSection;
