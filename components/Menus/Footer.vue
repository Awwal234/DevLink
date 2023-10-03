<script setup lang="ts">
import { ref } from 'vue'
import footer from '../../utils/footer.json'
const footers = ref([]) as any
footers.value = footer

const dateNow = new Date()
//@ts-ignore
const year = dateNow.getFullYear() as any;
const getyear = ref('') as any
getyear.value = year
</script>

<template>
    <div class="footer_container pb-[27.09px]">
        <div class="flex mb-[153px] items-center justify-between">
            <div class="w-[40%]">
                <div class="text-[#000] mb-[43.5px] text-[32px] font-[500] tracking-[-1.28px]">
                    Start using <span class="text-[#034bd9]">Plan-It</span> today.
                </div>
                <div class="flex border-b p-[14.5px] border-[#000] w-full items-center">
                    <div class="w-full h-fit">
                        <input placeholder="Email Address"
                            class="text-[#696969] bg-[transparent] text-[18px] tracking-[-0.72px] font-[400] w-[90%] focus:outline-none"
                            type="email" />
                    </div>
                    <div class="w-[10%]">
                        <img src="/img/fly.svg" class="float-right cursor-pointer" />
                    </div>
                </div>
                <!--first flex done-->
            </div>
            <div>
                <img src="/img/Plane.svg" class="w-full fly_rotate object-cover" />
            </div>
        </div>
        <!--flex 1 complete-->
        <div class="flex mb-[98px] items-center space-x-[20px]">
            <div class="w-[40%]">
                <div class="mb-[20.01px]"><img src="/img/PlanitLogo.svg" class="" /></div>
                <div class="text-[#4d4d4d] tracking-[-0.96px] text-[24px] font-[400]">
                    Your adventure starts here
                </div>
            </div>
            <div class="flex w-[60%] space-x-[80.54px]">
                <div class="space-y-[20.54px]">
                    <div class="text-[24px] cursor-pointer tracking-[-0.96px] font-[400] text-[#000]">{{ footer[0].name }}
                    </div>
                    <div class="text-[24px] cursor-pointer tracking-[-0.96px] font-[400] text-[#000]">{{ footer[1].name }}
                    </div>
                    <div class="text-[24px] cursor-pointer tracking-[-0.96px] font-[400] text-[#000]">{{ footer[2].name }}
                    </div>
                </div>
                <!--2-->
                <div class="space-y-[20.54px]">
                    <div class="text-[24px] cursor-pointer tracking-[-0.96px] font-[400] text-[#000]">{{ footer[3].name }}
                    </div>
                    <div class="text-[24px] cursor-pointer tracking-[-0.96px] font-[400] text-[#000]">{{ footer[4].name }}
                    </div>
                    <div class="text-[24px] cursor-pointer tracking-[-0.96px] font-[400] text-[#000]">{{ footer[5].name }}
                    </div>
                </div>
                <!--end 2-->
                <!--3-->
                <div class="space-y-[20.54px]">
                    <div class="text-[24px] cursor-pointer tracking-[-0.96px] font-[400] text-[#000]">{{ footer[6].name }}
                    </div>
                    <div class="text-[24px] cursor-pointer tracking-[-0.96px] font-[400] text-[#000]">{{ footer[7].name }}
                    </div>
                    <div class="text-[24px] cursor-pointer tracking-[-0.96px] font-[400] text-[#000]">{{ footer[8].name }}
                    </div>
                </div>
                <!--end 3-->
            </div>
            <!--end flexes-->
        </div>
        <!---->
        <div class="w-full mb-[24px] border-b border-[#000]"></div>
        <div class="flex items-center space-x-[9.85px] w-fit mx-auto">
            <div><img src="/img/copyright.svg" class="" /></div>
            <div class="text-[#4d4d4d] tracking-[-0.985px] text-[24.615px] font-[400]">
                <span>{{ getyear }}</span> Plan-It
            </div>
        </div>
        <!--end of container-->
    </div>
</template>

<style scoped>
.footer_container {
    background: url('/img/FooterBg.png'), #fff;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    object-fit: contain;

    @apply px-[111px] pt-[134.37px]
}

.fly_rotate {
    transform: rotate(180deg);
}
</style>