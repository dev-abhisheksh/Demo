
import { ArrowRight, PlayCircle } from 'lucide-react'; // Assuming you use Lucide or Heroicons

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-32 lg:pt-24 lg:pb-40">
      {/* Background Decorator Blob - Optional */}
      <div className="absolute top-0 right-0 -z-10 transform-gpu opacity-20 blur-3xl" aria-hidden="true">
        <div className="aspect-[1100/700] w-[68.75rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" 
             style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} 
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 items-center">
          
          {/* Left Content Column */}
          <div className="max-w-2xl lg:max-w-none">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
              <span>v2.0 is now live</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
              Elevate your workflow with <span className="text-indigo-600">intelligent automation.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg leading-8 text-slate-600 mb-8">
              Stop wasting time on manual tasks. Our platform syncs your team, organizes your data, and predicts your next move before you make it.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              
              <button className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-all">
                <PlayCircle className="mr-2 h-4 w-4 text-slate-500" />
                Watch Demo
              </button>
            </div>
            
            {/* Social Proof / Trust Text */}
            <div className="mt-10 border-t border-slate-100 pt-6">
              <p className="text-sm text-slate-500">Trusted by over 4,000 companies worldwide.</p>
            </div>
          </div>

          {/* Right Image/Visual Column */}
          <div className="relative lg:pt-0">
             <div className="relative rounded-2xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="App Dashboard Preview"
                  className="w-full rounded-md shadow-2xl ring-1 ring-slate-900/10"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;