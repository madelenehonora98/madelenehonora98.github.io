<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-50 to-white text-gray-800 p-8"
  >
    <section
      class="p-8 bg-white shadow-md rounded-2xl max-w-2xl mx-auto text-center"
    >
      <h1 class="text-3xl font-bold text-sky-600 mb-4">Experiences</h1>


      <!-- TODO: Update using v-for -->
      <div class="experience-blibli space-y-6 mb-4">
        <div class="border border-sky-200 rounded-lg p-6">
          <div class="text-center mb-2">
            <h2 class="text-xl font-semibold text-sky-700">
              Software Development Engineer (FrontEnd Engineer)
            </h2>
            <span class="text-xl text-sky-700 font-bold">at Blibli.com</span>
            <p class="text-gray-500 italic text-sm mt-1 mb-6">
              April 2021 – Present
            </p>
          </div>
          <transition name="fade">
            <div
              v-if="expandedExp['blibli']"
              class="space-y-4 text-gray-700 leading-relaxed text-justify"
            >
              <p>
                Collaborated with design, product, and backend teams to enhance
                customer experience UI on cart, checkout, and thank-you pages.
              </p>
              <p>
                Monitored and continuously optimized
                <span class="font-semibold">Core Web Vitals</span> for cart,
                checkout, and thank-you pages to ensure consistent site
                performance improvements.
              </p>
              <p>
                Designed and implemented
                <span class="font-semibold">Vue Components Library</span> for
                reusable UI components and logic.
              </p>
              <p>
                Wrote integration tests using internal tools, utilizing
                <span class="font-semibold">Playwright</span> to ensure
                cross-component interactions run correctly.
              </p>
              <p>
                Mentored interns, providing technical guidance and career
                development support.
              </p>
            </div>
          </transition>
          <div class="flex justify-center mt-6">
            <button
              @click="expandSection('blibli')"
              class="px-5 py-2 text-[#0A66C2] border border-[#0A66C2] rounded-full font-medium text-sm hover:bg-[#0A66C2] hover:text-white transition-all duration-300"
            >
              {{ expandedExp['blibli'] ? 'Read Less' : 'Read More' }}
            </button>
          </div>
        </div>
      </div>

      <div class="experience-geekseat space-y-6">
        <div class="border border-sky-200 rounded-lg p-6">
          <div class="text-center mb-2">
            <h2 class="text-xl font-semibold text-sky-700">
              Java Programmer ( Full Stack Developer )
            </h2>
            <span class="text-xl text-sky-700 font-bold">at PT. Geekseat Indonesia</span>
            <p class="text-gray-500 italic text-sm mt-1 mb-6">
              March 2020 – March 2021
            </p>
          </div>
          <transition name="fade">
            <div
              v-if="expandedExp['geekseat']"
              class="space-y-4 text-gray-700 leading-relaxed text-justify"
            >
              <p>
                Implemented in-system messaging for ALM Metcash Agora, a virtual sales rep web application where customers and suppliers exchange information. 
              </p>
              <p>
                Developed website for Refer-it to track and monitor referrals, opportunities, and activities. 
              </p>
              <p>
                Developed leaderboard page, scheduler to calculate point using <span class="font-semibold">cron</span> and generate csv report from metrics in a virtual experience room website for V-Unite. 
              </p>
            </div>
          </transition>
          <div class="flex justify-center mt-6">
            <button
              @click="expandSection('geekseat')"
              class="px-5 py-2 text-[#0A66C2] border border-[#0A66C2] rounded-full font-medium text-sm hover:bg-[#0A66C2] hover:text-white transition-all duration-300"
            >
              {{ expandedExp['geekseat'] ? 'Read Less' : 'Read More' }}
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script src="./js/experiences.js"></script>
