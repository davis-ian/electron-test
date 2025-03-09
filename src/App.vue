<template>
  <div
    class="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
  >
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="relative px-4 py-10 bg-white dark:bg-gray-800 shadow-lg sm:rounded-3xl sm:p-20"
      >
        <div class="max-w-md mx-auto">
          <div class="divide-y divide-gray-200 dark:divide-gray-700">
            <div
              class="py-8 text-base leading-6 space-y-4 sm:text-lg sm:leading-7"
            >
              <h1
                class="text-3xl font-bold text-center mb-8 text-primary-light dark:text-primary-dark"
              >
                Electron + Vue 3 + TypeScript + Tailwind CSS
              </h1>
              <p class="text-center">
                Edit <code class="bg-gray-100 p-1 rounded">src/App.vue</code> to
                test HMR
              </p>

              <!-- Theme Controls -->
              <div class="flex flex-col gap-4">
                <button
                  @click="toggleMode"
                  class="px-4 py-2 bg-primary-light dark:bg-primary-dark text-white rounded hover:opacity-90"
                >
                  Toggle {{ mode === "light" ? "Dark" : "Light" }} Mode
                </button>

                <div class="flex gap-2 justify-center">
                  <button
                    v-for="theme in availableThemes"
                    :key="theme"
                    @click="setColorTheme(theme)"
                    :class="[
                      'px-4 py-2 rounded capitalize',
                      colorTheme === theme
                        ? 'ring-2 ring-primary-light dark:ring-primary-dark'
                        : '',
                    ]"
                  >
                    {{ theme }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from "./composables/useTheme";

const { mode, colorTheme, toggleMode, setColorTheme, availableThemes } =
  useTheme();

const handleClick = (): void => {
  toggleMode();
};
</script>

<style>
#app {
  @apply min-h-screen w-full;
}
</style>
