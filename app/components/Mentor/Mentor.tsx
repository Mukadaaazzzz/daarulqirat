"use client"
import * as React from "react";

const AboutInstitution = () => {
  return (
    <div id="about-section" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The <span className="text-amber-600">Daarul-Qirat</span> Tradition
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Where authentic Islamic knowledge meets contemporary education
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-amber-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Distinct Approach</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">✓</div>
                </div>
                <p className="ml-3 text-gray-700">
                  <span className="font-medium">Balanced Curriculum:</span> Combining classical Islamic sciences with modern educational methodologies
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">✓</div>
                </div>
                <p className="ml-3 text-gray-700">
                  <span className="font-medium">Personalized Learning:</span> Tailored programs for students at all levels of understanding
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">✓</div>
                </div>
                <p className="ml-3 text-gray-700">
                  <span className="font-medium">Community Focus:</span> Developing scholars who serve as beacons in their communities
                </p>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Core Values</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900">Authenticity</h4>
                <p className="mt-1 text-gray-600">Teaching rooted in Quran, Sunnah, and classical scholarly tradition</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Excellence</h4>
                <p className="mt-1 text-gray-600">Commitment to the highest standards of academic and spiritual development</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Accessibility</h4>
                <p className="mt-1 text-gray-600">Making sacred knowledge available to all seekers regardless of background</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-gray-50 p-8 rounded-2xl text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Guided by Vision</h3>
            <p className="text-gray-700 mb-6">
              Under the leadership of Imam Oladiti Abdulkabir Alamalyaqeen, our institution maintains its commitment to preserving Islamic tradition while addressing contemporary challenges. With over two decades of scholarly dedication, Imam Alamalyaqeen ensures our curriculum remains both authentic and relevant.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInstitution;