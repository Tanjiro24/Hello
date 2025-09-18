// import React, { useState } from 'react';
import { Clock, DollarSign, Calendar } from "lucide-react";
// import Button from '../components/Button';
// import Card from '../components/Card';

const Career: React.FC = () => {
  //   const [selectedJob, setSelectedJob] = useState<number | null>(null);
  // const [applicationForm, setApplicationForm] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   position: '',
  //   resume: null as File | null,
  //   coverLetter: '',
  // });

  //   const jobs = [
  //     {
  //       id: 1,
  //       title: 'Senior Research Scientist',
  //       department: 'Research & Development',
  //       location: 'Boston, MA',
  //       type: 'Full-time',
  //       salary: '$85,000 - $110,000',
  //       posted: '2 days ago',
  //       description: 'Lead innovative research projects in pharmaceutical development. Collaborate with cross-functional teams to develop cutting-edge skincare and wellness solutions.',
  //       requirements: [
  //         'Ph.D. in Chemistry, Biology, or related field',
  //         '5+ years experience in pharmaceutical research',
  //         'Experience with clinical trials and regulatory processes',
  //         'Strong analytical and problem-solving skills',
  //       ],
  //       responsibilities: [
  //         'Design and execute research experiments',
  //         'Analyze data and prepare scientific reports',
  //         'Collaborate with regulatory affairs team',
  //         'Mentor junior researchers',
  //       ],
  //     },
  //     {
  //       id: 2,
  //       title: 'Quality Assurance Manager',
  //       department: 'Quality Control',
  //       location: 'Chicago, IL',
  //       type: 'Full-time',
  //       salary: '$70,000 - $90,000',
  //       posted: '1 week ago',
  //       description: 'Oversee quality assurance processes to ensure all products meet FDA standards and company quality requirements.',
  //       requirements: [
  //         "Bachelor's degree in Chemistry or related field",
  //         '3+ years experience in pharmaceutical QA',
  //         'Knowledge of FDA regulations and GMP',
  //         'Strong attention to detail',
  //       ],
  //       responsibilities: [
  //         'Develop and implement QA procedures',
  //         'Conduct product inspections and testing',
  //         'Maintain compliance with regulatory standards',
  //         'Train staff on quality procedures',
  //       ],
  //     },
  //     {
  //       id: 3,
  //       title: 'Digital Marketing Specialist',
  //       department: 'Marketing',
  //       location: 'Remote',
  //       type: 'Full-time',
  //       salary: '$55,000 - $75,000',
  //       posted: '3 days ago',
  //       description: 'Drive digital marketing initiatives to increase brand awareness and customer engagement across multiple channels.',
  //       requirements: [
  //         "Bachelor's degree in Marketing or related field",
  //         '2+ years experience in digital marketing',
  //         'Experience with SEO, SEM, and social media',
  //         'Strong analytical skills',
  //       ],
  //       responsibilities: [
  //         'Develop and execute digital marketing campaigns',
  //         'Manage social media presence',
  //         'Analyze campaign performance and ROI',
  //         'Collaborate with creative team',
  //       ],
  //     },
  //     {
  //       id: 4,
  //       title: 'Clinical Data Coordinator',
  //       department: 'Clinical Research',
  //       location: 'San Francisco, CA',
  //       type: 'Full-time',
  //       salary: '$60,000 - $80,000',
  //       posted: '5 days ago',
  //       description: 'Coordinate clinical trial data collection and ensure data integrity throughout the research process.',
  //       requirements: [
  //         "Bachelor's degree in Life Sciences or related field",
  //         '2+ years experience in clinical research',
  //         'Knowledge of GCP and clinical trial processes',
  //         'Strong organizational skills',
  //       ],
  //       responsibilities: [
  //         'Coordinate clinical trial activities',
  //         'Maintain accurate clinical data records',
  //         'Ensure compliance with study protocols',
  //         'Communicate with study sites and investigators',
  //       ],
  //     },
  //     {
  //       id: 5,
  //       title: 'Manufacturing Technician',
  //       department: 'Production',
  //       location: 'Denver, CO',
  //       type: 'Full-time',
  //       salary: '$40,000 - $55,000',
  //       posted: '1 week ago',
  //       description: 'Support manufacturing operations and ensure efficient production of pharmaceutical products.',
  //       requirements: [
  //         'High school diploma or equivalent',
  //         '1+ years experience in manufacturing',
  //         'Knowledge of GMP practices',
  //         'Ability to work in a fast-paced environment',
  //       ],
  //       responsibilities: [
  //         'Operate manufacturing equipment',
  //         'Monitor production processes',
  //         'Maintain accurate production records',
  //         'Follow safety and quality procedures',
  //       ],
  //     },
  //   ];

  //   const handleApplicationSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     const formDataToSend = new FormData();
  //     formDataToSend.append("name", applicationForm.name);
  //     formDataToSend.append("email", applicationForm.email);
  //     formDataToSend.append("phone", applicationForm.phone);
  //     formDataToSend.append("position", applicationForm.position);
  //     formDataToSend.append("coverLetter", applicationForm.coverLetter);
  //     if (applicationForm.resume) {
  //       formDataToSend.append("resume", applicationForm.resume);
  //     }

  //     const response = await fetch("https://formspree.io/f/yourFormID", {
  //       method: "POST",
  //       body: formDataToSend, // don't stringify
  //     });

  //     if (response.ok) {
  //       alert("✅ Application submitted successfully!");
  //       setApplicationForm({
  //         name: "",
  //         email: "",
  //         phone: "",
  //         position: "",
  //         resume: null,
  //         coverLetter: "",
  //       });
  //     } else {
  //       alert("⚠️ Submission failed. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting application:", error);
  //     alert("⚠️ Network error. Please try again later.");
  //   }
  // };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0] || null;
  //   setApplicationForm({ ...applicationForm, resume: file });
  // };

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   setApplicationForm({ ...applicationForm, [e.target.name]: e.target.value });
  // };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Be part of a innovative team dedicated to improving health and
            wellness through groundbreaking pharmaceutical solutions.
          </p>
        </div>

        {/* Company Benefits */}
        <div className="bg-blue-700 text-white rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Competitive Salary</h3>
              <p className="text-sm text-blue-100">
                Industry-leading compensation packages
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Flexible Schedule</h3>
              <p className="text-sm text-blue-100">
                Work-life balance with flexible hours
              </p>
            </div>
            {/* <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Multiple Locations</h3>
              <p className="text-sm text-blue-100">Offices across the country</p>
            </div> */}
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Growth Opportunities</h3>
              <p className="text-sm text-blue-100">
                Career development and advancement
              </p>
            </div>
          </div>
        </div>

        {/* Careers Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Careers</h2>
          <div className="border-t-2 border-blue-700 w-24 mb-6"></div>

          <div className="space-y-6 text-gray-700 max-w-4xl">
            <p>
              We are constantly looking for new leaders to join our team and
              build the way towards a better future for the company. We want
              people who like to explore, have a can-do attitude at all times
              and strive to do better every day because they want to make a
              difference in people’s lives. But most importantly, we look for
              people who want to grow with us.
            </p>

            <p>
              Our success is attributed to the efficient and committed staff
              working together towards a common goal. We believe in engaging
              people who share our values and in recognizing & rewarding a job
              well done.
            </p>

            <p>
              We continuously strive to provide inspiring leadership and a
              workplace that encourages knowledge sharing. We believe in
              empowering our employees, presenting them with new challenges and
              letting them grow and develop professionally.
            </p>

            {/* Email CTA */}
            <p className="font-medium text-gray-900">
              Interested in joining us? Send your resume to{" "}
              <a
                href="mailto:admin@elixirpharma.ph"
                className="text-blue-600 hover:underline"
              >
                admin@elixirpharma.ph
              </a>
            </p>
          </div>
        </div>

        {/* Job Listings */}
        {/* <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Open Positions</h2>
          <div className="space-y-6">
            {jobs.map((job) => (
              <Card key={job.id} className="overflow-hidden" hover>
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between">
                    <div className="flex-1 mb-4 lg:mb-0 lg:mr-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-600">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {job.salary}
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {job.department}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      
                      {selectedJob === job.id && (
                        <div className="mt-6 space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                              {job.requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Responsibilities:</h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                              {job.responsibilities.map((resp, index) => (
                                <li key={index}>{resp}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="text-center lg:text-right">
                      <p className="text-sm text-gray-500 mb-4">Posted {job.posted}</p>
                      <div className="space-y-2">
                        <Button
                          variant="outline"
                          onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                        >
                          {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() => {
                            setApplicationForm({ ...applicationForm, position: job.title });
                            document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Application Form */}
        {/* <div id="application-form">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Apply for a Position</h2>
            <form onSubmit={handleApplicationSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={applicationForm.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={applicationForm.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={applicationForm.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                    Position *
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={applicationForm.position}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a position</option>
                    {jobs.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                  Resume *
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  required
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>

              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                  Cover Letter
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={applicationForm.coverLetter}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Submit Application
              </Button>
            </form>
          </Card>
        </div> */}
      </div>
    </div>
  );
};

export default Career;
