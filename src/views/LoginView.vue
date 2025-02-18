<script setup>
import { ref } from 'vue';

const showPassword = ref(false);

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}
</script>

<template>
  <div class="min-h-screen flex">
    <div class="bg-[#F8EAFF] hidden sm:flex flex-1 flex-col justify-center">
      <div class="mx-auto p-12">
        <img src="/img/logo.svg" alt="Logo" class="w-[198px]" />
        <div class="mt-10">
          <img src="/img/happy-people.png" alt="happy people" />
        </div>
        <div class="text-center">
          <h1 class="text-[#61227D] font-bold text-xl leading-[44px] mt-10">Team Achieve</h1>
          <p class="text-[#5E5E5E] mt-1 text-lg">Your perfect solution for funding your desires</p>
        </div>
      </div>
    </div>
    <div class="flex-1 flex flex-col justify-center bg-[#FCFCFC]">
      <div class="mx-auto p-8">
        <img src="/img/logo.svg" alt="Logo" class="sm:hidden mx-auto mb-10 w-[198px]" />
        <div class="text-center">
          <h1 class="text-[#61227D] font-bold text-2xl sm:text-[32px] leading-[44px]">Welcome Back</h1>
          <p class="text-[#5E5E5E] mt-1 text-sm sm:text-base">Enter your email address and password to access your account.</p>
        </div>
          <form class="mt-8 space-y-6">
            <div>
              <label for="email" class="block text-[#5E5E5E] text-sm sm:text-base">Email Address <span class="text-red-500">*</span></label>
              <input type="email" id="email" class="w-full border border-[#E5E5E5] text-sm sm:text-base rounded-[8px] px-4 py-2" />
            </div>
            <div>
              <label for="password" class="block text-[#5E5E5E] text-sm sm:text-base">Password <span class="text-red-500">*</span></label>
              <div class="relative">
                <input :type="showPassword ? 'text' : 'password'" id="password" class="w-full border border-[#E5E5E5] text-sm sm:text-base rounded-[8px] pl-4 p-2 pr-10" />
                <span @click="togglePasswordVisibility" class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                  <font-awesome-icon :icon="showPassword ? 'eye-slash' : 'eye'" />
                </span>
              </div>
            </div>
            <div>
              <div class="flex justify-between items-center">
                <label for="remember" class="text-[#5E5E5E] text-sm sm:text-base">
                <input type="checkbox" id="remember" />
                Remember me</label>

                <router-link to="/forgot-password" class="text-[#61227D] text-sm">Forgot password?</router-link>
              </div>
            </div>
            <div>
              <button type="submit" class="w-full bg-[#61227D] text-white rounded-[8px] p-2">Sign in</button>
            </div>
            <div class="text-center">
              Don't have an account? <router-link to="/register" class="text-[#61227D] font-semibold">Sign up</router-link>
            </div>
          </form>
      </div>
    </div>
  </div>
</template>

<style>

</style>
