<template>
    <div class="px-[117px] pt-[220px]">
        <div class="flex w-fit mx-auto mb-[28px] justify-center">
            <div class="w-[10%] relative top-[40px]">
                <img src="/img/Plane.svg" class="w-full object-cover" />
            </div>
            <div class="w-[60%] text-[#000] tracking-[-1.68px] text-center text-[42px] font-[500]">
                Your <span class="text-[#034bd9]">Journey</span>, Our <span class="text-[#ffd700]">Mission</span>:
                <span class="text-[#034bd9]">Simplifying</span> Travel Planning
            </div>
            <div class="w-[10%] relative top-[-70px]">
                <img oading="lazy" src="/img/Starblue.svg" class="w-full anime_star object-cover" />
            </div>
        </div>
        <div class="mx-auto mb-[34px] text-center w-[55%] tracking-[-1.12px] text-[#000] text-[28px] font-[400]">
            Explore, budget, chat, and go, all in one place. Your adventure starts here.
        </div>
        <!--waitlist here-->
        <div class="w-[50%] input_color pr-[19px] rounded-[100px] flex items-center mx-auto">
            <div class="w-[75%] h-[76px]">
                <input type="text"
                    class="h-full bg-transparent tracking-[-0.64px] font-[400] text-[#696969] placeholder:text-[#696969] text-[16px] rounded-bl-[100px] rounded-tl-[100px] px-[19px] w-full focus:outline-none"
                    autocomplete="off" placeholder="Email address" />
            </div>
            <div
                class="py-[10px] cursor-pointer uppercase text-[#fff] tracking-[-0.64px] text-[16px] font-[400] px-[10px] text-center bg-[#034bd9] rounded-[30px] w-[25%]">
                join waitlist
            </div>
        </div>
        <!---->
    </div>
</template>

<style scoped>
.input_color {
    background: rgba(3, 75, 217, 0.06);
}

.anime_star {
    animation: rotate infinite reverse;
    animation-duration: 2000ms;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>