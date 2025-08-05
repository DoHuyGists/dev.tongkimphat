<script setup lang="ts">
import { BiSolidPhoneCall } from "vue-icons-plus/bi";
import { BsFacebook } from "vue-icons-plus/bs";
import { CiSearch } from "vue-icons-plus/ci";
import { Fa6FacebookMessenger } from "vue-icons-plus/fa6";
import { SiZalo } from "vue-icons-plus/si";
</script>

<template>
    <div class="bg-[#0B3E06] py-2 sticky top-0">
        <div class="text-white flex gap-3 justify-end mx-2 md:mx-12 lg:mx-30">
            <div class="flex gap-2"><BiSolidPhoneCall /> 0837926986</div>
            <div class="flex gap-2"><BiSolidPhoneCall /> 09189300</div>
        </div>
    </div>
    <header class="flex gap-3 justify-between md:items-center mx-2 md:mx-12 lg:mx-30">
        <img src="/tongkimphat.logo.jpg" class="w-30 hidden md:block" alt="Tòng Kim Phát Logo" />
        <nav class="flex gap-2 md:gap-6 lg:gap-13 md:items-center text-center py-2 text-sm md:text-lg justify-between md:justify-end w-full">
            <router-link class="hover:border-b-1" to="/">Trang chủ</router-link>
            <router-link class="hover:border-b-1" to="/">Hotline</router-link>
            <router-link class="hover:border-b-1" to="/">Giải đáp thắc mắc</router-link>
            <router-link class="hover:border-b-1" to="/">Tuyển dụng</router-link>
            <CiSearch />
        </nav>
    </header>
    <router-view></router-view>
    <div class="fixed bottom-12 md:bottom-4 left-4 text-white flex gap-4">
        <div class="bg-[#0B3E06] w-fit p-2 rounded flex gap-2 shadow-2xl"><BiSolidPhoneCall /> 0837926986</div>
        <div class="bg-[#0B3E06] w-fit p-2 rounded flex gap-2 shadow-2xl"><BiSolidPhoneCall /> 09189300</div>
    </div>
    <footer class="py-4 bg-[#0B3E06] text-white">
        <div class="mx-2 md:mx-12 lg:mx-30">
            <div class="mb-3"><img src="/tongkimphat.logo.jpg" class="w-20" alt="Tòng Kim Phát Logo" /></div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div class="flex flex-col">
                    <div class="font-semibold text-xl mb-3">
                        Công Ty Trách Nhiệm Hữu Hạn <br />
                        Tòng Kim Phát
                    </div>
                    <div class="flex flex-col gap-2">
                        <router-link class="hover:border-white border-transparent border-b-1" to="/">Dịch vụ</router-link>
                        <router-link class="hover:border-white border-transparent border-b-1" to="/">Hotline</router-link>
                        <router-link class="hover:border-white border-transparent border-b-1" to="/">Giải đáp thắc mắc</router-link>
                        <router-link class="hover:border-white border-transparent border-b-1" to="/">Tuyển dụng</router-link>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="font-semibold text-xl mb-3">Liên kết nhanh</div>
                    <div class="flex gap-4">
                        <div><BsFacebook /></div>
                        <div><Fa6FacebookMessenger /></div>
                        <div><SiZalo /></div>
                    </div>
                </div>
                <div class="flex flex-col md:col-span-2 lg:col-span-1">
                    <div class="font-semibold text-xl mb-3">Bản đồ</div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.726246862278!2d106.60737077585705!3d10.832249289319908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bc9600235d5%3A0xa9d9745f5fa8e4c!2zMzA5IGEgxJAuIFBoYW4gVsSDbiBI4bubbiwgVMOibiBUaOG7m2kgTmjhuqV0LCBRdeG6rW4gMTIsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1754302562033!5m2!1svi!2s"
                        height="400"
                        style="border: 0"
                        allowfullscreen="true"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </footer>
    <div class="py-6 text-center md:text-right lg:text-center px-4 text-lg font-bold">Bản quyền 2025 - Tòng Kim Phát</div>
</template>
