import Job from "./Job";

const Jobs = (props) => {
  console.log(props);
  return (
    <div className="jobs_div">
      <Job
        className="job_div red"
        title="Full Time Sales Associate - Sydney Boutique"
        contractTyp="CDI"
        country="Australie"
        city="Sydney"
      />
      <Job
        className="job_div green"
        title="Agent de Sécurité - Pantin"
        contractType="CDI"
        country="France"
        city="Pantin"
      />

      <Job
        className="job_div yellow"
        title="Responsable d'Atelier (H/F)"
        contractType="CDD"
        country="France"
        city="Paris"
      />

      <Job
        className="job_div blue"
        title="Chef de Projets"
        contractType="CDD"
        country="France"
        city="Paris"
      />

      <Job
        className="job_div pink"
        title="Développeur React.js"
        contractType="CDI"
        country="France"
        city="Paris"
      />

      <Job
        className="job_div red"
        title="Sales Associate Stockholm"
        contractType="CDI"
        country="Suède"
        city="Stockholm"
      />

      <Job
        className="job_div green"
        title="Vendeur/se - Crans Montana"
        contractType="CDI"
        country="Suisse"
        city="Crans-Montana"
      />

      <Job
        className="job_div yellow"
        title="CRM & Data Quality Analyst"
        contractType="CDI"
        country="USA"
        city="New York"
      />

      <Job
        className="job_div blue"
        title="Infirmier (H/F)"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
    </div>
  );
};
export default Jobs;
