const UserRoles = {
  EMPLOYER: "employer",
  JOBSEEKER: "jobseeker",
};

const JobTypes = {
  FULL_TIME: "Full-time",
  PART_TIME: "Part-time",
  CONTRACT: "Contract",
  REMOTE: "Remote",
};

const CompanySizes = {
  SMALL: "1-50",
  MEDIUM: "51-200",
  LARGE: "201-500",
  ENTERPRISE: "500+",
};

// Example objects (since JS has no interfaces)
const exampleUser = {
  id: "123",
  email: "user@example.com",
  name: "John Doe",
  role: UserRoles.EMPLOYER,
  company: "Tech Corp",
};

const exampleJob = {
  id: "456",
  title: "Software Engineer",
  company: "Tech Corp",
  location: "New York, USA",
  type: JobTypes.FULL_TIME,
  description: "Develop and maintain web applications.",
  requirements: ["JavaScript", "React", "Node.js"],
  salary: "$80,000 - $100,000",
  posted: new Date(), // Using Date object instead of string
  skills: ["JavaScript", "React", "Node.js"],
  companyLogo: "https://example.com/logo.png",
};

const exampleCompany = {
  id: "789",
  name: "Tech Corp",
  logo: "https://example.com/logo.png",
  description: "A leading tech company.",
  industry: "Software",
  size: CompanySizes.LARGE,
  location: "San Francisco, USA",
  website: "https://techcorp.com",
};

// Example Usage
console.log(exampleUser, exampleJob, exampleCompany);
