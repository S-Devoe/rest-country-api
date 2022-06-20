import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoIosArrowRoundBack } from "react-icons/io";
import DataFormatter from "../context/DataFormatter";

const CountryDetails = ({ country }: any) => {
  const router = useRouter();

  const language = country.languages.map((language: string, index: any) => (
    <span key={`demo_snap_${index}`} className={"languages"}>
      {(index ? ", " : "") + language}
    </span>
  ));

  const goBack = () => {
    router.back();
  };

  return (
    <section className="country">
      <div className="wrapper">
        <div className="back_button">
          <button className="go-back" type="button" onClick={() => goBack()}>
            <span>
              <IoIosArrowRoundBack />
            </span>
            Back
          </button>
        </div>

        <div className="content">
          <div className="flag">
            <Image
              src={country.flag}
              alt={`${country.name} flag`}
              layout="fill"
              priority={true}
              quality={100}
              objectFit="cover"
            />
          </div>
          <div className="details">
            <h1>{country.name}</h1>
            <div className="lists">
              <ul>
                <li>
                  native name: <span> {country.nativeName} </span>
                </li>
                <li>
                  population:
                  <span> {DataFormatter.formatNumber(country.population)}</span>
                </li>
                <li>
                  region: <span> {country.region} </span>
                </li>
                <li>
                  sub region: <span> {country.subRegion === null ? "No sub region" : country.subRegion } </span>
                </li>
                <li>
                  capital:<span> {country.capital} </span>
                </li>
                <li>
                  top level domain:{" "}
                  <span>
                    {" "}

                    {country.topLevelDomain === null? "no top level domain" : country.topLevelDomain.map((tl: string) => tl)}{" "}
                  </span>
                </li>
                <li>
                  currencies:<span> {country.currencies} </span>
                </li>
                <li>
                  languages: <span> {language}</span>
                </li>
              </ul>
            </div>

            <div className="borders">
              <h2>Border Country(s):</h2>
              <div className="border_countries">
                {typeof country.borders === 'object'
                  ? country.borders.map((border: string, index: number) => (
                      <Link
                        key={index}
                        href={`/countries/${DataFormatter.countryNameToUri(
                          border
                        )}`}
                      >
                        <span>{border}</span>
                      </Link>
                    ))
                  : "This country has no border country"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CountryDetails;
