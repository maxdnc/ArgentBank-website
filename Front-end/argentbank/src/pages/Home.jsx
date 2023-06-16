import Banner from "../components/Banner";
import FeatureItem from "../components/FeatureItem";

//icone logo
import iconChat from "../assets/icon-chat.png";
import iconMoney from "../assets/icon-money.png";
import iconSecurity from "../assets/icon-security.png";

const Home = () => {
  return (
    <>
      <Banner />
      <section className="flex flex-col">
        <FeatureItem
          iconFeature={iconChat}
          titleFeature="You are our #1 priority"
          descriptionFeature="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <FeatureItem
          iconFeature={iconMoney}
          titleFeature="More savings means higher rates"
          descriptionFeature="The more you save with us, the higher your interest rate will be!"
        />
        <FeatureItem
          iconFeature={iconSecurity}
          titleFeature="Security you can trust"
          descriptionFeature="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
    </>
  );
};
export default Home;
