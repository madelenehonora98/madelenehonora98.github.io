<template>
  <div
    v-if="isExpanded"
    class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
    @click="toggleSidebar"
  ></div>
  <aside
    :class="[
      'min-h-screen bg-sky-600 text-white flex flex-col py-8 transition-all duration-300 z-50',
      'fixed md:relative top-0 left-0',
      isExpanded ? 'w-60' : '-translate-x-full md:translate-x-0 md:w-20'
    ]"
  >
    <div class="flex justify-end px-4 mb-4">
      <button
        @click="toggleSidebar"
        class="p-2 hover:bg-sky-500 rounded-lg transition-colors"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            v-if="isExpanded"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <div class="flex flex-col items-center mb-4">
      <img
        src="@/assets/img/profile.jpg"
        alt="Profile"
        :class="[
          'rounded-full shadow-lg transition-all duration-300',
          isExpanded ? 'w-24 h-24' : 'w-12 h-12'
        ]"
      />
      <h2 v-if="isExpanded" class="text-xl font-bold mt-4 text-center">
        Madelene Honora
      </h2>
    </div>

    <nav class="flex flex-col gap-2 w-full px-4">
      <router-link
        to="/"
        :class="[
          'flex items-center gap-3 hover:bg-sky-500 rounded-lg py-2 transition-all duration-200',
          isExpanded ? 'px-3' : 'px-2 justify-center'
        ]"
        :title="!isExpanded ? 'About' : ''"
      >
        <svg
          class="w-5 h-5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <span v-if="isExpanded">About</span>
      </router-link>

      <router-link
        to="/skills"
        :class="[
          'flex items-center gap-3 hover:bg-sky-500 rounded-lg py-2 transition-all duration-200',
          isExpanded ? 'px-3' : 'px-2 justify-center'
        ]"
        :title="!isExpanded ? 'Skills & Tools' : ''"
      >
        <svg
          class="w-5 h-5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
        <span v-if="isExpanded">Skills & Tools</span>
      </router-link>

      <!-- TODO: Update Projects and uncomment below codes -->
      <!-- <router-link
        to="/projects"
        :class="[
          'flex items-center gap-3 hover:bg-sky-500 rounded-lg py-2 transition-all duration-200',
          isExpanded ? 'px-3' : 'px-2 justify-center'
        ]"
        :title="!isExpanded ? 'Projects' : ''"
      >
        <svg
          class="w-5 h-5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        <span v-if="isExpanded">Projects</span>
      </router-link> -->

      <router-link
        to="/experiences"
        :class="[
          'flex items-center gap-3 hover:bg-sky-500 rounded-lg py-2 transition-all duration-200',
          isExpanded ? 'px-3' : 'px-2 justify-center'
        ]"
        :title="!isExpanded ? 'Experiences' : ''"
      >
        <svg
          class="w-5 h-5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span v-if="isExpanded">Experiences</span>
      </router-link>

      <!-- TODO: Create new section for achievements-->

      <router-link
        to="/contact"
        :class="[
          'flex items-center gap-3 hover:bg-sky-500 rounded-lg py-2 transition-all duration-200',
          isExpanded ? 'px-3' : 'px-2 justify-center'
        ]"
        :title="!isExpanded ? 'Contact' : ''"
      >
        <svg
          class="w-5 h-5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span v-if="isExpanded">Contact</span>
      </router-link>

      <a
        href="https://www.linkedin.com/in/madelene-honora/"
        target="_blank"
        :class="[
          'flex items-center gap-3 hover:bg-sky-500 rounded-lg py-2 transition-all duration-200',
          isExpanded ? 'px-3' : 'px-2 justify-center'
        ]"
        :title="!isExpanded ? 'Linkedin' : ''"
      >
        <svg
          class="w-5 h-5 flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d='M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z'
          />
        </svg>
        <span v-if="isExpanded">Linkedin</span>
      </a>
    </nav>
  </aside>
</template>

<script src="./js/sidebar.js"></script>
