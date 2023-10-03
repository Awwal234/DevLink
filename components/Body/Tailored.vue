<script lang='ts' setup>
import { onMounted } from 'vue'
function readTailoredheight() {
    document.addEventListener('scroll', () => {
        const knownPosition = 1123;
        console.log(window.scrollY)
        if (window.scrollY >= knownPosition) {
            const tailored = document.getElementById('tailored') as HTMLDivElement
            tailored.classList.add('firstspan')
        }
        else {
            const tailored = document.getElementById('tailored') as HTMLDivElement
            tailored.classList.remove('firstspan')
        }
    })
}
onMounted(() => {
    readTailoredheight();
})
</script>

<template>
    <div class="h-fit">
        <div class="w-[40%] z-[10] mt-[101px] relative mx-auto">
            <img src="/img/fullimagetrip.png" class="w-full h-fit object-cover" />
        </div>
        <div class="bg-[#034BD9] tailorespace overflow-y-hidden relative mt-[-530px] w-full px-[261.5px] pb-[112px]">
            <div class="mx-auto mb-[40px] pt-[650px] flex w-fit">
                <div id="tailored" class="text-[#fff] spanlol text-[64px] font-[500] tracking-[-0.64px]">
                    <span class="">Tailored</span>
                </div>
                <div class="items-center relative mt-[50px] flex">
                    <div class="text-[#fff] text-[58px] font-[500] tracking-[-2.32px]">
                        for
                    </div>
                    <div
                        class="text-[#fff] px-[30px] border-b-[4px] border-[#ffd700] text-[58px] font-[500] tracking-[-2.32px]">
                        you
                    </div>
                </div>
            </div>
            <div class="text-[#fff] w-full tracking-[-1.28px] mx-auto font-[400] text-center text-[32px]">
                Plan-It connects you quickly and effortlessly with a pool of amazing journeys that will meet your specific
                needs.
            </div>
            <!---->
        </div>
        <BodyCategory />
    </div>
</template>

<style scoped>
.spanlol {
    height: fit-content;
}

.firstspan {
    animation: epq linear reverse;
    animation-duration: 2000ms;
}

@keyframes epq {
    0% {
        transform: scale(0);
    }

    40% {
        transform: scale(20);
    }

    60% {
        transform: scale(24);
    }

    80% {
        transform: scale(26);
    }

    100% {
        transform: scale(29);
    }
}

.tailorespace {
    overflow-x: hidden;
}

.tailorespace::-webkit-scrollbar {
    display: hidden;
}
</style>