import Image from 'next/image'

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-teal-200">About Us</h1>
      <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden p-8">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <Image
            src="/ti-logo-hero.jpg"
            alt="TechInsights Logo"
            width={200}
            height={200}
            className="rounded-[10%] mb-4 md:mb-0 md:mr-8"
          />
          <div>
            <h2 className="text-2xl font-bold mb-2 text-teal-300">Our Mission</h2>
            <p className="text-white leading-relaxed">
              At TechInsights, we are passionate about exploring the cutting-edge of technology. 
              Our mission is to provide insightful, accessible content on programming, AI, and the 
              latest tech trends to help you stay ahead in the rapidly evolving world of technology.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-teal-300">What We Offer</h2>
          <ul className="list-disc list-inside text-white leading-relaxed">
            <li>In-depth articles on programming languages and frameworks</li>
            <li>Explorations of artificial intelligence and machine learning concepts</li>
            <li>Analysis of emerging tech trends and their potential impacts</li>
            <li>Practical tutorials and code examples</li>
            <li>A community-driven platform for discussion and learning</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2 text-teal-300">Join Our Community</h2>
          <p className="text-white leading-relaxed">
            We believe in the power of community-driven learning. Join us in our journey to 
            unravel the complexities of technology. Whether you are a seasoned developer or just 
            starting out, there is always something new to discover at TechInsights.
          </p>
        </div>
      </div>
    </div>
  )
}

