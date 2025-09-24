// Why section: The Why's + connection to practice
const WhySection = () => {
  return (
 <section className="py-16 px-8 md:px-12 lg:px-16 bg-white relative">
  <img src="../../public/images/heart-calligraphy-style.png" alt="" className="absolute top-0 left-0 w-[150px] h-[150px] opacity-10"/>
    <img src="../../public/images/heart-calligraphy-style.png" alt="" className="absolute right-0 bottom-0 w-[150px] h-[150px] opacity-10"/>
  <div className=" mx-auto">
    <h2 className="text-center text-2xl md:text-4xl font-normal text-pink mb-6 tracking-wide">
      Je veux retrouver la complicité dans notre couple
    </h2>
    <ul className="text-lg text-gray-800 mb-6 space-y-2 list-none pl-0">
      <li><span className="text-pink font-bold mr-2">-</span>Vous avez l’impression de vivre comme des colocataires, et non comme des amoureux ?</li>
      <li><span className="text-pink font-bold mr-2">-</span>La flamme de la passion semble avoir laissé place à la routine…</li>
      <li><span className="text-pink font-bold mr-2">-</span>Les moments d'intimité sont devenus rares ou insatisfaisants…</li>
      <li><span className="text-pink font-bold mr-2">-</span>Parler de ce que l’on aime, de ce que l’on veut, est devenu mission impossible.</li>
    </ul>
    <p className="text-dark mb-4">
      Finalement, c’est comme si vous viviez avec un.e ami.e, vous ne reconnaissez plus votre partenaire de vie.
    </p>
    <p className="text-dark mb-2">
      Beaucoup de couples traversent des phases de turbulences où la distance, petit à petit, fait place à un manque de connexion.
    </p>
    <p className="text-dark font-semibold">
      Soyez rassuré(e)s, cela ne signifie pas la fin de votre histoire d'amour. Loin de là.<br />
      Cela signifie simplement qu'il est temps de réveiller l'amour et le désir qui sommeillent en vous.
    </p>
  </div>
</section>
  );
};

export default WhySection;
