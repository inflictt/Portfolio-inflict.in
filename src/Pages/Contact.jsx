import { useForm } from "react-hook-form";
import emailjs, { sendForm } from "@emailjs/browser";
import { useState ,useRef} from "react";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

    const formRef= useRef()
    const [isSent, setIsSent] = useState(false);
    const [isSending,setIsSending] = useState(false)
    const sendEmail=(data, e)=>{
            setIsSending(true)
            emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            ).then(
            ()=>{
                reset()
                setIsSending(false)
                setIsSent(true)
            },
            (error)=>{
                alert("failed to send email")
                console.log(error);
                setIsSending(false)
            }
        
        )
    }

  return (
    <section
      id="contact"
      className="min-h-screen bg-black/20 flex items-center justify-center px-4 py-20"
    >
      
      <div className="w-full max-w-3xl">
        {/* Heading */}
      <div className="contact-left">
        <div className="text-center mb-10">
          <p className="text-xl text-gray-400 mb-3">GET IN TOUCH</p>
          <h3 className="font-bold text-4xl sm:text-5xl text-white">
            Let's build something
            <span className="italic text-teal-300"> amazing.</span>
          </h3>
        </div>

        {/* Card */}
        <div className="bg-zinc-900/60 border border-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-10">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm sm:text-base">
              Always thrilled to collaborate with passionate minds.
            </p>
          </div>


        
          {/* Form */}
          
          {isSent ?(
            
            <div className="flex flex-col items-center justify-center py-16 gap-5 text-center">
                <div className="w-20 h-20 rounded-full bg-teal-400/10 border border-teal-400/30 flex items-center justify-center text-5xl">
                ✅
                </div>
                <h3 className="text-2xl font-bold text-white">
                Thanks for reaching out!
                </h3>
                <p className="text-gray-400 max-w-sm">
                Your message landed safely. I'll get back within 24 hours.
                </p>
                <button
                onClick={() => setIsSent(false)}
                className="mt-4 px-6 py-2 text-teal-400 border border-teal-400/30 rounded-xl hover:bg-teal-400/10 transition-colors cursor-pointer"
                >
                Send another message
                </button>
            </div>
            ) :
    // form stgart here  
        <form
                    
          ref={formRef}
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(sendEmail)}
          >
            {/* Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-gray-500">
                Name <span className="text-teal-400">*</span>
              </label>
              <input
                id="name"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className=" bg-black/60 border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500/50 transition-colors"
              />
              {errors.name && (
                <p className="text-red-400 text-xs">{errors.name.message}</p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm text-gray-500">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                {...register("phone")}
                className="w-full bg-black/60 border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500/50 transition-colors"
              />
            </div>
</div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-gray-500">
                Email <span className="text-teal-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="yours@gmail.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email",
                  },
                })}
                className="w-full bg-black/60 border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500/50 transition-colors"
              />
              {errors.email && (
                <p className="text-red-400 text-xs">{errors.email.message}</p>
              )}
            </div>

            

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-gray-500">
                Message <span className="text-teal-400">*</span>
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Share your ideas..."
                {...register("message", { required: "Message is required" })}
                className="w-full bg-black/60 border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500/50 transition-colors resize-none"
              />
              {errors.message && (
                <p className="text-red-400 text-xs">{errors.message.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-linear-to-r from-teal-400 to-teal-600 hover:from-teal-300 hover:to-teal-500 text-black font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 cursor-pointer"
            >
                            {isSending ? (
            <div className="flex flex-col items-center justify-center ">
                <div className=" border-4 border-teal-400/20 border-t-teal-400 rounded-full animate-spin" />
                <p className="text-gray-500 font-semibold text-lg">Sending your message...</p>
                <p className="text-gray-500 text-sm">Hold tight, almost there </p>
            </div>
            ) :"Send Message"}
            </button>
          </form>}
        </div>
      </div>
      </div>
    </section>
  );
}