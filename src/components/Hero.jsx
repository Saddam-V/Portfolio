import img1 from "../assets/images/img1.png";
import Button from "./Button";
import Head1 from "./Head1";
import Head2 from "./Head2";
import Social from "./Social";
import Text from "./Text";
import ImageRounded from "./ImageRounded";

export default function Hero() {
  return (
    <section className="min-h-screen bg-color-1 flex justify-center md:items-center flex-col md:flex-row pl-16 md:pl-0">
      <ImageRounded image={img1} />
      <div className="mt-7 text-color-3 w-4/5 md:w-1/3 md:ml-24 md:mt-0">
        <Head1 className="pb-2" text={"Hi, It's "} specialText={"Shafin"} />
        <Head2
          className="pb-9"
          specialArray={["Software Engineer", "Software Developer", "Front-End Developer", "Web Developer", "React Developer"]}
        />
        <Text
          text="Software Developer with 2 years of relevant experience in development. Seeking a position at your reputed company, where I bring my development skills to support your mission."
          className="pb-2"
        />
        <Social />
        <div className="w-60 md:w-64 flex md:justify-around justify-around">
          <Button text={"Hire Me"} hrefLink={"#"} type="primary"></Button>
          <Button text={"Download CV"} hrefLink={"#"} type=""></Button>
        </div>
      </div>
    </section>
  );
}
