<template>
    <div class="w-full notify_container py-[138px]">
        <div class="text-[#000] mx-auto mb-[24px] w-[35%] text-center text-[42px] tracking-[-1.68px]">
            Get notified when
            Plan-It launches
        </div>
        <div class="text-[#000] mb-[45px] mx-auto font-[400] text-center w-[40%] text-[32px] tracking-[-1.28px]">
            Input your details below and we
            will send you a notification when the app launches.
        </div>
        <div class="w-[55%] mb-[28px] mx-auto">
            <input type="text" autocomplete="off" placeholder="Your Name"
                class="w-full text-[#696969] font-[400] tracking-[-0.96px] text-[24px] py-[25px] bg-[#fff] px-[40px] rounded-[80px] focus:outline-none" />
        </div>
        <div class="w-[55%] mb-[44px] mx-auto">
            <input type="email" autocomplete="off" placeholder="Your Email"
                class="w-full text-[#696969] font-[400] tracking-[-0.96px] text-[24px] py-[25px] bg-[#fff] px-[40px] rounded-[80px] focus:outline-none" />
        </div>
        <div
            class="w-fit text-[#fff] cursor-pointer text-[24px] tracking-[-0.96px] font-[400] mx-auto py-[10px] px-[45.5px] text-center rounded-[30px] bg-[#034bd9]">
            Submit
        </div>
    </div>
</template>

<style scoped>
.notify_container {
    background: rgba(255, 215, 0, 0.32);
}
</style>