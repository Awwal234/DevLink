<script lang='ts' setup>
import { onMounted } from 'vue'
function readTailoredheight() {
    document.addEventListener('scroll', () => {
        const knownPosition = 2179;
        console.log(window.scrollY)
        if (window.scrollY >= knownPosition) {
            const caseone = document.getElementById('caseone') as HTMLDivElement
            caseone.classList.add('phoneone')
            const textone = document.getElementById('textone') as HTMLDivElement
            textone.classList.add('titleone')
            const texttwo = document.getElementById('texttwo') as HTMLDivElement
            texttwo.classList.add('titleone')
        }
        else {
            const caseone = document.getElementById('caseone') as HTMLDivElement
            caseone.classList.remove('phoneone')
            const textone = document.getElementById('textone') as HTMLDivElement
            textone.classList.remove('titleone')
            const texttwo = document.getElementById('texttwo') as HTMLDivElement
            texttwo.classList.remove('titleone')
        }
    })
}
function readcasetwo() {
    document.addEventListener('scroll', () => {
        const knownPosition = 2749;
        console.log(window.scrollY)
        if (window.scrollY >= knownPosition) {
            const casetwo = document.getElementById('casetwo') as HTMLDivElement
            casetwo.classList.add('phonetwo')
            const texttwo_one = document.getElementById('texttwo_one') as HTMLDivElement
            texttwo_one.classList.add('titletwo')
            const texttwo_two = document.getElementById('texttwo_two') as HTMLDivElement
            texttwo_two.classList.add('titletwo')
        }
        else {
            const casetwo = document.getElementById('casetwo') as HTMLDivElement
            casetwo.classList.remove('phonetwo')
            const texttwo_one = document.getElementById('texttwo_one') as HTMLDivElement
            texttwo_one.classList.remove('titletwo')
            const texttwo_two = document.getElementById('texttwo_two') as HTMLDivElement
            texttwo_two.classList.remove('titletwo')
        }
    })
}
onMounted(() => {
    readTailoredheight();
    readcasetwo();
})
</script>

<template>
    <div>
        <div class="flex mb-[84px] items-center">
            <div class="w-[50%]">
                <div id="textone" class="text-[#000] mb-[20px] text-[40px] font-[500]">
                    <span class="tracking-[-1.6px]">Effortless Planning</span>
                </div>
                <div id="texttwo" class="text-[#4d4d4d] w-[70%] text-[30px] font-[400] tracking-[-1.2px]">
                    Plan It makes trip planning easy
                    and convenient
                </div>
            </div>
            <div id="caseone" class="w-[50%] relative phonecaseone rounded-[28px] px-[86px] pt-[121px]">
                <img src="/img/effortlesimage.png" class="w-full h-fit" />
            </div>
        </div>
        <!----->
        <!--2-->
        <div class="flex mb-[84px] items-center">
            <div id="casetwo" class="w-[50%] relative phonecasetwo rounded-[28px] px-[106px] pb-[90.68px]">
                <img src="/img/budgetimage.png" class="w-full h-fit" />
            </div>
            <div class="w-[50%] float-right relative text-right">
                <div id="texttwo_one" class="text-[#000] text-right mb-[20px] text-[40px] font-[500]">
                    <span class="tracking-[-1.6px]">Real-Time Budgeting</span>
                </div>
                <div id="texttwo_two"
                    class="text-[#4d4d4d] w-[70%] float-right relative text-right text-[30px] font-[400] tracking-[-1.2px]">
                    Users can manage their budgets on the go,
                    getting real-time updates on expenses.
                </div>
            </div>
        </div>
        <!---->
        <!--3-->
        <div class="flex mb-[42px] items-center">
            <div class="w-[50%]">
                <div id="textthree" class="text-[#000] mb-[20px] text-[40px] font-[500]">
                    <span class="tracking-[-1.6px]">Seamless Communication</span>
                </div>
                <div id="textthreelol" class="text-[#4d4d4d] w-[80%] text-[30px] font-[400] tracking-[-1.2px]">
                    Plan-It provides a smooth platform for
                    group communication during travel planning
                </div>
            </div>
            <div id="casethree" class="w-[50%] relative phonecasethree rounded-[28px] px-[90px] pt-[0px] pb-[76px]">
                <img src="/img/commimage.png" class="w-full h-fit" />
            </div>
        </div>
        <!---->
        <div class="mx-auto mb-[61px] w-fit text-[#034bd9] tracking-[-1.52px] font-[500] text-center text-[38px]">
            + Many Features
        </div>
        <!---->
    </div>
</template>

<style scoped>
.phonecaseone {
    background: rgba(3, 75, 217, 0.13);
}

.phonecasetwo {
    background: rgba(255, 215, 0, 0.32);
}

.phonecasethree {
    background: rgba(3, 75, 217, 0.06);
}

.phoneone {
    animation: loadheight linear;
    animation-duration: 2000ms;
}

@keyframes loadheight {
    30% {
        background: rgba(255, 215, 0, 0.32);
    }

    100% {
        height: 100%;
    }
}

.phonetwo {
    animation: loadheighttwo linear;
    animation-duration: 2000ms;
}

@keyframes loadheighttwo {
    30% {
        background: rgba(3, 75, 217, 0.13);
    }

    100% {
        height: 100%;
    }
}

.titleone {
    animation: rotatetextone linear alternate;
    animation-duration: 2000ms;
}

@keyframes rotatetextone {
    0% {
        transform: rotate(0deg);
        opacity: 0.5;
    }

    50% {
        transform: rotate(10deg);
        opacity: 0.3;
    }

    100% {
        transform: rotate(0deg);
        opacity: 1;
    }
}

.titletwo {
    animation: rotatetexttwo linear alternate;
    animation-duration: 2000ms;
}

@keyframes rotatetexttwo {
    0% {
        transform: rotate(0deg);
        opacity: 0.5;
    }

    50% {
        transform: rotate(10deg);
        opacity: 0.3;
    }

    100% {
        transform: rotate(0deg);
        opacity: 1;
    }
}
</style>