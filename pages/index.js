import Head from "next/head";
import styles from "../styles/Home.module.css";

// Components
import { JobAccordion, LogoCard } from "../components";

// logo data
import companies from "../data/companies.json";
import jobs from "../data/jobs.json";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container my-5">
        <div className="row">
          <div className="col-8">
          <h1>Jobs For Junior Devs</h1>
          <div className="row">
            {companies &&
              companies.map((company) => (
                <div className="col my-5" key={company?.id}>
                  <LogoCard
                    src={company?.src}
                    title={company?.title}
                  />
                </div>
              ))}
          </div>
          {
            jobs && jobs.map((job) => (
              <JobAccordion key={job.id} job={job} />
            ))
          }
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
