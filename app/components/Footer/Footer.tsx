import Link from "next/link";

const footer = () => {
  return (
    <footer className="bg-bgpurple pt-20 pb-10 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center">
       

        {/* MISSION TEXT */}
        <p className="text-sm mb-6">
          Learn to recite the Qur’an beautifully with proper Tajweed and deep understanding. Join our growing community.
        </p>

       

        {/* COPYRIGHT */}
        <p className="mt-10 text-xs text-offwhite">
          © {new Date().getFullYear()} Daaru Qirat — All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default footer;
