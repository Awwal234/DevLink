<template>
    <div class="w-full overflow-x-[hidden]">
        <div class="w-full lg:space-x-[24px] lg:flex">
            <div class="hidden bg-[#fff] px-[126.5px] py-[101.5px] rounded-[12px] w-[40%] lg:block">
                <div class="phonebg h-fit px-[23.5px] py-[43.5px]">
                    <div class="w-fit mb-[25px] mt-[20px] mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="97" height="96" viewBox="0 0 97 96" fill="none">
                            <circle cx="48.5" cy="48" r="48" fill="#EEEEEE" />
                        </svg>
                    </div>
                    <div class="bg-[#eee] mb-[13px] mx-auto w-[60%] h-[16px] rounded-[104px]"></div>
                    <div class="bg-[#eee] mb-[56px] mx-auto w-[40%] h-[8px] rounded-[104px]"></div>
                    <div class="space-y-[20px] w-full">
                        <div class="h-[44px] rounded-[8px] bg-[#eee] w-full"></div>
                        <div class="h-[44px] rounded-[8px] bg-[#eee] w-full"></div>
                        <div class="h-[44px] rounded-[8px] bg-[#eee] w-full"></div>
                        <div class="h-[44px] rounded-[8px] bg-[#eee] w-full"></div>
                    </div>
                </div>
            </div>
            <!--finished flex 1-->
            <div class="px-[20px] pb-[16px] md:pb-[0px] pt-[110px] md:pt-[0px] w-full lg:w-[60%] md:px-[0px]">
                <ContentCreatelink />
            </div>
        </div>
        <!---->
    </div>
</template>

<style scoped>
.phonebg {
    background: url('/img/devcase.png');
    background-repeat: no repeat;
    background-size: 100% 100%;
    object-fit: cover;
}
</style>