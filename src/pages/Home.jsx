export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row gap-8 p-8">
          <div className="flex justify-center lg:justify-start">
            <div className="w-52 md:w-60">
              <img
                src="/images/profile-pic.png"
                alt="Al Francis H. Daga-ang"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-3xl font-bold">Al Francis H. Daga-ang</h1>
            <p className="mt-2 text-gray-600">
              BS Computer Engineering · Cloud & Full‑Stack Developer
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-2xl">
              Cloud and full‑stack developer with hands‑on experience building scalable web
              applications, machine learning systems, and AWS‑based serverless architectures.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="p-8 space-y-6">
          <h2 className="text-2xl font-semibold">Projects & Experience</h2>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold">Telco Prediction System Website</h3>
              <p className="text-sm text-gray-500">
                Cloud & Machine Learning Developer · Nov 2025 – Dec 2025
              </p>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                <li>Deployed ML churn prediction system on AWS using Lambda, API Gateway, S3, CloudFront, and DynamoDB.</li>
                <li>Improved model performance by 75% F1‑score using Random Forest and hyperparameter tuning.</li>
                <li>Built interactive analytics dashboard for business insights.</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold">Automated Dengue Outbreak Data Pipeline</h3>
              <p className="text-sm text-gray-500">
                Cloud Developer & Data Analyst · Dec 2025
              </p>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                <li>Architected serverless ETL pipeline integrating DOH and PAGASA data sources.</li>
                <li>Processed 5+ years of epidemiological data using AWS Batch and Step Functions.</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold">Barangay 496 Web System</h3>
              <p className="text-sm text-gray-500">Web Developer · Dec 2023 – Jan 2024</p>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                <li>Built a full‑stack barangay management system serving 500+ residents.</li>
                <li>Implemented authentication and role‑based access control.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education & Leadership */}
        <div className="p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Education</h2>
            <div className="bg-white p-5 rounded-xl shadow">
              <p className="font-medium">Pamantasan ng Lungsod ng Maynila</p>
              <p className="text-sm text-gray-600">BS Computer Engineering · Expected July 2026</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Leadership</h2>
            <div className="bg-white p-5 rounded-xl shadow space-y-2">
              <p>
                <span className="font-medium">AWS Cloud Clubs Haribon</span> – Cloud & Infrastructure Lead
              </p>
              <p className="text-sm text-gray-600">
                Organized workshops, study jams, and technical training.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Sidebar */}
      <div className="w-full lg:w-1/4 bg-white p-6 mt-4 lg:mt-0">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Languages & Frameworks</h3>
            <p className="text-sm text-gray-600">Java, Spring Boot, Python, Flask, JavaScript, React</p>
          </div>

          <div>
            <h3 className="font-medium">Cloud & DevOps</h3>
            <p className="text-sm text-gray-600">AWS, Docker, Git</p>
          </div>

          <div>
            <h3 className="font-medium">Databases</h3>
            <p className="text-sm text-gray-600">MySQL, PostgreSQL, MongoDB</p>
          </div>

          <div>
            <h3 className="font-medium">Certifications</h3>
            <p className="text-sm text-gray-600">AWS Certified Cloud Practitioner</p>
          </div>
        </div>
      </div>
    </div>
  );
}
