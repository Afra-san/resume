import { motion } from 'framer-motion';
export default function Home() {
  return (
    <div className="w-full h-screen bg-[#F5F5F4] flex items-start justify-center">

        <motion.div initial={{ opacity: 0, translateY: 200 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 1, type: "tween" }}
                    className="w-7/12 h-3/5 bg-stone-200 rounded-lg relative chom sm:w-4/12 sm:h-3/4"></motion.div>
        <motion.h1 initial={{ opacity: 0}}
                   animate={{ opacity: 1}}
                   transition={{ duration: 2, type: "tween" }}
                   className='text-xolor text-4xl font-light absolute transform-1 md:text-6xl'>محمد افرا</motion.h1>
        <motion.h2 initial={{ opacity: 0}}
                   animate={{ opacity: 1}}
                   transition={{ duration: 1.5, type: "tween" }}
                   className="text-xolor text-xl font-light absolute transform-2 sm:text-3xl">Front-end Developer</motion.h2>
        <motion.p  initial={{ opacity: 0}}
                   animate={{ opacity: 1}}
                   transition={{ duration: 3, type: "tween" }}
                   className="text-xolor font-light text-sm absolute transform-3 text-end md:text-lg">
         من محمد افرا ـم ، توسعه دهنده فرانت اند و  <br />
         دیزاینر و گاهی موشن دیزاینر ، اوایل سال 2021 <br />
         وارد دنیایی وب و برنامه نویسی وب شدم و قدم<br />
          های فرانت اند دولوپر شدن رو یکی یکی طی کردم <br />
          ،  و درحال کار با ری اکت جی اس هستم<br />
        </motion.p>




    </div>
  )
}
