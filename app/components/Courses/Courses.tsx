"use client";

import * as React from "react";

const daarulQiratCourses = [
  {
    level: "Kindergarten",
    titleEn: "Arabic Spelling",
    titleAr: "تهجئة عربية",
    descriptionEn: "Learn Arabic letters and their pronunciation.",
    descriptionAr: "تعلم الحروف العربية ونطقها الصحيح."
  },
  {
    level: "Primary Class",
    titleEn: "Core Islamic Sciences (5 Subjects)",
    titleAr: "العلوم الإسلامية الأساسية (٥ مواد)",
    descriptionEn : "Hadith, Tajweed, Arabic Language, Fiqh, and Hifz.",
    descriptionAr : "الحديث، التجويد، اللغة العربية، الفقه، وغيرها."
  },
 
  {
    level: "Preliminary Class",
    titleEn: "Islamic Studies (12 Subjects)",
    titleAr: "دروس تمهيدية (١٢ مادة)",
    descriptionEn:
      "Nahw, Tawheed, Tafsir, Sarf, Fiqh, Shi'er, Arabic Language, Hadith, Adhkar, Inshaa, Seerah, Tajweed.",
    descriptionAr:
      "النحو، التوحيد، التفسير، الصرف، الفقه، الشعر، اللغة العربية، الحديث، الأذكار، الإنشاء، السيرة، التجويد."
  },
  {
    level: "Senior Class",
    titleEn: "Advanced Islamic Sciences (16 Subjects)",
    titleAr: "الدروس المتقدمة (١٦ مادة)",
    descriptionEn:
      "Tawheed, Nahw, Uloom al-Qur'an, Balagha, Fiqh, Sarf, Usool al-Fiqh, Arud, Hadith, Arabic Language, Mustalah al-Hadith, Adab, Seerah, Tajweed, Ilm al-Mawarith, Nusus al-Shi'ru.",
    descriptionAr:
      "التوحيد، النحو، علوم القرآن، البلاغة، الفقه، الصرف، أصول الفقه، العروض، الحديث، اللغة العربية، مصطلح الحديث، الأدب، السيرة، التجويد، علم المواريث، نصوص الشعر."
  }
];

const DaarulQiratCourses = () => {
  return (
    <div className="bg-white py-20 px-6 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
        Our Certified Programs at Daarul Qirat
      </h2>
      <div className="grid gap-10 lg:grid-cols-2">
        {daarulQiratCourses.map((course, idx) => (
          <div
            key={idx}
            className="border border-gray-200 shadow-xl p-6 rounded-2xl hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-purple-700 mb-1">
              {course.level}
            </h3>
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              {course.titleEn} <span className="text-sm text-gray-400">| {course.titleAr}</span>
            </h4>
            <p className="text-gray-600 mb-1">{course.descriptionEn}</p>
            <p className="text-right text-sm text-gray-500 italic">{course.descriptionAr}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaarulQiratCourses;