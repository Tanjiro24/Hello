import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';
import Card from '../components/Card';
// import Button from '../components/Button';

const About: React.FC = () => {

  // const teamMembers = [
  //   {
  //     id: 1,
  //     name: 'Dr. Sarah Chen',
  //     role: 'Chief Executive Officer',
  //     image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     bio: 'Former pharmaceutical executive with 15+ years experience in drug development and regulatory affairs.',
  //   },
  //   {
  //     id: 2,
  //     name: 'Dr. Michael Rodriguez',
  //     role: 'Chief Scientific Officer',
  //     image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     bio: 'Leading researcher in dermatology with over 100 published papers and 20 patents in skincare technology.',
  //   },
  //   {
  //     id: 3,
  //     name: 'Emily Johnson',
  //     role: 'VP of Operations',
  //     image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     bio: 'Operations expert who has scaled multiple pharmaceutical companies from startup to market leader.',
  //   },
  //   {
  //     id: 4,
  //     name: 'Dr. James Wilson',
  //     role: 'Head of Research',
  //     image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     bio: 'Biochemist specializing in natural compounds and their applications in health and wellness products.',
  //   },
  // ];

  // const timeline = [
  //   {
  //     year: '2015',
  //     title: 'Company Founded',
  //     description: 'Elixir Pharma was established with a vision to revolutionize health and wellness through science-backed solutions.',
  //   },
  //   {
  //     year: '2017',
  //     title: 'First Product Launch',
  //     description: 'Successfully launched our flagship Cosmo Q Facial Serum after 2 years of intensive research and development.',
  //   },
  //   {
  //     year: '2019',
  //     title: 'FDA Registration',
  //     description: 'Achieved FDA registration for our manufacturing facilities, ensuring the highest quality and safety standards.',
  //   },
  //   {
  //     year: '2021',
  //     title: 'International Expansion',
  //     description: 'Expanded operations to serve customers in over 25 countries worldwide.',
  //   },
  //   {
  //     year: '2023',
  //     title: 'Research Partnership',
  //     description: 'Established strategic partnerships with leading universities for advanced pharmaceutical research.',
  //   },
  //   {
  //     year: '2025',
  //     title: 'Innovation Hub',
  //     description: 'Opened our new Innovation Hub in Boston, featuring state-of-the-art research laboratories.',
  //   },
  // ];

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible in health and wellness, investing heavily in R&D to bring breakthrough products to market.',
    },
    {
      icon: Heart,
      title: 'Quality',
      description: 'Every product undergoes rigorous testing and quality control processes to ensure safety, efficacy, and consistency.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do. We listen, learn, and adapt to serve their evolving needs.',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our operations, research, and business practices.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Elixir Pharma</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Pioneering the future of health and wellness through innovative pharmaceutical solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-blue-50 border-blue-200" hover>
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To enrich health and empower lives through innovative, science-backed pharmaceutical 
                solutions that make a meaningful difference in people's daily wellness journey. 
                We are committed to advancing the frontiers of health science while maintaining 
                the highest standards of safety and efficacy.
              </p>
            </Card>

            <Card className="p-8 bg-teal-50 border-teal-200" hover>
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the world's most trusted pharmaceutical company, recognized for our 
                groundbreaking innovations, unwavering commitment to quality, and positive impact 
                on global health. We envision a future where everyone has access to safe, 
                effective, and affordable healthcare solutions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Founded in 2019 by a team of passionate scientists and healthcare professionals, 
                  Elixir Pharma began with a simple yet powerful mission: to bridge the gap between 
                  cutting-edge scientific research and accessible health solutions.
                </p>
                <p>
                  Our founders recognized that many breakthrough discoveries in laboratories never 
                  reached the people who needed them most. With backgrounds in biochemistry, 
                  dermatology, and pharmaceutical manufacturing, they set out to create a company 
                  that would change this paradigm.
                </p>
                <p>
                  Today, Elixir Pharma is a leader in developing innovative skincare and wellness 
                  products that combine the latest scientific advances with natural ingredients, 
                  all rigorously tested for safety and efficacy.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Story"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide every decision we make and every product we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center" hover>
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      {/* <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals leading Elixir Pharma toward a healthier future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden" hover>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-700 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Company Timeline */}
      {/* <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A decade of innovation, growth, and commitment to improving health worldwide.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <div className="ml-12">
                    <Card className="p-6" hover>
                      <div className="flex items-center mb-2">
                        <span className="text-2xl font-bold text-blue-700 mr-4">{item.year}</span>
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Statistics */}
      {/* <section className="py-16 lg:py-24 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100">
              Numbers that reflect our commitment to excellence and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">500K+</div>
              <p className="text-blue-100">Satisfied Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">25+</div>
              <p className="text-blue-100">Countries Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
              <p className="text-blue-100">Products Developed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
              <p className="text-blue-100">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of satisfied customers who have transformed their health and wellness 
            journey with Elixir Pharma's innovative products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" className="flex items-center justify-center">
              Shop Products <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;