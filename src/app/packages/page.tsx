
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Packages = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Packages Hero */}
        <section className="bg-gradient-to-r from-navy-600 to-navy-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Flexible Learning Packages</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Customized learning solutions designed to meet your educational goals
            </p>
          </div>
        </section>

        {/* Custom Packages Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-navy-800">Custom Packages Available</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer tailored packages combining multiple subjects based on your specific needs. 
                Contact us to discuss a custom learning solution that works for you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-navy-200 hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-navy-700">Subject Combinations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-navy-500 mr-2 shrink-0" />
                      <span>STEM Package (Math, Sciences, Coding)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-navy-500 mr-2 shrink-0" />
                      <span>Humanities Package (Language, Literature, History)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-navy-500 mr-2 shrink-0" />
                      <span>College Prep Package (Customized for college admissions)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-navy-500 mr-2 shrink-0" />
                      <span>Test Preparation Package (SAT, ACT, AP exams)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-navy-200 hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-navy-700">Group Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-navy-500 mr-2 shrink-0" />
                      <span>Classroom packages for schools</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-navy-500 mr-2 shrink-0" />
                      <span>Homeschool group discounts</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-navy-500 mr-2 shrink-0" />
                      <span>Study group collaborations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-navy-500 mr-2 shrink-0" />
                      <span>Teacher-led classroom supplements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Button 
                className="bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900 px-8 py-6 text-lg"
              >
                Contact Us for Custom Packages
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-navy-800">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Find answers to common questions about our learning packages
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <FaqItem 
                question="How do I know which package is right for me?"
                answer="We recommend starting with a free consultation where our education specialists can assess your needs and recommend the most suitable package."
              />
              <FaqItem 
                question="Can I change my package later?"
                answer="Yes, you can upgrade or modify your package at any time. We offer flexible solutions that grow with your educational needs."
              />
              <FaqItem 
                question="How does AI tutoring work?"
                answer="Our AI tutors analyze your learning style, strengths, and weaknesses to provide personalized instruction and practice. They adapt in real-time to your progress and needs."
              />
              <FaqItem 
                question="Are there any commitment periods?"
                answer="We offer both monthly and annual options. Annual packages provide additional benefits and savings compared to monthly packages."
              />
              <FaqItem 
                question="Are there discounts for educators or schools?"
                answer="Yes, we offer special arrangements for schools, districts, and educational institutions. Please contact our sales team for more information."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-navy-600 to-navy-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already improving their grades with NextGen AI Tutors.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Your Free Trial
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold mb-2 text-navy-700">{question}</h3>
      <p className="text-gray-600 dark:text-gray-400">{answer}</p>
    </div>
  );
};

export default Packages;
